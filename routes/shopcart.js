const express = require('express');
const router = express.Router();
const CartItem = require('../model/CartItem')
// Initialize an empty cart array
let cart = [];

// Add to Cart Route
router.post('/add-to-cart/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await CartItem.findById(productId);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        cart.push({ product: product._id });
        res.redirect('/shopcart');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/shopcart', async (req, res) => {
    const cartItems = cart.reduce((acc, cartItem) => {
        if (cartItem && cartItem.product) {
            const existingItemIndex = acc.findIndex(item => item.product._id.equals(cartItem.product._id));
            if (existingItemIndex !== -1) {
                acc[existingItemIndex].quantity += 1;
            } else {
                acc.push({ _id: cartItem._id, product: cartItem.product, quantity: 1 });
            }
        }
        return acc;
    }, []);
    res.render('shopcart', { cartItems });
});

router.post('/remove-from-cart/:productId', async (req, res) => {
    const productId = req.params.productId;
    const cartItemIndex = cart.findIndex(item => item.product.toString() === productId);
    if (cartItemIndex === -1) {
        return res.status(404).send("Cart item not found");
    }
    // Remove the item from the cart
    cart.splice(cartItemIndex, 1);
    res.redirect('/shopcart');
});

module.exports = router;
