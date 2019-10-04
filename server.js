const express = require("express");


const app = express();


app.get("/",function(req,res){
  res.send("<h1>Hello! </h1>")
});

app.get("/contact" , function(req,res){
  res.send("contact me")
})

app.get("/about" , function(req,res){
  res.send("I am Ismail")
})

app.get("/cv" , function(req,res){
  res.send("I am cv")
})



app.listen(3000,function(){
  console.log("running")
});