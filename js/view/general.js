function getHeader() {
    return /*HTML*/`
    <header>
        <div class="container">
            <img src="${model.appIcon}" alt="${model.appName}" class="app-icon">
            <h2 class="hide-s app-name">${model.appName}</h2>
            <nav>
                <ul>
                    <li onclick="goTo('home');"><i class="material-icons">home</i><span class="hide-s-m">Home</span></li>
                    <li onclick="goTo('chests');"><i class="material-icons">shopping_cart</i><span class="hide-s-m">Chests</span></li>
                    <li onclick="model.app.inventoryId = model.app.userId; goTo('inventory');"><i class="material-icons">work</i><span class="hide-s-m">Inventory</span></li>
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
            ${model.chestQueue.length > 0 ? `<li onclick="goTo('opening')"><i class="material-icons green-txt">play_arrow</i>${model.chestQueue.length}</li>` : ''}
            <li class="balance hide-s" onclick="goTo('settings')">${formatBalance(user.balance)}</li>
            <li onclick="goTo('settings')">${getAvatar(user.avatar, 40, 1)}</li>
            <li onclick="signOut(); render();"><i class="material-icons red-txt">logout</i></li>
        </ul>
        `;
    }
    return /*HTML*/`
    <ul class="no-gap">
        <li class="btn blue hide-l" onclick="goTo('signIn');"><i class="material-icons">login</i><span class="hide-s">Sign in</span></li>
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