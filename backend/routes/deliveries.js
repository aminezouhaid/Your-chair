const router = require("express").Router();
const { userAuth, checkRole} = require("../controllers/Auth");
const {getSingleOrderlivr, order_delivery, LivreurUpdateOrderStatus} = require("../controllers/deliveryController");

router.get(  "/livreur/:orderId", getSingleOrderlivr);
router.post( "/livreur/:orderId", [userAuth],   order_delivery);
router.patch("/livreur/:orderId",  LivreurUpdateOrderStatus);

module.exports = router;