const cors = require("cors");

const bp = require("body-parser");

const exp = require("express");

const expressValidator = require('express-validator');

const cookieParser = require('cookie-parser')

const app  = exp();

const passport= require("passport");

const {connect} = require("mongoose");

const {DB, PORT}= require("./config");

const { success , error  } = require("consola")

const  { engine } = require('express-handlebars') ;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bp.urlencoded({ extended: false, limit: '50mb', parameterLimit: 100000}));
app.set('view engine', 'ejs');
app.use(exp.static("files"));
// parse application/json

// app.use(expressValidator());

app.use(bp.json());

app.get('/', (req, res) => {
    res.render('home');
   
});

app.post("/upload", (req, res) => {
    const newpath = __dirname + "/files/";
    const file = req.files.file;
    const filename = file.name;
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        console.log(file)
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });


app.use(cors());
app.use(bp.json());
app.use(passport.initialize());
app.use(cookieParser());


require('./middlewares/passport')(passport);

//User Router Middleware
app.use("/api/users",require("./routes/users"));
app.use("/api/category",require("./routes/categories"));
app.use("/api/product",require("./routes/products"));
app.use("/api/client",require("./routes/clients"));
app.use("/api/delivery",require("./routes/deliveries"));
app.use("/api/orders",require("./routes/orders"));





















const startApp = async ()=>{
    try{
        //connection with DB
        await connect(DB,{
            useNewUrlParser: true
    })
    success({message: `Successfully connected with the Database \n${DB}`,
    badge : true} ); 
          //Start Listenting for the serevr 
        app.listen(PORT, ()=>
            success({message: `Server started o PORT ${PORT}` , badge: true}));
    
    }catch(err){
    
        error({message: `Unable to connect with Database connected with the Database \n${err}`,
        badge : true} );
        startApp();
    }
    }
    startApp();