const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const {SECRET} = require('../config');
const passport = require('passport')

const userRegister = async (userDets, role, res) => {
 
    // Get the hashed password
    const password = await bcrypt.hash(userDets.password, 12);
    // create a new user
    const newUser = new User({
      ...userDets,
      password,
      role
    });
    
    await newUser.save();
   
    return res.status(201).json({
      
          newUser
    });

};

//login
const userLogin = async (userCreds,role,res)=>{
    let {email , password} = userCreds;
    //First Check if the username is the database
    const user = await User.findOne({email});
    if(!user){
      return res.status(200).json({
        message:"Please make sure you are logging in from the portal.",
        success:false
      });
    }
    //That means user is existing and tryning to signin the right portal
    //Now check for the password 
    let isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      let token = jwt.sign({
        user_id:user._id,
        role:user.role,
        username:user.username,
        email:user.email
      },
      SECRET ,
      {
        expiresIn:"7 days"
      }

      );
   
      let result ={
        user : {
          name:user.name, 
          username:user.username,
          role:user.role,
          email:user.email,
        },
      
        token : `Bearer ${token}`,
        expiresIn:168
      };
       res.cookie('token' ,result, {expire:new Date() + 8000000});

      return res.status(200).json({
        ...result,
        
        messagee:"Hurray ! You ar now logged in .",
        success:true,
       
      });
      
  }
  else {
      return res.status(403).json({
        message: "Incorrect password.",
        success:false
      });  
    }
  
  };

  const validateUsername = async username => {
    let user = await User.findOne({ username });
    return user ? false : true;
  };

  const userAuth = passport.authenticate("jwt" , {session:false});
  //check Role Middleware
  // const jwtt =  localStorage.getItem('token');

  const checkRole = roles =>(req,res,next)=> !roles.includes(req.user.role)? res.status(401).json("Unauthorized"):next();

  const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
  };

  const serializeUser = user =>{
    return{
    username : user.username,
    email : user.email,
    name:user.name,
    _id : user._id,
    updatedAt : user.updatedAt,
    createdAt: user.createdAt,
  
   
  }
  }

  const signout = (req,res)=>{

    res.clearCookie('token');
    res.json({
      message:"User Singout"
    })
  
  }

module.exports = {
    userAuth,
     userRegister,
     userLogin,
     serializeUser,
     checkRole,
     signout
    
   };
   