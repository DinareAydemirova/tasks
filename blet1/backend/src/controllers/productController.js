/** @format */

const { error } = require("console");

const Product = "./../models/productModel.js";

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error)
  }
};

const postPrtoduct = async (req, res) => {
    try {
      const obj=req.body
      const newProduct=new Product(obj)
      newProduct.save()
      res.status(201).send(newProduct);
    } catch (error) {
      res.status(400).send(error)
    }
  };


  const getProductById = async (req, res) => {
    try {
      const product=await Product.findById(req.params.id)
      if(!product){
        res.status(404).send(error)
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error)
    }
  };


  
  const deleteProductById = async (req, res) => {
    try {
      const product=await Product.findByIdAndDelete(req.params.id)
      if(!product){
        res.status(404).send(error)
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error)
    }
  };


  const patchProductById = async (req, res) => {
    try {
      const product=await Product.findByIdAndUpdate(req.params.id, req.body)
      if(!product){
        res.status(404).send(error)
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putProductById = async (req, res) => {
    try {
      const product=await Product.findOneAndReplace({_id:req.params.id}, req.body)
      if(!product){
        res.status(404).send(error)
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(400).send(error)
    }
  };
module.exports = {putProductById, patchProductById, getProductById, getAllProduct , postPrtoduct, deleteProductById};
