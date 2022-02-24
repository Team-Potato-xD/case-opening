views.inventory = function() {

    if (!isSignedIn()) {
        return;
    }

    setTitle('Inventory');
    setLayout('inventory');

    let user = findUserById(model.app.inventoryId)

    return /*HTML*/`
    <section class="container">
        <aside>
            ${getAvatar(user.avatar, 200)}
        </aside>
        <section class="panel">
            <h3>${user.username}'s Inventory</h3>
            <h5>Amount of items: ${model.inventories[user.id].length}</h5>
        </section>
        <section class="panel">
            <h3>List of items</h3>
            <div class="item-list">
                ${getItems(user.id)}
            </div>
        </section>
        <aside class="panel">
            ${showActiveItem(user.id)}
        </aside>
    </section>
    `;

};

function getItems(userId) {
    if (!(userId in model.inventories)) return [];
    return model.inventories[userId].map((itemId, i) => {
        const item = findItem(itemId);
        return /*HTML*/`
        <figure class="item" onclick="model.activeItem = ${i}; render();">
            <img src="${model.itemPath}/${item.image ? item.image : model.itemDefault}" alt="${item.name}">
            <figcaption>${item.name}</figcaption>
        </figure>
        `;
    }).join('');
}

function showActiveItem(userId) {
    if (model.activeItem < 0) return 'No item selected';
    const item = findItem(model.inventories[userId][model.activeItem]);
    return /*HTML*/`
    <h3>${item.name}</h3>
    <img src="${model.itemPath}/${item.image ? item.image : model.itemDefault}" alt="${item.name}">
    <p>${item.description}</p>
    <p class="balance">${formatBalance(item.price)}</p>
    <button onclick="sellActiveItem(${userId});">Sell</button>
    `;
}

function sellActiveItem(userId) {
    if (model.activeItem < 0) return;
    const item = findItem(model.inventories[userId][model.activeItem]);
    if (!addBalance(item.price, userId)) return;
    model.inventories[userId].splice(model.activeItem, 1);
    model.activeItem = -1;
    render();
}