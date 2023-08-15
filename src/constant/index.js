import {
    mobile1,
    mobile2,
    headphone1,
    watch1,
    watch2,
    banner1,
    shirt1,
    shirt2,
    jacket1,
    short1,
    bag1,
    camera1,
    camera2,
    blog1,
    blog2,
    blog3,
    blog4,
    big,
    big1,
    big2,
    big3,
    big4,
} from '../assets'

const secNavLinks = [
    {
        id: "/",
        title: "Home",
    },
    {
        id: "store",
        title: "Store",
    },
];

const topNavLinks = [
    {
        id: "/sign-in",
        title: "Sign In",
        iconClass: 'fa fa-user'
    },
    {
        id: "wishlist",
        title: "Wishlist",
        iconClass: 'fa fa-heart'
    },
    {
        id: "cart",
        title: "My Cart",
        iconClass: 'fa fa-shopping-cart'
    },
];

const bestDealProduct = [
    {
        id: "electronics",
        title: "Electronics",
    },
    {
        id: "clotheswear",
        title: "Clothes and Wear",
    },
    {
        id: "homeinterior",
        title: "Home Interior",
    },
    {
        id: "computertech",
        title: "Computer and Tech",
    },
    {
        id: "toolequipment",
        title: "Tools, Equipment",
    },
    {
        id: "sportsoutdoor",
        title: "Sports and Outdoor",
    },
    {
        id: "animalspets",
        title: "Animals and Pets",
    },
    {
        id: "machinerytool",
        title: "Machinery Tools",
    },
    {
        id: "other",
        title: "Other Products",
    },
]

const newProducts = [
    {
        id: 1,
        offer: 'Offer',
        price: '$29.95',
        title: 'Blue Half Sleves TShirt',
        size: 'XL, XS, M',
        img:shirt2
    },
    {
        id: 2,
        offer: 'Full Price',
        price: '$590.00',
        title: 'Jacket Mens',
        size: 'XL, M',
        img:jacket1
    },
    {
        id: 3,
        offer: 'Full Price',
        price: '$29.95',
        title: 'Sleves TShirt',
        size: 'XXL, XL, XS, M, S',
        img: shirt1
    },
    {
        id: 4,
        offer: 'Full Price',
        price: '$1099.00',
        title: 'Shorts Jeans',
        size: 'ALL',
        img:short1
    },
    {
        id: 5,
        offer: 'Full Price',
        price: '$99.95',
        title: 'Modern Watch',
        color: 'Black',
        img: watch1
    },
    {
        id: 6,
        offer: 'Full Price',
        price: '$129.95',
        title: 'Flat Watch',
        color: 'Black',
        img: watch2
    },
    {
        id: 7,
        offer: 'Full Price',
        price: '$1129.95',
        title: 'Modern Headphone',
        modal: 'X-200',
        img: headphone1
    },
    {
        id: 8,
        offer: 'Full Price',
        price: '$529.95',
        title: 'Bag',
        material: 'Jeans',
        img: bag1
    }
]

const FeatureCards = [
    // {
    //     id: 1,
    //     title: 'Best products & brands in our store at 80% off',
    //     desc: "That's true but not always",
    //     linkTitle: "Claim Offer",
    //     img: banner1,
    // },
    {
        id: 2,
        title: 'Gaming toolset',
        desc: "Gaming toolset",
        linkTitle: "Learn More",
        bgClr: 'bg-color'
    },
    {
        id: 3,
        title: 'Quality sound',
        desc: "All you need for music",
        linkTitle: "Learn More",
        bgClr: 'bg-color'
    },
    {
        id: 1,
        title: 'Buy 2 items, With special gift',
        desc: "Buy one, get one free marketing strategy helps your business improves the brand by sharing the profits",
        linkTitle: "Learn More",
        bgClr: 'bg-success'
    },
]


const recentlyView = [
    {
        id: 1,
        title: 'camera1',
        img:camera1,
        link:'#',
    },
    {
        id: 2,
        title: 'camera2',
        img:camera2,
        link:'#',
    },
    {
        id: 3,
        title: 'mobile1',
        img:mobile1,
        link:'#',
    },
    {
        id: 4,
        title: 'mobile2',
        img:mobile2,
        link:'#',
    },
    {
        id: 5,
        title: 'watch1',
        img:watch1,
        link:'#',
    },
    {
        id: 6,
        title: 'watch2',
        img: watch2,
        link:'#',
    },
]


const infos = [
    {
        id:1,
        title:"Reasonable Price",
        desc: "Have you ever finally just",
        icon: 'fa fa-thumbs-up',
    },
    {
        id:2,
        title:"Worldwide shipping",
        desc: "Have you ever finally just",
        icon: 'fa fa-plane',
    },
    {
        id:3,
        title:"Best ratings",
        desc: "Have you ever finally just",
        icon: 'fa fa-star',
    },
    {
        id:4,
        title:"Help center",
        desc: "Have you ever finally just",
        icon: 'fa-phone-alt',
    },
]

