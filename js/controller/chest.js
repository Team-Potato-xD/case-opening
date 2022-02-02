// ID iterator
model.iterators.chests = createIncrementableIndex(model.chests.length);

function createChest(name, description, price, drops) {
    model.cases.push({
        id: model.iterators.chests.next(),
        image: '',
        name: name,
        description: description,
        price: price,
        drops: drops,
        items: []
    });
}

function findChest(id) {
    const result = model.cases.filter(cases => cases.id === id);
    return result.length > 0 ? result[0] : null;
}

function findChestIndex(id) {
    return model.cases.findIndex(cases => cases.id === id);
}

function addChestItem(chestId, itemId) {
    const chest = findChest(chestId);
    chest.push(itemId);
}