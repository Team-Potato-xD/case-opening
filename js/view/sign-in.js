views.signIn = function() {

    if (isSignedIn()) {
        console.error('You are already signed in.');
        goTo('home');
        return;
    }

    setTitle('Sign in');
    setLayout('center');

    return /*HTML*/`
    <section>
        <article class="panel vertical-view">
            <h3>Sign in</h3>
            <input type="text" placeholder="Username" value="${model.inputs.signIn.username}" oninput="model.inputs.signIn.username = this.value;">
            <input type="password" placeholder="Password" value="${model.inputs.signIn.password}" oninput="model.inputs.signIn.password = this.value;">
            <button onclick="doSignIn();">Sign in</button>
        </article>
    </section>
    `;
    
};