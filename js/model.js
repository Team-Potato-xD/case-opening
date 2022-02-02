const model = {
    name: 'Chest Site',
    shortName: 'CS',
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
        shungite: 'shungite.gif'
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
            balance: 10000
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
    // Key is user ID, array values is item ID
    inventories: {
        1: [ 1, 1, 1 ],
        2: [],
        3: [],
        4: []
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
        },
        {
            id: 2,
            image: '',
            name: 'Hogwarts Acceptance Letter',
            price: 0,
            rarity: 0,
            description: 'The letter you get when you are going to Hogwarts School of witchcraft and wizardry. The letter is signed by Professor Minerva McGonagall. It has a list of everything you need to start the school + a list of what kind of animal you can bring'
        },
        {
            id: 3,
            image: '',
            name: 'Elder Wand',
            price: 0,
            rarity: 4,
            description: ''
        },
        {
            id: 4,
            image: '',
            name: 'Resurrection Stone',
            price: 0,
            rarity: 4,
            description: ''
        },
        {
            id: 5,
            image: '',
            name: 'Cloak of invisibility',
            price: 0,
            rarity: 4,
            description: ''
        },
        {
            id: 6,
            image: '',
            name: 'Triwizard cup',
            price: 0,
            rarity: 2,
            description: ''
        },
        {
            id: 7,
            image: '',
            name: 'Nagini',
            price: 0,
            rarity: 3,
            description: ''
        },
        {
            id: 8,
            image: '',
            name: 'Philosopher`s stone',
            price: 0,
            rarity: 1,
            description: ''
        },
        {
            id: 9,
            image: '',
            name: 'Nimbus 2000',
            price: 0,
            rarity: 1,
            description: ''
        },
        {
            id: 10,
            image: '',
            name: 'Mirror of Erised',
            price: 0,
            rarity: 2,
            description: ''
        },
        {
            id: 11,
            image: '',
            name: 'Bertie Botts Every Flavor Beans',
            price: 0,
            rarity: 0,
            description: ''
        },
        {
            id: 12,
            image: '',
            name: 'Spacestone',
            price: 100,
            rarity: 2,
            description: 'The infinity stone you get from the Tesseract, it lets you control space itself. You can travel anywhere, anytime.'
        },
        {
            id: 13,
            image: '',
            name: 'Timestone',
            price: 100,
            rarity: 2,
            description: 'Lets you control the past, present and future. It will let you see what the future holds, rewind time and make time stop.'
        },
        {
            id: 14,
            image: '',
            name: 'Soulstone',
            price: 100,
            rarity: 2,
            description: 'It lets you manipulate the soul, resurrect and conjure the spiritual representation of the dead. But the only way to get the stone is by sacraficing someone you love.'
        },
        {
            id: 15,
            image: '',
            name: 'Mindstone',
            price: 100,
            rarity: 2,
            description: 'Lets you control the hearts and minds of others, the ones who have been affected by the mind stone will be loyal to the wielder and do commands indefinetely.'
        },
        {
            id: 16,
            image: '',
            name: 'Powerstone',
            price: 100,
            rarity: 2,
            description: 'Gives you tremendous energy manipulation capabilities, only the most powerful beings will be able to control it, while the less powerful beings would explode by touching it.'
        },
        {
            id: 17,
            image: '',
            name: 'Realitystone',
            price: 100,
            rarity: 2,
            description: 'It makes reality whatever you want, you can make a laser-gun into a bubble-gun. Or you can make your surroundings whatever you wish.'
        },
        {
            id: 18,
            image: '',
            name: 'Mjølnir',
            price: 250,
            rarity: 3,
            description: 'Better known as Thors hammer, let`s whoever is worthy to wield it control lightning and thunder. If thrown it will return.'
        },
        {
            id: 19,
            image: '',
            name: 'Stormbreaker',
            price: 250,
            rarity: 3,
            description: 'Better known as Thors axe, it is made at the same place that Mjolnir was made. The handle on the axe is from a Guardian of the galaxy known as Groot. Stormbreaker has the same powers as Mjølnir.'
        },
        {
            id: 20,
            image: '',
            name: 'Thanos Gauntlet',
            price: 400,
            rarity: 3,
            description: 'The gauntlet Thanos used to collect and control all the infinity stones.'
        },
        {
            id: 21,
            image: '',
            name: 'Captain America Shield',
            price: 500,
            rarity: 4,
            description: 'Made out of vibranium, it is the one of the strongest shields ever made. Given to Steve Rogers as he fought in WW2, later to be missing for 66 years.'
        }
    ],
    chests: [
        {
            id: 1,
            image: '',
            name: 'Royal Chest',
            description: 'The most royal chest',
            price: 415,
            // Drop rate in % per rarity, each item in category will have % split
            drops: [ 50, 30, 10, 7, 3 ],
            items: [ 1 ]
        },
        {
            id: 2,
            image: '',
            name: 'Harry Potter Trunk',
            description: 'An exciting chest full of magical things',
            price: 500,
            drops: [ 60, 20, 10, 7, 3 ],
            items: [ 3 ]
        },
        {
            id: 3,
            image: '',
            name: 'Marvel Chest',
            description: 'A marvelous chest for MCU fans',
            price: 300,
            drops: [55, 25, 10, 6, 4],
            items: [ 13 ]
        }
    ],
    iterators: {},
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
            username: '',
            password: '',
            passwordAgain: '',
            addBalance: ''
        }
    }
};