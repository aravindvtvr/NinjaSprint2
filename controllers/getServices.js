const express=require("express");
const mongoose= require("mongoose");
const router=express.Router();
const covidcasesmodel= mongoose.model("Services")
const log = require('simple-node-logger').createSimpleFileLogger('logs/project.log');
router.get("/",(req,res)=>{
    covidcasesmodel.find((err,docs)=>{

        
        if(!err)
        {
           //res.render("list",{data : docs})
           console.log(docs);
           console.log("\n Service Repository Operation Called:Get");
           console.log("\n Service Repository Operation Called:Post");
           console.log("\n Service Repository Operation Called:Put");
           console.log("\n Service Repository Operation Called:Delete");
           console.log("\n Service Repository Operation Called:Login");
           log.info("Service Repository Operation Called-Get");

           res.send(docs);
        }

        else
        {
            console.error(err);
        }
    });
    
})
module.exports=router;