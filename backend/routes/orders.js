const router = require("express").Router();
const {addProductToHistory} = require( '../middlewares/user')
const { userAuth, checkRole} = require("../controllers/Auth");
const {createOrder, getOrder, getorders, allOrders, deleteorder, AdminUpdateOrderStatus, sendEmail} = require("../controllers/orderController");


if(router.post('/add', (req,res)=>{       createOrder(req,res) })){
     sendEmail();
}


// router.post('/add', (req,res)=> createOrder(req,res));


// router.post('/add', (req,res)=>{                        sendEmail(req,res); });





router.get('/', async(req,res)=>{                           await   getorders(req,res); });

router.get('/:id', async(req,res)=>{                        await   getOrder(req,res);});

router.delete('/:id', async(req,res)=>{                     await   deleteorder(req,res);});

router.get('/admin/allOrders', async(req,res)=>{            await   allOrders(req,res);});

router.patch('/admin/allorders/:orderId', async(req,res)=>{ await   AdminUpdateOrderStatus(req,res);});


module.exports = router;