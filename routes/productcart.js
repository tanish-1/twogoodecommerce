const express = require("express");
const Product = require("../model/Product");

const router = express.Router();

router.get("/product/:id",async(req,res)=>{
    let id=req.params.id
   let product= await Product.findById(id).populate('reviews')
   console.log(product);
   res.render("productPage",{product})
 })

 module.exports = router;
