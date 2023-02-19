let express = require("express");
let api = express.Router();
api.use(express.json())



api.post("/test",async(req,res)=> {
    try{
        
        let data = req.body
        console.log('request data',data)
         res.send(data)
    }catch(e){
        console.log('error in test api')
    }
})

module.exports = api;