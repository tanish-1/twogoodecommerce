const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const hbs = require('hbs');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const User = require('./model/User')
const cors = require('cors');

// Import routes
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

const ReviewRoutes = require('./routes/review');
const cartProductRoutes = require('./routes/productcart');
const authRoutes = require('./routes/auth');
// Import User model if needed
// const User = require('./model/User');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(flash());
app.get("/", (req, res) => {
    res.render("index")
});
app.use(cors());
// Session middleware
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Custom middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/api/products', productRoutes);
app.use('/', cartRoutes);
app.use('/', ReviewRoutes);
app.use('/', cartProductRoutes);
app.use('/', authRoutes);
// Add other routes as needed

// Connect to MongoDB
mongoose.connect('mongodb+srv://imtanishlamba:iivEo5TMzBwVluaW@cluster0.yqdtaef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
