const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: String,
    productCode: String,
    productImage: String,
    unitPrice: Number,
    quantity: Number,
    totalPrice: Number,
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    }
}, {versionKey: false});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;