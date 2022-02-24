views.chests = function() {

    if (!isSignedIn()) {
        return;
    }

    setTitle('Chests');
    setLayout(model.currentChest ? 'split' : 'normal');

    return /*HTML*/`
    <section class="container">
        <section class="panel center-align full-size chest-list">
            <h2>Available chests</h2>
            <div class="chests">
                ${getChests()}
            </div>
        </section>
        ${getCurrentChest()}
    </section>
    `;

};

function getChests() {
    return model.chests.map(chest => {
        return /*HTML*/`
        <figure class="item" onclick="setCurrentChest(${chest.id});">
            <img src="${model.chestPath}/${chest.image ? chest.image : model.chestDefault}" alt="${chest.name}">
            <figcaption>${chest.name} <span class="balance">${formatBalance(chest.price)}</span></figcaption>
        </figure>
        `;
    }).join('');
}

function setCurrentChest(id) {
    model.currentChest = id;
    render();
}

function getCurrentChest() {
    if (!model.currentChest) return '';
    const chest = findChest(model.currentChest);
    if (!chest) return '';
    const items = sortItemList(getItemsWithDropRates(chest.id));
    const itemList = items.map(item => {
        return /*HTML*/`
        <li class="${rarity[item.rarity].toLowerCase()}-txt">
            <figure class="item ${rarity[item.rarity].toLowerCase()} tiny">
                <img src="${model.itemPath}/${item.image}" alt="${item.name}">
            </figure>
            <span>${item.name} (${rarity[item.rarity]} ${+item.drop.toFixed(2)}%)</span>
        </li>
        `;
    }).join('');
    return /*HTML*/`
    <aside class="panel current-chest">
        <h2 class="center-align">${chest.name}</h2>
        <figure class="background">
            <figcaption class="balance">${formatBalance(chest.price)}</figcaption>
            <img src="${model.chestPath}/${chest.image ? chest.image : model.chestDefault}" alt="${chest.name}">
        </figure>
        <p>${chest.description}</p>
        <ul class="drop-rates">
            ${itemList}
        </ul>
        <div class="buy-form">
            <button ${chest.items.length > 0 ? `onclick="buyChests();"` : 'disabled'}>Buy</button>
            <input type="number" value="${model.inputs.buyAmount}" oninput="model.inputs.buyAmount = this.value;">
        </div>
    </aside>
    `;
}

function buyChests() {
    const chest = findChest(model.currentChest);
    if (!subBalance(chest.price * model.inputs.buyAmount)) return;
    for (let i = 0; i < parseInt(model.inputs.buyAmount); i++) {
        model.chestQueue.push(chest.id);
    }
    model.inputs.buyAmount = 1;
    model.currentChest = 0;
    goTo('opening');
}