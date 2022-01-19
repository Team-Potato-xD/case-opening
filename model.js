const model = {
    app: {
        page: 'home',
        // If userId is a falsey value (0, null, etc), we're signed out
        userId: 1,
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
    users: [
        {
            id: 1,
            /*
             * "avatar" will contain either an image key or a base64 string 
             * with image data depending on what implementation we go with
             */ 
            avatar: '',
            username: 'Bozsi',
            password: '123abc',
            balance: 500
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