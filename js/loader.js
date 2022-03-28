// Files to acquire
const files = [
    'css/base.css',
    'css/form.css',
    'css/avatar.css',
    'js/utility.js',
    'js/model.js',
    'js/controller/user.js',
    'js/controller/item.js',
    'js/controller/chest.js',
    'js/controller/inventory.js',
    'js/chests/harry-potter.js',
    'js/chests/marvel.js',
    'js/chests/twitch.js',
    'js/view/helpers.js',
    'js/view/general.js',
    'js/view/home.js',
    'js/view/chests.js',
    'js/view/inventory.js',
    'js/view/opening.js',
    'js/view/sign-in.js',
    'js/view/sign-up.js',
    'js/view/settings.js'
];

// App element
const app = document.getElementById('app');

// Append all files
function appendFiles() {

    let index = 0;

    const onLoad = () => {
        index++;
        if (index !== files.length) return append();
        console.info('Done loading files!');
        // Default sign in
        //signIn('Andy', '123abc');
        // Run initial render
        render();
    };

    const append = () => {
        if (files[index].endsWith('css')) {
            const element = document.createElement('link');
            element.rel = 'stylesheet';
            element.href = files[index];
            element.addEventListener('load', onLoad);
            document.head.appendChild(element);
            console.info('Added style:', files[index]);
        } else if (files[index].endsWith('js')) {
            const element = document.createElement('script');
            element.src = files[index];
            element.addEventListener('load', onLoad);
            document.head.appendChild(element);
            console.info('Added script:', files[index]);
        } else {
            console.error('Unable to add:', files[index]);
            index++;
            append();
        }
    };
    
    append();

}

// Start loading
appendFiles();