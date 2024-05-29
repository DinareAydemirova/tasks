const Product = require("./../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postProducts = async (req, res) => {
    try {
      const obj=req.body
      const newProd=new Product(obj)
      newProd.save()
      res.status(201).send(newProd);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  const getProductsById = async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);
      if(!products){
        res.status(404).send(error)
      }
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const deleteproduct = async (req, res) => {
    try {
      const products = await Product.findByIdAndDelete(req.params.id);
      if(!products){
        res.status(404).send(error)
      }
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

  const patchproduct = async (req, res) => {
    try {
      const products = await Product.findByIdAndUpdate(req.params.id, req.body);
      if(!products){
        res.status(404).send(error)
      }
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  };


  const putproduct = async (req, res) => {
    try {
      const products = await Product.findOneAndReplace({_id:req.params.id}, req.body);
      if(!products){
        res.status(404).send(error)
      }
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  };
module.exports = {getProductsById, getAllProducts , postProducts, deleteproduct, patchproduct, putproduct};