const footerMenus = [
    {
        id: 1,
        name: 'Store',
        copyright: '© 2023 Copyright',
        linkTitle: 'Store.com',
        linkSrc: '#',
    
        storeMenu: [
            {
                id: 'about',
                title: 'About',
            },
            {
                id: 'find-store',
                title: 'Find Store',
            },
            {
                id: 'categories',
                title: 'Categories',
            },
            {
                id: 'blogs',
                title: 'Blogs',
            },
        ],
        informationMenu: [
            {
                id: 'help-center',
                title: 'Help Center',
            },
            {
                id: 'money-refund',
                title: 'Money Refund',
            },
            {
                id: 'shipping-info',
                title: 'Shipping Info',
            },
            {
                id: 'refunds',
                title: 'Refunds',
            },
        ],
        supportMenu: [
            {
                id: 'help-center',
                title: 'Help Center',
            },
            {
                id: 'documents',
                title: 'Documents',
            },
            {
                id: 'account-resource',
                title: 'Account Restore',
            },
            {
                id: 'my-orders',
                title: 'My Orders',
            },
        ],
    }
]


const ChooseItems = [
    {
        id: 1,
        icon: 'fa fa-camera-retro' ,
        title:'Reasonable prices',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
    {
        id: 2,
        icon: 'fa fa-star ' ,
        title:'Best quality',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
    {
        id: 3,
        icon: 'fa fa-plane ' ,
        title:'Worldwde shipping',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
    {
        id: 4,
        icon: 'fa fa-users ' ,
        title:'Customer satisfaction',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
    {
        id: 5,
        icon: 'fa fa-thumbs-up ' ,
        title:'Happy customers',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
    {
        id: 6,
        icon: 'fa fa-search' ,
        title:'Thousand items',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed d eiusmor',
    },
]


const BlogsPosts = [
    {
        id: 1,
        title: 'How to promote brands',
        excerpt: 'When you enter into any new area of science, you almost reach',
        date: '23.12.2022',
        dateIcon: 'fa fa-calendar',
        img:blog1,
    },
    {
        id: 2,
        title: 'How we handle shipping',
        excerpt: 'When you enter into any new area of science, you almost reach',
        date: '13.12.2022',
        dateIcon: 'fa fa-calendar',
        img: blog2,
    },
    {
        id: 3,
        title: 'How to promote brands',
        excerpt: 'When you enter into any new area of science, you almost reach',
        date: '25.11.2022',
        dateIcon: 'fa fa-calendar',
        img: blog3,
    },
    {
        id: 4,
        title: 'Success story of sellers',
        excerpt: 'When you enter into any new area of science, you almost reach',
        date: '03.09.2022',
        dateIcon: 'fa fa-calendar',
        img: blog4,
    },
]

const Brands = [
    {
        id: 'flexCheckChecked1',
        name: 'Mercedes',
        badge:'120',
    },
    {
        id: 'flexCheckChecked2',
        name: 'Toyota',
        badge: '15',
    },
    {
        id: 'flexCheckChecked3',
        name: 'Mitsubishi',
        badge: '35',
    },
    {
        id: 'flexCheckChecked4',
        name: 'Nissan',
        badge: '89',
    },
    {
        id: 'flexCheckDefault',
        name: 'Honda',
        badge: '30',
    },
    {
        id: 'flexCheckDefault',
        name: 'Suzuki',
        badge: '30',
    },
]

const pageProduct = [
    {
        id: 1,
        title: 'Rucksack Backpack Jeans',
        desc: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        stars: 4,
        salePrice: '$34.50',
        orignalPrice: '$49.99',
        shipping: 'Free Shipping',
        buttonTitle: 'Buy This',
        buttonCartTitle: 'Add to Cart',
        buttonSaveTitle: 'Save',
        orders: 154,
        color: 'text-success',
        img: bag1,
        stock: 'In Stock',
        stockColor:'text-success',
        specfication: [
            {
                id: 'type',
                type: 'Regular',
            },
            {
                id: 'color',
                type: 'Brown',
            },
            {
                id: 'material',
                type:'Cotton, Jeans'
            },
            {
                id: 'brand',
                type:'Reebook',
            }
        ],
        sizes: [
            {
                id: 1,
                size:'Small',
            },
            {
                id: 2,
                size:'Medium',
            },
            {
                id: 3,
                size:'Large',
            },
            {
                id: 4,
                size:'X Large',
            },
        ]
    },
    {
        id: 2,
        title: "Men's Denim Jeans Shorts",
        desc: 'Re-engineered Digital Crown with hapti Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt ut labore et dolore magna',
        stars: 3,
        salePrice: '$34.50',
        orignalPrice: '$49.99',
        shipping: 'Paid Shipping',
        buttonTitle: 'Buy This',
        buttonCartTitle: 'Add to Cart',
        buttonSaveTitle: 'Save',
        orders: 73,
        color: 'text-warning',
        img: short1,
        stock: 'Out of Stock',
        stockColor: 'text-danger',
        specfication: [
            {
                id: 'type',
                type: 'Regular',
            },
            {
                id: 'color',
                type: 'Brown',
            },
            {
                id: 'material',
                type: 'Cotton, Jeans'
            },
            {
                id: 'brand',
                type: 'Reebook',
            }
        ],
        sizes: [
            {
                id: 1,
                size: 'Small',
            },
            {
                id: 2,
                size: 'Medium',
            },
            {
                id: 3,
                size: 'Large',
            },
            {
                id: 4,
                size: 'X Large',
            },
        ]
    },
    {
        id: 3,
        title: "T- shirt for Men Blue Cotton Base",
        desc: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        stars: 4,
        salePrice: '$99.50',
        orignalPrice: '',
        shipping: 'Free Shipping',
        buttonTitle: 'Buy This',
        buttonCartTitle: 'Add to Cart',
        buttonSaveTitle: 'Save',
        orders: 910,
        color: 'text-success',
        img: shirt1,
        stock: 'In Stock',
        stockColor: 'text-success',
        lightboxImg: [
            {
                id: 1,
                img:big,
            },
            {
                id: 2,
                img:big1,
            },
            {
                id: 3,
                img:big2,
            },
            {
                id: 4,
                img:big3,
            },
            {
                id: 5,
                img:big4,
            },
        ],
        specfication: [
            {
                id: 'type',
                type: 'Regular',
            },
            {
                id: 'color',
                type: 'Brown',
            },
            {
                id: 'material',
                type: 'Cotton, Jeans'
            },
            {
                id: 'brand',
                type: 'Reebook',
            }
        ],
        sizes: [
            {
                id: 1,
                size: 'Small',
            },
            {
                id: 2,
                size: 'Medium',
            },
            {
                id: 3,
                size: 'Large',
            },
            {
                id: 4,
                size: 'X Large',
            },
        ]
    },
    {
        id: 4,
        title: "Winter Jacket for Men and Women",
        desc: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        stars: 3,
        salePrice: '$190',
        orignalPrice: '$140',
        shipping: 'Free Shipping',
        buttonTitle: 'Buy This',
        buttonCartTitle: 'Add to Cart',
        buttonSaveTitle: 'Save',
        orders: 154,
        color: 'text-success',
        img: jacket1,
        stock: 'In Stock',
        stockColor: 'text-success',
        specfication: [
            {
                id: 'type',
                type: 'Regular',
            },
            {
                id: 'color',
                type: 'Brown',
            },
            {
                id: 'material',
                type: 'Cotton, Jeans'
            },
            {
                id: 'brand',
                type: 'Reebook',
            }
        ],
        sizes: [
            {
                id: 1,
                size: 'Small',
            },
            {
                id: 2,
                size: 'Medium',
            },
            {
                id: 3,
                size: 'Large',
            },
            {
                id: 4,
                size: 'X Large',
            },
        ]
    },
    {
        id: 5,
        title: "T-shirt for Men Blue Cotton Base",
        desc: 'Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text consectetur adipisicing',
        stars: 3,
        salePrice: '$99.50',
        orignalPrice: '$190',
        shipping: 'Free Shipping',
        buttonTitle: 'Buy This',
        buttonCartTitle: 'Add to Cart',
        buttonSaveTitle: 'Save',
        orders: 154,
        color: 'text-success',
        img: shirt2,
        stock: 'Out of Stock',
        stockColor: 'text-danger',
        specfication: [
            {
                id: 'type',
                type: 'Regular',
            },
            {
                id: 'color',
                type: 'Brown',
            },
            {
                id: 'material',
                type: 'Cotton, Jeans'
            },
            {
                id: 'brand',
                type: 'Reebook',
            }
        ],
        sizes: [
            {
                id: 1,
                size: 'Small',
            },
            {
                id: 2,
                size: 'Medium',
            },
            {
                id: 3,
                size: 'Large',
            },
            {
                id: 4,
                size: 'X Large',
            },
        ]
    },
]

const ShoppingCartItems= [
    {
        id: 1,
        title: 'Winter jacket for men and lady',
        specs: 'Yellow, Jeans',
        price: '460',
        img: jacket1,
    },
    {
        id: 2,
        title: 'Mens T-shirt Cotton Base',
        specs: 'Blue, Medium',
        price: '12.20',
        img: shirt1,
    },
]

export { secNavLinks, topNavLinks, bestDealProduct, newProducts, FeatureCards, recentlyView, infos, footerMenus, ChooseItems, BlogsPosts, Brands, pageProduct, ShoppingCartItems };