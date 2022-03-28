views.home = function() {

    setTitle('Home');
    setLayout('normal');

    return /*HTML*/`
    <section>
        <article class="splash">
            <div class="container">
                <h2>Treasure Chests</h2>
            </div>
        </article>
        <article class="splash">
            <div class="container">
                <img src="${model.images.exampleChest}" alt="Chest">
                <h4>Open chests with loot!</h4>
            </div>
        </article>
        <article class="splash">
            <div class="container">
                <h4>Get rewards from the chests!</h4>
                <img src="${model.images.exampleItem}" alt="Item">
            </div>
        </article>
        <article class="splash">
            <div class="container">
                <img src="${model.images.cashFlow}" alt="Item">
                <h4>Sell your rewards for money!</h4>
            </div>
        </article>
    </section>
    `;
    
};