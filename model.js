const model = {
    app: {
        page: 'home',
        // If userId is a falsey value (0, null, etc), we're signed out
        userId: 2,
        /*
         * This only applies if "page" key is set to "inventory"
         * Tells us what inventory we're looking at and what page number
         */
        inventoryId: 1,
        inventoryPage: 1
    },
    // Contains a bunch of image uris
    images: {
        shungite: 'shungite.gif'
    },
    // Avatars, use index in user
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
            file: 'girl.jpg'
        },
        {
            name: 'Yumeko',
            file: 'girl2.jpg'
        },
        {
            name: 'Emo Raphiel',
            file: 'girl3.png'
        },
        {
            name: 'Reina',
            file: 'girl4.png'
        }
    ],
    // This is just a prototype, so passwords aren't confidential
    users: [
        {
            id: 1,
            avatar: 0,
            username: 'Bozsi',
            password: '123abc',
            balance: 0
        },
        {
            id: 2,
            avatar: 15,
            username: 'Invoku',
            password: '123abc',
            balance: 10000
        }
    ],
    // Key is user ID, array values is item ID
    inventories: {
        1: [ 1, 1, 1 ]
    },
    items: [
        {
            id: 1,
            image: '',
            name: 'Shungite',
            price: 50000,
            // Rarity is 0-4
            rarity: 4,
            description: 'The rock of legend'
        }
    ],
    cases: [
        {
            id: 1,
            image: '',
            name: 'Royal Chest',
            description: 'The most royal chest',
            price: 415,
            // Drop rate in % per rarity, each item in category will have % split
            drops: [ 50, 30, 10, 7, 3 ],
            items: [ 1 ]
        }
    ],
    inputs: {
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
            username: 'Bozsi',
            password: '',
            passwordAgain: '',
            addBalance: ''
        }
    }
};