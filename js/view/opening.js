views.opening = function() {

    if (model.chestQueue.length < 1) {
        goTo('chests');
        return;
    }

    setTitle('Chest Opening');
    setLayout('normal');

    const chestId = model.chestQueue.shift();
    const chest = findChest(chestId);
    const randomItems = getRandomItemList(chestId, openChest(chestId));
    const items = sortItemList(getItemsWithDropRates(chest.id));
    const itemList = items.map(item => {
        return /*HTML*/`
        <li class="${rarity[item.rarity].toLowerCase()}-txt">
            <figure class="item ${rarity[item.rarity].toLowerCase()} tiny">
                <img src="${model.itemPath}/${item.image}" alt="${item.name}">
            </figure>
            <span>${item.name} (${rarity[item.rarity]} ${+item.drop.toFixed(2)}%)</span>
        </li>
        `;
    }).join('');

    if (randomItems.length < 1) {
        console.error('No items found');
        goTo('chests');
        return;
    }

    model.tasks.push(setTimeout(() => {
        const winner = document.getElementById('winner');
        winner.parentNode.parentNode.classList.add('show');
        let x = winner.offsetLeft - (winner.parentNode.parentNode.clientWidth / 2) + (winner.clientWidth / 2), i = 0;
        let interval = setInterval(() => {
            if (i >= x) {
                clearInterval(interval);
                return;
            }
            i += x / 1000;
            winner.parentNode.style.transform = 'translate(-' + i + 'px)';
        }, x / 1000);
        model.tasks.push(interval);
        model.tasks.push(setTimeout(goTo, 8000, 'opening'));
    }, 2500));

    return /*HTML*/`
    <section class="container">
        <section class="panel opening-view">
            <h2 class="center-align">Opening ${chest.name}... (${model.chestQueue.length} left)</h2>
            <article id="open-animation" class="background">
                <div class="inner">
                    ${showItems(randomItems)}
                </div>
                <div class="line"></div>
                <figure class="split-img">
                    <img src="${model.chestPath}/${chest.image ? chest.image : model.chestDefault}" alt="${chest.name}">
                    <img src="${model.chestPath}/${chest.image ? chest.image : model.chestDefault}" alt="${chest.name}">
                </figure>
            </article>
            <ul class="drop-rates">
                ${itemList}
            </ul>
            <div>
                <p>${chest.description}</p>
                <button onclick="goTo('opening')" class="center"><i class="material-icons">skip_next</i>Skip</button>
            </div>
        </section>
    </section>
    `;

};

function showItems(items) {
    return items.map((item, i) => {
        return /*HTML*/`
            <figure class="item ${rarity[item.rarity].toLowerCase()}"${i === 15 ? ' id="winner"' : ''} data-id="${item.id}">
                <img src="${model.itemPath}/${item.image ? item.image : model.itemDefault}" alt="${item.name}">
                <figcaption>${item.name} ${+item.drop.toFixed(2)}%</figcaption>
            </figure>
        `;
    }).join('');
}