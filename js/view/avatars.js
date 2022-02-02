views.avatars = function() {

    setTitle('Avatars');
    setLayout('full');

    return /*HTML*/`
    <section>
        <div class="container">
            ${getAvatars(128, true)}
        </div>
    </section>
    `;
    
};