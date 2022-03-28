// Returns different views
const views = {};

// General render function to use throughout the project to re-create the view
function render() {
    // Clear timeouts and intervals
    model.tasks.forEach(task => {
        clearTimeout(task);
        clearInterval(task);
    });
    model.tasks.length = 0;
    const view = views[model.app.page]();
    if (!view) return;
    app.innerHTML = getHeader() + view + getFooter();
    model.message = null;
}

// Set layout
function setLayout(layout) {
    app.className = `${layout}-layout`;
}

// Set page title
function setTitle(title) {
    document.title = `${title} - ${model.appName}`;
}

function setMessage(type, title, content) {
    model.message = { type, title, content };
}

function getMessage() {
    return model.message ? /*HTML*/`
    <article class="message ${model.message.type}" data-type="${model.message.type}">
        <h3>${model.message.title}</h3>
        <p>${model.message.content}</h3>
    </article>
    ` : '';
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