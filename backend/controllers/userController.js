const user = require('../models/User');




const getusers = async (req,res)=> {
    let users = await user.find();
    return res.status(200).json({
       data:users,
        message:"Hurray ! You ar Get all users .",
        success:true
      })
  };
  const getuser = async (req, res) => {
    const userid = req.params.userid
  
  
    try {
        const Oneuser = await user.find({ _id: userid })
        res.status(200).json({ success: true, data: Oneuser })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
  }

  const updateuser = async (req,res)=> {
      const idusers=req.params.userid;
      const {name}= req.body;
      const {email}= req.body;
      const {username}= req.body;
      const {phone}= req.body;
      let newvalues = { $set: {name: name, email:email, username:username,phone:phone} };
    let users = await user.updateOne({_id:idusers}, newvalues);
    return res.status(200).json({
        ...users,
        message:"Hurray ! You ar now updat user Par ID .",
        success:false
      })
  };

//   const deleteuser = async (req,res)=> {
   

//     let users = await user.deleteOne({_id: req.params.userid});
//     return res.status(200).json({
//       data:users,
//         message:"Hurray ! You ar  Delet user Par ID .",
//         success:true
//       })
// };

const deleteuser = async (req,res)=> {
  await user.deleteOne({id: req.params._id});
 return res.status(200).json({
     success:true,
     message: "user is deleted"
   })
 };

  module.exports = {
    getusers ,
    updateuser  ,
    deleteuser,
    getuser,
  
   };