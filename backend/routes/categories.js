const router = require("express").Router();
const {userAuth, checkRole} = require("../controllers/Auth");
const { creatCategory , deleteCategory , updateCategory , getCategories , getCategory } = require("../controllers/categoryController");
const upload = require('../middlewares/upload')

// categories
  router.post("/add" ,  creatCategory);
  router.patch("/:categoryId",   updateCategory);
  router.delete("/:categoryId",  deleteCategory);
  router.get("/:categoryId",  getCategory);
  router.get("/", getCategories);

module.exports = router;