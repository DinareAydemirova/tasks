const express = require("express")
const router = express.Router()
const productController=require("./../controllers/productController")

router.get("/products", productController.getAllProducts)
router.post("/products", productController.postProducts)
router.get("/products/:id", productController.getProductsById)
router.delete("/products/:id", productController.deleteproduct)
router.patch("/products/:id", productController.patchproduct)
router.put("/products/:id", productController.putproduct)






module.exports = router