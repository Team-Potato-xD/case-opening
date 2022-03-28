// ID iterator
model.iterators.items = createIncrementableIndex(model.items.length);

const rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];

function createItem(image, name, price, rarity, description) {
    const id = model.iterators.items.next();
    model.items.push({
        id: id,
        image: image,
        name: name,
        price: price,
        rarity: rarity,
        description: description
    });
    return id;
}

function createItems(...items) {
    return items.map(item => {
        item.id = model.iterators.items.next();
        item.image = item.image || '';
        item.name = item.name || '';
        item.price = item.price || 0;
        item.rarity = item.rarity || 0;
        item.description = item.description || 0;
        model.items.push(item);
        return item.id;
    });
}

function findItem(id) {
    const result = model.items.filter(item => item.id === id);
    return result.length > 0 ? result[0] : null;
}

function findItemIndex(id) {
    return model.items.findIndex(item => item.id === id);
}

function deleteItem(id) {
    let i = findItemIndex(id);
    model.items.splice(i, 1);
}