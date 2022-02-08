// ID iterator
model.iterators.chests = createIncrementableIndex(model.chests.length);

function createChest(name, description, price, drops) {
    const id = model.iterators.chests.next();
    model.chests.push({
        id: id,
        image: '',
        name: name,
        description: description,
        price: price,
        drops: drops,
        items: []
    });
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