// ID iterator
model.iterators.users = createIncrementableIndex(model.users.length);

/*
 * Functions to find user object or their index
 */

function findUserById(id) {
    if (!id) return null;
    const result = model.users.filter(user => user.id === id);
    return result.length > 0 ? result[0] : null;
}

function findUserIndexById(id) {
    if (!id) return -1;
    return model.users.findIndex(user => user.id === id);
}

function findUserByUsername(username) {
    if (!username) return null;
    const result = model.users.filter(user => user.username === username);
    return result.length > 0 ? result[0] : null;
}

function findUserIndexByUsername(username) {
    if (!username) return -1;
    return model.users.findIndex(user => user.username === username);
}

// Get signed in user
function getCurrentUser() {
    return findUserById(model.app.userId);
}

/*
 * Functions to create, edit, delete user
 */

function createUser(username, password) {
    // Username has to be longer than 1 character
    if (username.length < 2) {
        console.error('Username has to be 2 characters or longer!');
        return 0;
    }
    // Password has to be longer than 5 characters
    if (password.length < 6) {
        console.error('Password has to be 6 characters or longer!');
        return 0;
    }
    // Exit if username is taken
    if (findUserByUsername(username) !== null) {
        console.error('Username is already in use!');
        return 0;
    }
    // Get a new ID
    const id = model.iterators.users.next();
    // Make sure index doesn't exist to avoid dupes
    if (findUserIndexById(id) !== -1) {
        console.error('ID is already in use!');
        return 0;
    }
    // Push new user to model
    model.users.push({
        id: id,
        avatar: 0,
        username: username,
        password: password,
        balance: 0
    });
    // Set new inventory
    model.inventories[id] = [];
    // Done, return true
    console.info(`User "${username}" has been made with ID ${id}.`);
    return id;
}

function changeUsername(username, id = model.app.userId) {
    const user = findUserById(id);
    if (username.length < 2) {
        console.error('Username has to be at least 2 characters!');
        return false;
    }
    if (!user) {
        console.error('User does not exist!');
        return false;
    }
    console.info(`Username has been changed for "${username}" (was "${user.username}").`);
    user.username = username;
    return true;
}

function changePassword(password, id = model.app.userId) {
    const user = findUserById(id);
    if (!user) {
        console.error('User does not exist!');
        return false;
    }
    user.password = password;
    console.info(`Password has been changed for "${user.username}".`);
    return true;
}

function doUpdateUser() {
    changeUsername(model.inputs.settings.username);
    if (model.inputs.settings.password) {
        if (model.inputs.settings.password === model.inputs.settings.passwordAgain) {
            changePassword(model.inputs.settings.password);
        } else {
            console.error('Passwords does not match!');
        }
        model.inputs.settings.password = '';
        model.inputs.settings.passwordAgain = '';
    }
    render();
}

function deleteUser(id) {
    const index = findUserIndexById(id);
    if (index === -1) {
        console.error('User does not exist!');
        return false;
    }
    model.users.splice(index, 1);
    delete model.inventories[index];
    if (model.app.userId === id) signOut();
    console.info('User has been deleted.');
    return true;
}

/*
 * Manage signing in users
 */

function isSignedIn() {
    return !!model.app.userId;
}

function signUp(username, password, passwordAgain) {
    if (isSignedIn()) {
        console.error('You are already signed in!');
        return false;
    }
    if (password !== passwordAgain) {
        console.error('Passwords does not match!');
        return;
    }
    return createUser(username, password);
}

// Simplifies the process in the view itself
function doSignUp() {
    if (!signUp(model.inputs.signUp.username, model.inputs.signUp.password, model.inputs.signUp.passwordAgain)) return;
    model.inputs.signUp.username = '';
    model.inputs.signUp.password = '';
    model.inputs.signUp.passwordAgain = '';
    goTo('signIn');
}

function signIn(username, password) {
    if (isSignedIn()) {
        console.error('You are already signed in!');
        return false;
    }
    const user = findUserByUsername(username);
    if (!user) {
        console.error('User does not exist!');
        return false;
    } else if (user.password !== password) {
        console.error('Password is wrong!');
        return false;
    }
    model.app.userId = user.id;
    model.inputs.settings.username = user.username;
    console.info(`You signed in as "${user.username}".`);
    return true;
}

