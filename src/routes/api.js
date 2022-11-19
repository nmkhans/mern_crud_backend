const { Router } = require("express");
const defaultController = require("../controllers/defaultController");
const {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

//? define router
const router = Router();

/* Application Routes */

//? default api
router.get("/", defaultController);

//? create new product
router.post("/add-product", addProduct);

//? get all procucts
router.get("/get-products", getProduct);

//? update a product
router.put("/update-product/:id", updateProduct);

//? delete a product
router.delete("/delete-product/:id", deleteProduct)

module.exports = router;