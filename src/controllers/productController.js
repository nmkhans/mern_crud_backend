const productModel = require("../models/productModel");

//? create new product
const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        const result = await productModel.create(productData);

        res.status(200).json({
            success: true,
            message: "Product successfully added",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error
        })
    }
}

//? get all product
const getProduct = async (req, res) => {
    try {
        const result = await productModel.find({});

        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            error: error
        })
    }
}

//? get single product
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await productModel.findOne({ _id: id });

        res.status(200).json({
            success: true,
            message: "Product Detail",
            data: data
        })
    } catch (error) {
        res.status(500).josn({
            success: false,
            message: "Product not found!",
            error: error
        })
    }
}

//? update a product
const updateProduct = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const updatedDoc = {
            $set: data
        }

        const result = await productModel.updateOne({ _id: id }, updatedDoc, { upsert: true });

        res.status(200).json({
            success: true,
            message: "Product successfully updated",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update product",
            error: error
        })
    }
}

//? delete a product

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productModel.deleteOne({ _id: id });

        res.status(200).json({
            success: true,
            message: "Product successfully deleted",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete product",
            error: error
        })
    }

}

module.exports = {
    addProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}