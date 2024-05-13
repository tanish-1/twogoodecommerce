const express = require("express")
const router = express.Router()
const User = require("../model/User")
const passport = require("passport")

router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.post("/signup", async (req, res) => {
    const { username, password, email } = req.body
    try {
        // Create a new user instance
        const newUser = new User({ username, email })
        // Use setPassword method provided by Passport-Local-Mongoose to set hashed password
        await newUser.setPassword(password)
        // Save the user to the database
        await newUser.save()
        req.flash("success", "User registered successfully!")
        res.redirect("/login")
    } catch (error) {
        // Handle any errors
        console.error(error)
        req.flash("error", "Failed to register user")
        res.redirect("/signup")
    }
})

router.get("/login", (req, res) => {
    res.render("auth/login")
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureMessage: true
        }),
    function (req, res) {
        req.flash("success", `Welcome back ${req.user.username}`)
        res.redirect('/');
    });

router.get('/logout', (req, res) => {
    req.logout(() => {
        req.flash("success", "Logged out successfully")
        res.redirect("/login")
    })
})

module.exports = router



// router.get('/cart', async (req, res) => {
//     try {
//         const cartItems = [];
//         for (const cartItem of cart) {
//             if (cartItem && cartItem.product) {
//                 const product = await Product.findById(cartItem.product);
//                 if (product) {
//                     const existingItemIndex = cartItems.findIndex(item => item.product._id.equals(cartItem.product));
//                     if (existingItemIndex !== -1) {
//                         // If item already exists, increase the quantity
//                         cartItems[existingItemIndex].quantity += 1;
//                     } else {
//                         // If item does not exist, add it to the cart
//                         cartItems.push({
//                             _id: cartItem._id,
//                             product: product,
//                             quantity: 1, // Assuming quantity is always 1 in cart for now
//                             totalPrice: product.price // Assuming product has a price field
//                         });
//                     }
//                 }
//             }
//         }
        
//         // Calculate total price of all items in cart
//         const totalPrice = cartItems.reduce((acc, cartItem) => {
//             return acc + (cartItem.quantity * cartItem.totalPrice);
//         }, 0);

//         res.render('cart', { cartItems, totalPrice });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });