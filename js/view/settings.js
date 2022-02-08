views.settings = function() {

    setTitle('Settings');
    setLayout('normal');

    return /*HTML*/`
    <section>
        <article class="container panel center-text">
            <h3>Pick avatar</h3>
            ${getAvatars(128, 2)}
        </article>
        <article class="container panel center-text">
            <h3>Add balance</h3>
            <article class="payment container">
                <span class="balance">$</span>
                <input type="number" placeholder="Amount to add..." value="${model.inputs.settings.addBalance}" oninput="model.inputs.settings.addBalance = this.value;">
                <img src="${model.images.paymentOptions}" alt="payment options">
                <button onclick="doAddBalance();">Pay</button>
            </article>
        </article>
    </section>
    `;
    
};