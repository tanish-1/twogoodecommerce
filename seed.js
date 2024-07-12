const mongoose=require("mongoose")
const Product = require("./model/Product")
const products = [
    {
        id: 'child1',
        image: '/assests/rusticoak.jpg',
        'data-color': "#D4D0D3",
        title: 'Rustic Oak',
        price: 450,
        types: 'dining'
    },
    {
        id: 'child2',
        image: '/assests/brownmahogany.jpeg',
        'data-color': "#D4D0D3",
        title: 'Brown Mahogany',
        price: 350,
        types: 'dining'
    },
    {
        id: 'child3',
        image: '/assests/f2.jpg',
        'data-color': "#E6DFD7",
        title: 'Patio',
        price: 250,
        types: 'dining'
    },
    {
        id: 'child4',
        image: "/assests/coasterwebber.jpeg",
        'data-color': "#B4D5B6",
        title: 'Coaster Webber',
        price:  399,
        types: 'dining'
    },
    {
        id: 'child1',
        image: '/assests/brownmahogany.jpeg',
        'data-color': "#D4D0D3",
        title: 'Brown Mahogany',
        price: 350,
        types: 'dining'
    },
    {
        id: 'child2',
        image: '/assests/f2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
        types: 'dining'
    },
    {
        id: 'child1',
        image: "/assests/coasterwebber.jpeg",
        'data-color': "#D4D0D3",
        title: 'Coaster Webber',
        price:  399,
        types: 'dining'
    },
    {
        id: 'child2',
        image: '/assests/f2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
        types: 'dining'
    },
    {
        id: 'child3',
        image: '/assests/rusticoak.jpg',
        'data-color': "#E6DFD7",
        title: 'Rustic Oak',
        price: 450,
        types: 'dining'
    },
    {
        id: 'child4',
        image: "/assests/coasterwebber.jpeg",
        'data-color': "#B4D5B6",
        title: 'Coaster Webber',
        price:  399,
        types: 'dining'
    },
    
    {
        id: 'child1',
        image: '/assests/wallstand1.jpeg',
        'data-color': "#D4D0D3",
        title: 'Tree bookself',
        price: 250,
        types: 'bookshelf'
    },
    {
        id: 'child2',
        image: '/assests/wallstand2.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown Tree Book',
        price: 250,
        types: 'bookshelf'
    },
    {
        id: 'child3',
        image: "/assests/woodoak.jpg",
        'data-color': "#E6DFD7",
        title: 'Wood Oak',
        price: 399,
        types: 'bookshelf'
    },
    {
        id: 'child4',
        image: "/assests/woodoak2.jpg",
        'data-color': "#B4D5B6",
        title: 'wood Oak',
        price:  299,
        types: 'bookshelf'
    },
    {
        id: 'child1',
        image: '/assests/f3.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden self',
        price: 350,
        types: 'bookshelf'
    },
    {
        id: 'child2',
        image: '/assests/blackwoodgrain.jpg',
        'data-color': "#D4D0D3",
        title: 'Black Wood Grain',
        price: 350,
        types: 'bookshelf'
    },
    {
        id: 'child1',
        image: '/assests/wallstand1.jpeg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'bookshelf'
    },
    {
        id: 'child2',
        image: '/assests/wallstand2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
        types: 'bookshelf'
    },
    {
        id: 'child3',
        image: "/assests/woodoak2.jpg",
        'data-color': "#E6DFD7",
        title: 'wood Oak',
        price:  299,
        types: 'bookshelf'
    },
    {
        id: 'child4',
        image: "/assests/wallstand1.jpeg",
        'data-color': "#B4D5B6",
        title: 'Self',
        price:  499,
        types: 'bookshelf'
    }, 

    {
        id: 'child1',
        image: '/assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'wallstand'
    },
    {
        id: 'child2',
        image: '/assests/woodenstand.jpg',
        'data-color': "#D4D0D3",
        title: 'woodenstand',
        price: 250,
        types: 'wallstand'
    },
    {
        id: 'child3',
        image: "/assests/wallstand7.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
        types: 'wallstand'
    },
    {
        id: 'child4',
        image: "/assests/f9.jpg",
        'data-color': "#B4D5B6",
        title: 'Self',
        price:  499,
        types: 'wallstand'
    },
    {
        id: 'child1',
        image: '/assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'wallstand'
    },
    {
        id: 'child2',
        image: '/assests/woodenstand.jpg',
        'data-color': "#D4D0D3",
        title: 'woodenstand',
        price: 250,
        types: 'wallstand'
    },
    {
        id: 'child1',
        image: '/assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'wallstand'
    },
    {
        id: 'child3',
        image: "/assests/wallstand7.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
        types: 'wallstand'
    },
    {
        id: 'child3',
        image: "/assests/f8.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
        types: 'wallstand'
    },
    {
        id: 'child4',
        image: "/assests/f9.jpg",
        'data-color': "#B4D5B6",
        title: 'Self',
        price:  499,
        types: 'wallstand'
    },
    
    {
        id: 'child1',
        image: '/assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'shop'
    },
    {
        id: 'child2',
        image: '/assests/f2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
        types: 'shop'
    },
    {
        id: 'child3',
        image: "/assests/f8.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
        types: 'shop'
    },
    {
        id: 'child4',
        image: "/assests/woodenfurniture.jpg",
        'data-color': "#B4D5B6",
        title: 'Wooden Furniture',
        price:  399,
        types: 'shop'
    },
    {
        id: 'child1',
        image: '/assests/brownwoodex.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown Woodex',
        price: 250,
        types: 'shop'
    },
    {
        id: 'child2',
        image: '/assests/furniture1.jpeg',
        'data-color': "#D4D0D3",
        title: 'Furniture',
        price: 350,
        types: 'shop'
    },
    {
        id: 'child1',
        image: '/assests/f1.jpg',
        'data-color': "#D4D0D3",
        title: 'Brown wooden Base',
        price: 350,
        types: 'shop'
    },
    {
        id: 'child2',
        image: '/assests/f2.jpg',
        'data-color': "#D4D0D3",
        title: 'Patio',
        price: 250,
        types: 'shop'
    },
    {
        id: 'child3',
        image: "/assests/f8.jpg",
        'data-color': "#E6DFD7",
        title: 'Modern Self',
        price: 399,
        types: 'shop'
    },
    {
        id: 'child4',
        image: "/assests/woodtable.jpg",
        'data-color': "#B4D5B6",
        title: 'Wood Table',
        price:  299,
        types: 'shop'
    }
];



mongoose.connect('mongodb+srv://imtanishlamba:iivEo5TMzBwVluaW@cluster0.yqdtaef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(async()=>{
   await Product.create(products);
   console.log("Products inserted successfully!");
})



// imtanishlamba
// iivEo5TMzBwVluaW