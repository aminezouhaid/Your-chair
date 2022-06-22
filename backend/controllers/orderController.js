const nodemailer = require("nodemailer");
const Order = require('../models/Order');

const createOrder =  (req, res) => {
  console.log(req.body);
    try {
      
      const time=req.body.time
      const user_id = req.body.user_id
      const product_id = req.body.product_id
     
     
     
      const newOrder = new Order({
          
          user_id: user_id,
          time:time,
          product_id:product_id

      })

      const saveOrder =  newOrder.save()
      res.status(201).json({ success: true, order: saveOrder  })
    } catch (error) {
      res.status(404).json({ success: false, data: [], error: error })
    }
  }

  const getOrder = async (req, res) => {

    const order = await Order.findById(req.params.id)
    

     res.status(200).json({
       success:true,
       order
     })
  };

  const getorders = async (req, res) => {
    
    try {
      const orders = await Order.find().populate('product_id',"name description price ").populate('user_id',"username name phone email ")
      res.status(200).json({success: true , order: orders})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }
  const allOrders = async (req, res) => {
      
    try {
      const orders = await Order.find()

         let totalAmount = 0
      orders.forEach(order =>{
        totalAmount += order.total
      })
     
      res.status(200).json({success: true , orders , totalAmount})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }

  const deleteorder = async (req,res)=> {
   await Order.deleteOne({id: req.params._id});
  return res.status(200).json({
      success:true
    })
  };
  // const deleteorder = async (req, res) => {
  //   const orderId = req.params.orderId
  //   try {
  //     await order.remove({ id: orderId })
  //     res.status(200).json({ success: true, data: deleteorder })
  //   } catch (error) {
  //     res.status(409).json({ success: false, data: [], error: error })
  //   }
  // }


  const AdminUpdateOrderStatus = async (req,res) =>{
    try{
      const orderId = req.params.orderId
      // const { status } = req.body.status
      const { status } = req.body
  
      const updateOrderStatus = await Order.updateOne({ _id: orderId }, {
        $set: {
          status:status
        }

      })
      console.log("🚀 ~ file: OrdersController.js ~ line 114 ~ updateOrderStatus ~ updateOrderStatus", updateOrderStatus)
    res.status(201).json({ success: true, data: updateOrderStatus })
    
    }catch{
      res.status(404).json({success: false , data: [], error: error})
    }  
  }




  // _______________________________________________________________



const sendEmail = async (req, res) => {

 

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

      user: 'amine2020zouhaid@gmail.com',
      pass: 'amine123',

  }
  });

  let mailOptions = {
      from: 'ana2017benani@gmail.com', // sender address
      to: "amine2020zouhaid@gmail.com", // list of receivers
      


      subject: "Hello ✔", // Subject line
      text: " jjejejeje", // plain text body
      html: "<b>Monsieur  Suit  a votre achat  nous vous addressons,ci-joint une facture d'un montant de :<strong>  </strong> dh En vous remerciant par avance </b>",

  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 
}

// ___________________________________________________________________________________________

  

  module.exports = {
    createOrder,
    getOrder,
    getorders,
    AdminUpdateOrderStatus,
    allOrders,
    deleteorder,
    sendEmail
    };