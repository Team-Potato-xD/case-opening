// const itemId = new IncrementableIndex('items');

function createItem(name, rarity, description, price){
    model.items.push({
        id: 1,
        image: '',
        name: name,
        rarity: rarity,
        description: description,
        price: price,
    });
}

function editId(id){
}

function findId(id){
    const result = model.items.filter(item => item.id === id);
    return result.length > 0 ? result[0] : null;
}

function findIdIndex(id){
    return model.items.findIndex(item => item.id === id);
}

function editImage(id){
}

function findImage(id){
    const result = model.items.filter(item => item.image === id);
    return result.length > 0 ? result[0] : null;
}

function findImageIndex(id){
    return model.items.findIndex(item => item.image === id);
}

function editName(id){
}

function findName(id){
    const result = model.items.filter(item => item.name === id);
    return result.length > 0 ? result[0] : null;
}

function findNameIndex(id){
    return model.items.findIndex(item => item.name === id);
}

function editDescription(id){
}

function findDescription(id){
    const result = model.items.filter(item => item.description === id);
    return result.length > 0 ? result[0] : null;
}

function findDescriptionIndex(id){
    return model.items.findIndex(item => item.description === id);
}

function editPrice(id){
}

function findPrice(id){
    const result = model.items.filter(item => item.price === id);
    return result.length > 0 ? result[0] : null;
}

function findPriceIndex(id){
    return model.items.findIndex(item => item.price === id);
}

//edit things from 2nd function

function deleteItem(id){
}

function findItem(id){
}