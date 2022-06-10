const router = require("express").Router();
const { userAuth, checkRole} = require("../controllers/Auth");
const { creatProduct, getProducts, getProduct, updateProduct, deleteProduct} = require("../controllers/productController");
const upload = require('../middlewares/upload')

  router.post("/add" , upload.single('image_cover'),  creatProduct);
  router.get("/", getProducts);
  router.get("/:productId",  getProduct);
  router.patch("/:productId",  upload.single('image_cover') ,  updateProduct);
  router.delete("/:productId",  deleteProduct);

module.exports = router;