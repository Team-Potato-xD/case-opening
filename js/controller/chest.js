// ID iterator
model.iterators.chests = createIncrementableIndex(model.chests.length);

function createChest(image, name, description, price, drops) {
    const id = model.iterators.chests.next();
    model.chests.push({
        id: id,
        image: image,
        name: name,
        description: description,
        price: price,
        drops: drops,
        items: []
    });
    console.info(`Chest "${name}" was added!`);
    return id;
}

function findChest(id) {
    const result = model.chests.filter(cases => cases.id === id);
    return result.length > 0 ? result[0] : null;
}

function findChestIndex(id) {
    return model.chests.findIndex(cases => cases.id === id);
}

function estimateChestPrice(id) {
    const chest = findChest(id);
    let total = chest.items.reduce((sum, itemId) => {
        const item = findItem(itemId);
        return sum + item.price;
    }, 0);
    return total / chest.items.length * 0.75;
}

function addChestItems(chestId, ...itemIds) {
    const chest = findChest(chestId);
    // Is spread operator allowed?
    chest.items.push(...itemIds);
}

function openChest(chestId, userId = model.app.userId) {
    const items = getItemsWithDropRates(chestId);
    let percent = 0, random = Math.random() * 100, wonItem;
    for (let item of items) {
        if (percent <= random && random < percent + item.drop) {
            wonItem = item;
            break;
        }
        percent += item.drop;
    }
    if (!wonItem) return null;
    model.inventories[userId].push(wonItem.id);
    return wonItem;
}

function openChests(chestId, amount = 1, userId = model.app.userId) {
    const items = getItemsWithDropRates(chestId), wonItems = [];
    for (let i = 0; i < amount; i++) {
        let percent = 0, random = Math.random() * 100;
        for (let item of items) {
            if (percent <= random && random < percent + item.drop) {
                wonItems.push(item);
                break;
            }
            percent += item.drop;
        }
    }
    model.inventories[userId].push(...wonItems.map(item => item.id));
    return wonItems;
}

function getItemsWithDropRates(chestId) {
    const chest = findChest(chestId);
    if (chest === null || chest.drops.length !== 5) return [];
    const amount = [0, 0, 0, 0, 0];
    return chest.items.map(itemId => {
        let item = findItem(itemId);
        amount[item.rarity]++;
        return item;
    }).map(item => {
        item.drop = chest.drops[item.rarity] / amount[item.rarity];
        return item;
    });
}

// rarity then name
function sortItemList(items) {
    return items.sort((first, second) => {
        if (first.rarity > second.rarity) {
            return 1;
        } else if (first.rarity < second.rarity) {
            return -1;
        } else if (first.name > second.name) {
            return 1;
        } else if (first.name < second.name) {
            return -1;
        } else {
            return 0;
        }
    });
}

// won item is at array.length - 5 (index 15 if default value), totalItems must be 8 or more
function getRandomItemList(chestId, wonItem, totalItems = 20) {
    if (totalItems < 8 || !wonItem) return [];
    const chest = findChest(chestId), items = [];
    for (let i = 0; i < totalItems; i++) {
        if (i === totalItems - 5) {
            items.push(wonItem);
            continue;
        }
        let random = Math.floor(Math.random() * chest.items.length),
            item = findItem(chest.items[random]);

        items.push(item);
    }
    return items;
}