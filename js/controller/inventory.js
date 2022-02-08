// Make inventory size the length of the inventory-list
function getInventorySize(id) {
    return model.inventories[id].length;
}

// Remove item from inventory array. User-ID. Item-ID.
function sellInventoryItem(id, index) {
    const item = findItem(model.inventories[id].splice(index, 1));
    addBalance(item.price);
}

// Add price of items together to measure total value of inventory
function estimateValueInventory() {
    return model.inventories[id].reduce((sum, itemId) => {
        const item = findItem(itemId);
        return sum + item.price;
    }, 0);
}