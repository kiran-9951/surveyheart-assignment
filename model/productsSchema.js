const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        default:1
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true })
productSchema.index({ createdAt: -1 })
const Product = mongoose.model("Product", productSchema);
module.exports = Product