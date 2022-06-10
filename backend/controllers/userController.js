const user = require('../models/User');




const getusers = async (req,res,role)=> {
    let users = await user.find({role:role});
    return res.status(200).json({
       data:users,
        message:"Hurray ! You ar now Get all users .",
        success:false
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
      let newvalues = { $set: {name: name, email:email, username:username} };
    let users = await user.updateOne({_id:idusers}, newvalues);
    return res.status(200).json({
        ...users,
        message:"Hurray ! You ar now updat user Par ID .",
        success:false
      })
  };

  const deleteuser = async (req,res)=> {
    const idusers=req.params.userid;

    let users = await user.deleteOne({_id:idusers});
    return res.status(200).json({
      data:users,
        message:"Hurray ! You ar now Delet user Par ID .",
        success:false
      })
};

  module.exports = {

    getusers ,
    updateuser  ,
    deleteuser,
    getuser,
  
   };