// ID iterator
model.iterators.items = createIncrementableIndex(model.items.length);

function createItem(name, price, rarity, description){
    model.items.push({
        id: model.iterators.items.next(),
        image: '',
        name: name,
        price: price,
        rarity: rarity,
        description: description
    });
}

function findItem(id){
    const result = model.items.filter(item => item.id === id);
    return result.length > 0 ? result[0] : null;
}

function findItemIndex(id){
    return model.items.findIndex(item => item.id === id);
}

function deleteItem(id){
    let i = findItemIndex(id);
    model.items.splice(i, 1);
}