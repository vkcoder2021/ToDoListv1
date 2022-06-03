const express = require("express");
const bodyParser= require("body-parser");
const app =express();
const date =require(__dirname+"/date.js")
var items =["Meeting1","Meeting2","Fund transfer"];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

var day= date.getDate();
res.render("list",{kindOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
var item=req.body.newItem;

items.push(item);
res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on port 3000");
});