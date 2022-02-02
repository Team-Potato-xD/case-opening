views.signUp = function() {

    if (isSignedIn()) {
        console.error('You are already signed in.');
        goTo('home');
        return;
    }

    setTitle('Sign up');
    setLayout('center');

    return /*HTML*/`
    <section>
        <article class="panel vertical-view">
            <h3>Sign up</h3>
            <input type="text" placeholder="Username" value="${model.inputs.signUp.username}" oninput="model.inputs.signUp.username = this.value;">
            <input type="password" placeholder="Password" value="${model.inputs.signUp.password}" oninput="model.inputs.signUp.password = this.value;">
            <input type="password" placeholder="Password again" value="${model.inputs.signUp.passwordAgain}" oninput="model.inputs.signUp.passwordAgain = this.value;">
            <button onclick="doSignUp();">Sign up</button>
        </article>
    </section>
    `;
    
};