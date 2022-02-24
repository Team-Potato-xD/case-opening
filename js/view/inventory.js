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
        <section class="panel" style="display: flex; align-items: center; justify-content: center; flex-direction: column; position: relative;">
            <h2>${user.username}'s Inventory</h2>
            <h5>Qty: ${model.inventories[user.id].length} / <span class="balance">${formatBalance(estimateValueInventory(user.id))}</span></h5>
            <div style="display: grid; grid-template: auto / repeat(2, auto); grid-gap: 5px; position: absolute; top: 5px; right: 5px;">
                <input type="text" placeholder="Username" value="${model.inputs.showInventory}" oninput="model.inputs.showInventory = this.value;">
                <button onclick="doShowInventory();"><i class="material-icons">visibility</i></button>
            </div>
        </section>
        <section class="panel center-horizontal">
            <div class="item-view">
                <h2>${user.username}'s items</h2>
                <div class="item-grid">
                    ${getItems(user.id)}
                </div>
            </div>
        </section>
        <aside class="panel current-item">
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
        <figure class="item ${rarity[item.rarity].toLowerCase()}" onclick="model.activeItem = ${i}; render();">
            <img src="${model.itemPath}/${item.image ? item.image : model.itemDefault}" alt="${item.name}">
        </figure>
        `;
    }).join('');
}

function showActiveItem(userId) {
    if (model.activeItem < 0 || model.inventories[userId].length < 1) return '';
    const item = findItem(model.inventories[userId][model.activeItem]);
    return /*HTML*/`
    <h2>${item.name}</h2>
    <img src="${model.itemPath}/${item.image ? item.image : model.itemDefault}" alt="${item.name}">
    <ul class="item-props">
        <li class="${rarity[item.rarity].toLowerCase()}-txt">${rarity[item.rarity]}</li>
        <li class="balance">${formatBalance(item.price)}</li>
    </ul>
    <p>${item.description}</p>
    <button onclick="sellActiveItem(${userId});"><i class="material-icons">sell</i>Sell</button>
    `;
}

function sellActiveItem(userId) {
    if (model.activeItem < 0) return;
    const item = findItem(model.inventories[userId][model.activeItem]);
    if (!addBalance(item.price, userId)) return;
    model.inventories[userId].splice(model.activeItem, 1);
    model.activeItem = 0;
    render();
}