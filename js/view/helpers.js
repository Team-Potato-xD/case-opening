// Returns different views
const views = {};

// General render function to use throughout the project to re-create the view
function render() {
    const view = views[model.app.page]();
    if (!view) return;
    app.innerHTML = getHeader() + view + getFooter();
}

// Set layout
function setLayout(layout) {
    app.className = `${layout}-layout`;
}

// Set page title
function setTitle(title) {
    document.title = `${title} - ${model.name}`;
}

// Go to view helper function
function goTo(page) {
    if (!(page in views)) {
        console.error(`Page "${page}" does not exist!`);
        return;
    }
    model.app.page = page;
    render();
}