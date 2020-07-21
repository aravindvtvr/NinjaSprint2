const cors = require('cors');
const connection = require ("./model/dbconnect_model");
const express = require ("express");
const path=require("path");
const Handlebars= require('handlebars');
const expresshandlebars= require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const getServices=require("./controllers/getServices");
const postServices=require("./controllers/postServices");


const application= express();
//test comment
/*application.engine("hbs",expresshandlebars({handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: "hbs",
    defaultlayout : "mainlayout",
    layoutsDir: __dirname + "/views/layouts/"

}));
application.set("view engine","hbs")

/* application.get("/",(req,res)=>{
    res.render("index",{})
}); */ 


application.use(cors());
//application.set('views',path.join(__dirname,"/views/"));
application.get("/",getServices);
application.post("/",postServices);

application.listen("4000",()=> console.log("Listening to client requests at port 4000"));
