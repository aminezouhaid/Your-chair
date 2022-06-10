const router = require("express").Router();

const { userRegister, userLogin, userAuth, serializeUser, checkRole, signout} = require("../controllers/Auth");

const {userSignUpValidator, userSignInValidator} = require('../middlewares/userValidator')

  router.post('/register-user',async(req,res)=>{
    console.log(req.body)
    await userRegister(req.body, "user", res);
});

//Owner User Registration Route

router.post('/register/livreur', async(req,res)=>{
    await userRegister(req.body, "livreur", res);
});

//Admin Registration Route

router.post('/register-admin', async(req,res)=>{
    await userRegister(req.body, "admin", res);
});

// User Login Route

router.post('/login-user', async(req,res)=>{
    await userLogin(req.body,"user",res);
});

//Owner User Login Route

router.post('/login/livreur', async(req,res)=>{
    await userLogin(req.body,"livreur",res);

});

//Admin Login Route

router.post('/login-admin', async(req,res)=>{
    await userLogin(req.body,"admin",res);

});

//Profile Route

router.get("/profile", userAuth, async (req,res)=>{
    return res.json(serializeUser(req.user));
});

//Users Protected Route 

router.get('/user-protectd',userAuth,checkRole(['user']) ,async(req,res)=>{
    return res.json("hello User")});

//Owner User Protected Route
router.get('/livreur-protectd',userAuth,checkRole(['livreur']) ,async(req,res)=>{
    return res.json("hello livreur")
});

//Admin Protected Route
router.get('/admin-protectd',userAuth,checkRole(['admin']) ,async(req,res)=>{
    return res.json("hello admin")

});
router.get('/signout', signout)

module.exports = router;