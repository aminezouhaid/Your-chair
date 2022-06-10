const Product = require("../models/Product")
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const creatProduct = async (req, res) => {

    console.log('request',req.body);

    try {
      const name = req.body.name
      const description = req.body.description
      const price = req.body.price
      const category = req.body.category


      const newProduct = new Product({
        name: name,
        description: description,
        price: price,
        category: category,
        // user_id:user_id
      })

        if (req.file) {
        newProduct.image_cover = req.file.originalname
      }
      const saveProduct = await newProduct.save()
      res.status(201).json({ success: true, data: saveProduct })

    } catch (error) {
          console.log(error)
          res.status(404).json({ success: false, data: [], error: error })
    }
  }




  const getProducts = async (req, res) => {
    try {
      const products = await Product.find()
      res.status(200).json({ success: true, data: products })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }





  const getProduct = async (req, res) => {
    const productId = req.params.productId
    try {
      const product = await Product.find({ _id: productId })
      res.status(200).json({ success: true, data: product })
    } catch (error) {
      res.status(404).json({ success: false, data: [], error: error })
    }
  }








  const updateProduct = async (req, res) => {
    const productId = req.params.productId

    const {name} = req.body
      const {description} = req.body
      const {price} = req.body
      const {category} = req.body
  
    try {
      const editeproduct = await Product.updateOne({ _id: productId }, {
        $set: {
        name: name,
        description: description,
        price: price,        
        category: category,        
        }
      })

      if (req.file) {
        editeproduct.image_cover = req.file.originalname
      }

      res.status(201).json({ success: true, data: editeproduct })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }



const deleteProduct = async (req, res) => {
  const productId = req.params.productId
  try {
    await Product.remove({ _id: productId })
    res.status(200).json({ success: true, data: deleteProduct })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}





  module.exports = {
    creatProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
  }