views.inventory = function() {

    setTitle('Inventory');
    setLayout('inventory');

    let user = findUserById(model.app.inventoryId)

    return /*HTML*/`
    <section class="container">
        <aside>
            ${getAvatar(user.avatar, 200)}
        </aside>
        <section class="panel">
            <h3>${user.username}'s Inventory</h3>
            <h5>Amount of items: ${model.inventories[user.id].length}</h5>
        </section>
        <section class="panel">
            <h3>List of items</h3>
        </section>
        <aside class="panel">
            <h3>Item info</h3>
        </aside>
    </section>
    `;

};