// Temporary id creator
const userId = new IncrementableIndex();

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
    if (findUserById(username) !== null) return false;
    // Get a new ID
    const id = userId.next();
    // Push new user to model
    model.users.push({
        id: id,
        avatar: '',
        username: username,
        password: password,
        balance: 0
    });
    // Set new inventory
    model.inventories[id] = [];
    // Done, return true
    return true;
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

function getBalance(id) {
    const user = findUserById(id);
    if (!user) return -1;
    return user.balance;
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