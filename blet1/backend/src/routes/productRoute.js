const express = require("express")
const router = express.Router()
const productController=require("./../controllers/productController.js")

router.get("/products", productController.getAllProduct)
router.post("/products", productController.postPrtoduct)
router.get("/products/:id", productController.getProductById)
router.delete("/products/:id", productController.deleteProductById)
router.patch("/products/:id", productController.patchProductById)
router.put("/products/:id", productController.putProductById)







module.exports = router