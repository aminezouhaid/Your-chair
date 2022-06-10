const Category = require("../models/Category");
const creatCategory = async (req, res) => {

    console.log('request',req.body);

    try {
      const name = req.body.name
      const newCategory = new Category({
        name: name
        // user_id:user_id
      })
      const saveCategory = await newCategory.save()
      res.status(201).json({ success: true, data: saveCategory })

    } catch (error) {
          console.log(error)
          res.status(404).json({ success: false, data: [], error: error })
    }
  }



  const updateCategory = async (req, res) => {
    const categoryId = req.params.categoryId

    const {name} = req.body

  
    try {
      const editecategory = await Category.updateOne({ _id: categoryId }, {
        $set: {
        name: name,
       
        }
      })

      res.status(201).json({ success: true, data: editecategory })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }






  const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId
    try {
      await Category.remove({ _id: categoryId })
      res.status(200).json({ success: true, data: deleteCategory })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }




  const getCategories = async (req, res) => {
    try {
      const categories = await Category.find()
      res.status(200).json({ success: true, data: categories })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }

  const getCategory = async (req, res) => {
    const categoryId = req.params.categoryId
    try {
      const category = await Category.find({ _id: categoryId })
      res.status(200).json({ success: true, data: category })
    } catch (error) {
      res.status(404).json({ success: false, data: [], error: error })
    }
  }







  module.exports = {
    creatCategory,
    deleteCategory,
    updateCategory,
    getCategories,
    getCategory
  }