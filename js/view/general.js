function getHeader() {
    return /*HTML*/`
    <header>
        <div class="container">
            <h2 class="hide-s">${model.name}</h2>
            <h2 class="hide-m-l">${model.shortName}</h2>
            <nav>
                <ul>
                    <li onclick="goTo('home');">Home</li>
                    <li onclick="goTo('chests');">Chests</li>
                    <li onclick="goTo('inventory');">Inventory</li>
                </ul>
                ${getAuthNavigation()}
            </nav>
        </div>
    </header>
    `;
}

function getAuthNavigation() {
    if (isSignedIn()) {
        let user = getCurrentUser();
        return /*HTML*/`
        <ul>
            <li class="balance" onclick="goTo('settings')">${formatBalance(user.balance)}</li>
            <li onclick="goTo('settings')">${getAvatar(user.avatar, 40)}</li>
        </ul>
        `;
    }
    return /*HTML*/`
    <ul class="no-gap">
        <li class="btn blue hide-l" onclick="goTo('signIn');">Sign in</li>
        <li class="btn blue half-left hide-s-m" onclick="goTo('signIn');">Sign in</li>
        <li class="btn blue separator-left half-right hide-s-m" onclick="goTo('signUp');">Sign up</li>
    </ul>
    `;
}

function getFooter() {
    return /*HTML*/`
    <footer>
        <div class="container">
            &copy; 2022 / Team 1
        </div>
    </footer>
    `;
}