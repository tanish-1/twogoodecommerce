const express = require("express");
const Product = require("../model/Product");

const router = express.Router();

// router.get("/product/:id",async(req,res)=>{
//     let id=req.params.id
//    let product= await Product.findById(id).populate('reviews')
//    console.log(product);
//    res.render("productPage",{product})
//  })
 
// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to get products' });
    }
});

// Get products by type
router.get('/type/:type', async (req, res) => {
    const { type } = req.params;
    try {
        const products = await Product.find({ types: type });
        switch (type) {
            case 'index':
                res.render('index');
                break;
            case 'wallstand':
            case 'dining':
            case 'bookshelf':
            case 'shop':
                res.render(type, { products });
                break;
            default:
                res.status(404).send('Not Found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to get products' });
    }
});


// Add a new product
// router.post('/', async (req, res) => {
//     const { id, image, 'data-color': dataColor, title, price, types } = req.body;
//     try {
//         const newProduct = new Product({ id, image, 'data-color': dataColor, title, price, types });
//         await newProduct.save();
//         res.status(201).json({ message: 'Product added successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to add product' });
//     }
// });

module.exports = router;
