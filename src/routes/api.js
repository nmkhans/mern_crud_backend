const { Router } = require("express");
const defaultController = require("../controllers/defaultController");
const uploadImage = require("../controllers/imageController");
const {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getSingleProduct
} = require("../controllers/productController");
const uploadPhoto = require("../middleware/uploadPhoto");

//? define router
const router = Router();

/* Application Routes */

//? default api
router.get("/", defaultController);

//? create new product
router.post("/add-product", addProduct);

//? get all products
router.get("/get-products", getProduct);

//? get single product
router.get("/get-single-product/:id", getSingleProduct)

//? update a product
router.put("/update-product/:id", updateProduct);

//? delete a product
router.delete("/delete-product/:id", deleteProduct)

//? upload an image
router.post("/upload-image", uploadPhoto.single("image"), uploadImage);

module.exports = router;