// Simplifies the process in the view itself
function doSignIn() {
    if (!signIn(model.inputs.signIn.username, model.inputs.signIn.password)) return;
    model.inputs.signIn.username = '';
    model.inputs.signIn.password = '';
    goTo('home');
}

function signOut() {
    if (!isSignedIn()) {
        console.warn('You are not signed in.');
        return false;
    }
    model.app.userId = 0;
    model.app.page = 'home';
    model.inputs.settings.username = '';
    console.info('You have been signed out.');
    return true;
}

/*
 * Functions for handling avatars
 */

function getAvatars(size = 128, mode = 0) {
    return model.avatars.map((_, index) => {
        return getAvatar(index, size, mode);
    }).join('');
}

function getAvatar(index = 0, size = 128, mode = 0, userId = model.app.userId) {
    let avatar = model.avatars[index];
    if (avatar.access && !avatar.access.includes(userId)) return '';
    return /*HTML*/`
    <figure 
        class="avatar${mode === 2 && isSignedIn() && getCurrentUser().avatar === index ? ' current' : ''}${mode === 2 ? ' selectable' : ''}" 
        style="--size: ${size}px" data-index="${index}" data-name="${avatar.name}"
        ${mode === 2 ? ` onclick="changeAvatar(${index});"` : ''}>
    <img src="${model.avatarPath}/${avatar.file}" alt="${avatar.name}">
    <figcaption>${avatar.name}</figcaption>
    ${mode !== 0 ? `<div>${mode !== 1 ? '' : 'Change<br>Avatar'}</div>` : ''}
    </figure>`;
}

function changeAvatar(index, userId = model.app.userId) {
    if (!isSignedIn()) {
        console.error('You have to be signed in to change avatar!');
        return false;
    }
    findUserById(userId).avatar = index;
    console.info(`You changed avatar to "${model.avatars[index].name}".`);
    // TEMP
    render();
    return true;
}

function findAvatarIndex(avatarName) {
    for (let i = 0; i < model.avatars.length; i++) {
        let avatar = model.avatars[i].name.toLowerCase();
        if (avatar.indexOf(avatarName.toLowerCase()) > -1) return i;
    }
}

function giveAvatarAccess(avatar, userId = model.app.userId) {
    if (hasAvatarAccess(avatar, userId)) return;
    model.avatars[avatar].access.push(userId);
}

function removeAvatarAccess(avatar, userId = model.app.userId) {
    if (!model.avatars[avatar].access || !model.avatars[avatar].access.includes(userId)) return;
    model.avatars[avatar].access.splice(model.avatars[avatar].access.indexOf(userId), 1);
    const user = findUserById(userId);
    if (!user) {
        console.warn('Attempted to change avatar for a user that does not exist.');
        return;
    }
    changeAvatar(0, userId);
}

function hasAvatarAccess(avatar, userId = model.app.userId) {
    return !model.avatars[avatar].access || model.avatars[avatar].access.includes(userId);
}

/*
 * Functions to handle user balance
 */

function getBalance(id = model.app.userId) {
    const user = findUserById(id);
    if (!user) {
        console.warn('Attempted to get balance from a user that does not exist.');
        return -1;
    }
    return user.balance;
}

function formatBalance(amount) {
    return '$' + amount.toLocaleString();
}

function setBalance(amount, id = model.app.userId) {
    const user = findUserById(id);
    if (!user) {
        console.error('User is not signed in or does not exist!')
        return false;
    }
    user.balance = parseInt(amount);
    console.info(`Set balance $${amount} for "${user.username}".`);
    return true;
}

function doAddBalance() {
    if (!isSignedIn() || !model.inputs.settings.addBalance) return;
    if (!addBalance(model.inputs.settings.addBalance)) return;
    model.inputs.settings.addBalance = '';
    render();
}

function addBalance(amount, id = model.app.userId) {
    const user = findUserById(id);
    if (!user) {
        console.error('User is not signed in or does not exist!')
        return false;
    }
    amount = parseInt(amount);
    user.balance += amount;
    console.info(`Added balance $${amount} to "${user.username}".`);
    return true;
}

function subBalance(amount, id = model.app.userId) {
    const user = findUserById(id);
    if (!user) {
        console.error('User is not signed in or does not exist!')
        return false;
    }
    amount = parseInt(amount);
    if (user.balance < amount) {
        console.error(`Attempted to subtract more balance than available!`);
        return false;
    }
    user.balance -= amount;
    console.info(`Removed balance $${amount} from "${user.username}".`);
    return true;
}