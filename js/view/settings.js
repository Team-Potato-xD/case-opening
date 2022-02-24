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
            <h3>Account</h3>
            <div class="container account-view">
                <input type="text" placeholder="Username" value="${model.inputs.settings.username}" oninput="model.inputs.settings.username = this.value;">
                <input type="password" placeholder="Password" oninput="model.inputs.settings.password = this.value;">
                <input type="password" placeholder="Password again" oninput="model.inputs.settings.passwordAgain = this.value;">
                <button onclick="doUpdateUser();">Update</button>
            </div>
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