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

function deleteItem(id){
    let i = findItemIndex(id);
    model.items.splice(i, 1);
}

function findItem(id){
    const result = model.items.filter(item => item.id === id);
    return result.length > 0 ? result[0] : null;
}

function findItemIndex(id){
    return model.items.findIndex(item => item.id === id);
}

// //start of edit image
// function editImage(id){

// }

// function findImage(id){
//     const result = model.items.filter(item => item.image === id);
//     return result.length > 0 ? result[0] : null;
// }

// function findImageIndex(id){
//     return model.items.findIndex(item => item.image === id);
// }
// //end of edit image

// //start of edit name
// function editName(id){
// }

// function findName(id){
//     const result = model.items.filter(item => item.name === id);
//     return result.length > 0 ? result[0] : null;
// }

// function findNameIndex(id){
//     return model.items.findIndex(item => item.name === id);
// }
// //end of edit name

// //start of edit description
// function editDescription(id){
// }

// function findDescription(id){
//     const result = model.items.filter(item => item.description === id);
//     return result.length > 0 ? result[0] : null;
// }

// function findDescriptionIndex(id){
//     return model.items.findIndex(item => item.description === id);
// }
// //end of edit description

// //start of edit price
// function editPrice(id){
// }

// function findPrice(id){
//     const result = model.items.filter(item => item.price === id);
//     return result.length > 0 ? result[0] : null;
// }

// function findPriceIndex(id){
//     return model.items.findIndex(item => item.price === id);
// }
// //end of edit price

// //edit things from 2nd function

