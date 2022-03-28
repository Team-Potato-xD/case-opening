const model = {
    appName: 'Treasury',
    appIcon: 'assets/chest-open.svg',
    app: {
        page: 'home',
        // If userId is a falsey value (0, null, etc), we're signed out
        userId: 0,
        /*
         * This only applies if "page" key is set to "inventory"
         * Tells us what inventory we're looking at and what page number
         */
        inventoryId: 1,
        inventoryPage: 1
    },
    // Contains a bunch of image uris
    images: {
        paymentOptions: 'assets/payment-options.png',
        cashFlow: 'assets/cash-flow.png',
        exampleChest: 'assets/chests/royal-chest.png',
        exampleItem: 'assets/items/shungite.gif',
        background: 'assets/background.png'
    },
    // Avatars, use index in user
    avatarPath: 'assets/avatars',
    avatars: [
        {
            name: 'Default',
            file: 'avatar.png'
        },
        {
            name: 'Sniper Dude',
            file: 'guns.jpg'
        },
        {
            name: 'Piggy',
            file: 'piggy.png'
        },
        {
            name: 'Bone Face',
            file: 'skelly.jpg'
        },
        {
            name: 'Masked Spider',
            file: 'spidey.jpg'
        },
        {
            name: 'Iron Man',
            file: 'iron-man.jpg'
        },
        {
            name: 'The Hulk',
            file: 'hulk.png'
        },
        {
            name: 'Thanos',
            file: 'thanos.png'
        },
        {
            name: 'Sackboy',
            file: 'sackboy.jpg'
        },
        {
            name: 'Gon',
            file: 'gon.png'
        },
        {
            name: 'Killua',
            file: 'killua.jpg'
        },
        {
            name: 'Supreme Kakashi',
            file: 'kakashi.jpg'
        },
        {
            name: 'Luffy',
            file: 'luffy.png'
        },
        {
            name: 'Nami',
            file: 'nami.jpg'
        },
        {
            name: 'Yoshino',
            file: 'yoshino.jpg'
        },
        {
            name: 'Yumeko',
            file: 'yumeko.jpg'
        },
        {
            name: 'Emo Raphiel',
            file: 'raphiel.png'
        },
        {
            name: 'Reina',
            file: 'reina.png'
        }
    ],
    // This is just a prototype, so passwords aren't confidential
    users: [
        {
            id: 1,
            avatar: 8,
            username: 'Andy',
            password: '123abc',
            balance: 0
        },
        {
            id: 2,
            avatar: 12,
            username: 'Pathom',
            password: '123abc',
            balance: 300
        },
        {
            id: 3,
            avatar: 16,
            username: 'Geir',
            password: '123abc',
            balance: 500
        },
        {
            id: 4,
            avatar: 4,
            username: 'Carina',
            password: '123abc',
            balance: 6000
        }
    ],
    activeItem: 0,
    // Key is user ID, array values is item ID
    inventories: {
        1: [],
        2: [],
        3: [],
        4: []
    },
    itemPath: 'assets/items',
    itemDefault: 'default.png',
    items: [],
    chestPath: 'assets/chests',
    chestDefault: 'default.png',
    chests: [
        {
            id: 1,
            image: 'royal-chest.png',
            name: 'Royal Chest',
            description: 'The most royal chest',
            price: 415,
            // Drop rate in % per rarity, each item in category will have % split
            drops: [ 50, 30, 10, 7, 3 ],
            items: []
        }
    ],
    currentChest: 0,
    chestQueue: [],
    tasks: [],
    iterators: {},
    message: null,
    inputs: {
        showInventory: '',
        buyAmount: 1,
        signIn: {
            username: '',
            password: ''
        },
        signUp: {
            username: '',
            password: '',
            passwordAgain: ''
        },
        settings: {
            username: '',
            password: '',
            passwordAgain: '',
            addBalance: ''
        }
    }
};