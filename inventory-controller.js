// Make inventory size the length of the inventory-list
function getInventorySize(id) {
    model.inventories[id].length;
}

// Remove item from inventory array. User-ID. Item-ID.
function sellInventoryItem(id, index) {
    const itemId = model.inventories[id].splice(index, 1);
    // Need function to find item
    // addBalance(id, 100);
}
// Add price of items together to measure total value of inventory
function estimateValueInventory() {
    const sum = model.inventories[id].reduce(index)
}