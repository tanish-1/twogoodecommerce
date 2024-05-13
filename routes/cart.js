const express = require('express');
const router = express.Router();
const User = require('../model/User');
const Product = require('../model/Product');
const CartItem = require('../model/CartItem')



// Add to Cart Route
router.post('/add-to-cart/:productId', async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect('/login'); // Redirect to login if user is not authenticated
        }

        const productId = req.params.productId;
        const userId = req.user._id; // Assuming user is authenticated
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).send("Product not found");
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        user.cart.push({ product: product._id });
        await user.save();

        res.redirect('/cart');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Get Cart Route
router.get('/cart', async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect('/login'); // Redirect to login if user is not authenticated
        }

        const userId = req.user._id; // Assuming user is authenticated
        const user = await User.findById(userId).populate('cart.product');
        // 
        if (!user) {
            return res.status(404).send("User not found");
        }

// Aggregate cart items to count quantities
const cartItems = user.cart.reduce((acc, cartItem) => {
    // Ensure cart item and its product are not null
    if (cartItem && cartItem.product) {
        const existingItemIndex = acc.findIndex(item => item.product._id.equals(cartItem.product._id));

        if (existingItemIndex !== -1) {
            // Increase quantity if item already exists
            acc[existingItemIndex].quantity += 1;
        } else {
            // Add new item
            acc.push({ _id: cartItem._id, product: cartItem.product, quantity: 1 });
        }
    }
    return acc;
}, []);

        // const cartItems = user.cart;

        res.render('cart', { cartItems });
        res.render('cart');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/cart', async(req, res)=> {
    if (!req.user) {
        return res.redirect('/login'); // Redirect to login if user is not authenticated
    }
    res.render('cart');
});

// Remove from Cart Route
router.post('/remove-from-cart/:productId', async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect('/login'); // Redirect to login if user is not authenticated
        }

        const userId = req.user._id; // Assuming user is authenticated
        const productId = req.params.productId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Find the index of the cart item to remove
        const cartItemIndex = user.cart.findIndex(item => item.product.toString() === productId);
        if (cartItemIndex === -1) {
            return res.status(404).send("Cart item not found");
        }

        // Decrease the count of the item, or remove it if count is 1
        if (user.cart[cartItemIndex].count > 1) {
            user.cart[cartItemIndex].count -= 1;
        } else {
            user.cart.splice(cartItemIndex, 1);
        }

        await user.save();

        res.redirect('/cart');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
// Proceed to Payment Route
router.get('/proceedtopayment', async (req, res) => {
    try {
        // Assuming user is authenticated and user's cart is retrieved from session or database
        const userId = req.user._id; // Assuming user is authenticated
        const user = await User.findById(userId).populate('cart.product');

        if (!user) {
            return res.status(404).send("User not found");
        }

       // Calculate total price
let totalPrice = 0; // Initialize total outside the reduce function
totalPrice = user.cart.reduce((total, item) => {
    // Ensure item and item.product are not null before accessing price
    if (item && item.product && typeof item.product.price === 'number') {
        console.log("Item price:", item.product.price); // Log item price
        return total + (item.product.price * item.quantity); // Use item.quantity
    }
    return total; // Return total unchanged if item or item.product is null
}, totalPrice); // Pass totalPrice as initial value

console.log("Total price:", totalPrice); // Log total price

      
        // Render payment page with total price
        res.render('payment', { totalPrice });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/make-payment', async (req, res) => {
    try {
        // Assuming user is authenticated and user's cart is retrieved from session or database
        const userId = req.user._id; // Assuming user is authenticated
        const user = await User.findById(userId).populate('cart.product');

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Calculate total price
        const totalPrice = user.cart.reduce((total, item) => {
            return total + (item.product.price * item.count);
        }, 0);

        // Clear cart after payment
        user.cart = [];
        await user.save();

        res.redirect('/make-payment');
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Success Route
router.get('/make-payment', (req, res) => {
    res.render('success');
});

router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.render('cart', { cartItems });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;
