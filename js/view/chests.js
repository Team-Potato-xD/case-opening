views.chests = function() {

    setTitle('Chests');
    setLayout('split');

    return /*HTML*/`
    <section class="container">
        <section class="panel chests">
            <h3 class="chest-title">List of chests</h3>
            <div>Marvel Chest</div>
            <div>Harry Potter Trunk</div>
            <div>Marvel Chest</div>
            <div>Harry Potter Trunk</div>
        </section>
        <aside class="panel">
            <h3>Chest info</h3>
        </aside>
    </section>
    `;

};