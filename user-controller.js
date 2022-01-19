// Use with "new" keyword
function IncrementableIndex(name) {
    lastIndex = localStorage.getItem(`_index_${name}`) || 0;
    this.next = () => {
        lastIndex++;
        localStorage.setItem(`_index_${name}`, lastIndex);
        return lastIndex;
    };
}

// Perstinence of data
function loadData() {
    model.persist.forEach(key => {
        model[key] = JSON.parse(localStorage.getItem(`_data_${key}`));
    });
}

loadData();

function saveData() {
    model.persist.forEach(key => {
        localStorage.setItem(`_data_${key}`, JSON.stringify(model[key]));
    });
}

// Temporary id creator
const userId = new IncrementableIndex('user');

// Loosely search username
function isUsernameTaken(username) {
    return model.users.filter(user => {
        return user.username.localeCompare(username, undefined, {sensitivity: 'base'}) === 0;
    }).length > 0;
}

/*
 * Functions to find user object or their index
 */

function findUserById(id) {
    const result = model.users.filter(user => user.id === id);
    return result.length > 0 ? result[0] : null;
}

function findUserIndexById(id) {
    return model.users.findIndex(user => user.id === id);
}

function findUserByUsername(username) {
    const result = model.users.filter(user => user.username === username);
    return result.length > 0 ? result[0] : null;
}

function findUserIndexByUsername(username) {
    return model.users.findIndex(user => user.username === username);
}

/*
 * Functions to create, edit, delete user
 */

function createUser(username, password) {
    // Exit if username is taken
    if (isUsernameTaken(username)) return false;
    // Get a new ID
    const id = userId.next();
    // Push new user to model
    model.users.push({
        id,
        avatar: '',
        username,
        password,
        balance: 0
    });
    // Set new inventory
    model.inventories[id] = [];
    // Done, return true
    return true;
}

function uploadAvatar(id, element) {
    if (!element || element.files.length < 1) return false;
    const index = findUserIndexById(id);
    if (index === -1) return false;
    const reader = new FileReader();
    reader.readAsDataURL(element.files[0]);
    reader.addEventListener('load', () => {
        model.users[index].avatar = reader.result;
    });
}

function changeUsername(id, username) {
    const index = findUserIndexById(id);
    if (index === -1) return false;
    model.users[index].username = username;
    return true;
}

function changePassword(id, password) {
    const index = findUserIndexById(id);
    if (index === -1) return false;
    model.users[index].password = password;
    return true;
}

function addBalance(id, amount) {
    const index = findUserIndexById(id);
    if (index === -1) return false;
    model.users[index].balance += amount;
    return true;
}

function subBalance(id, amount) {
    const index = findUserIndexById(id);
    if (index === -1) return false;
    model.users[index].balance -= amount;
    return true;
}

function deleteUser(id) {
    const index = findUserIndexById(id);
    if (index === -1) return false;
    model.users.splice(index, 1);
    delete model.inventories[index];
    return true;
}

function signIn(username, password) {
    const index = findUserIndexByUsername(username);
    if (index === -1 || model.users[index].password !== password) return false;
    model.app.userId = model.users[index].id;
    return true;
}

function signOut() {
    model.app.userId = 0;
}