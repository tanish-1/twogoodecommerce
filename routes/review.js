const express = require("express")
const Product = require("../model/Product")
const Review = require("../model/Review")
const router = express.Router();

router.get("/product/:id/addreview", async (req, res) => {
    const { rating, comment } = req.query;
    const id = req.params.id;

    try {
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Ensure that the reviews array exists before pushing a review into it
        if (!product.reviews) {
            product.reviews = [];
        }

        const review = new Review({ rating, comment });
        product.reviews.push(review);

        await Promise.all([product.save(), review.save()]);

        res.redirect(`/product/${id}`);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router