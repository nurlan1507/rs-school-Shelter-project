const path = require("path");
const express = require('express');
const app = express();
app.listen(3000,()=> {
    console.log("running serv")
})
app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname));
    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname +"/index.html"));
    })
app.get('/ourpets.html',(req,res)=>{
    res.sendFile(__dirname+'/ourpets.html')
})
