const router = require("express").Router();
const { userAuth, checkRole} = require("../controllers/Auth");
const { getusers, updateuser, deleteuser, getuser} = require("../controllers/userController");

router.get("/" ,  getusers);
router.get("/:userid",  getuser);
router.patch("/:userid",   updateuser);
router.delete("/:userid",  deleteuser);




module.exports = router;