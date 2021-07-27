const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const fs = require("fs");
var cors = require('cors')
const url = require('url');
const usersCollection = require("./users");
const userModel= usersCollection.userModel;
const bcrypt = require('bcrypt');
app.use(cors()) 
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dbadmin:Pakistan780@cluster0.6iinx.mongodb.net/udacity?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true}
).then(()=>{
  console.log("connected");
})
.catch((error)=>{
console.log("error");
})
let arr=[];




app.post("/postData", (req,res)=>
{
  console.log("Received");
  arr=req.body
console.log(arr);
const  user = new userModel({
  fName:arr.fName,
  lName:arr.lName,
  email: arr.email,
  pass: arr.pass
})
user.save().then(()=>{
  console.log("inserted");
})
.catch((err)=>
{
  console.log("error1");
})

});

app.post("/postData1", (req,res)=>
{
  var flag= false;
  console.log("Received");
  arr=req.body
console.log(arr);
userModel.findOne({ email: arr.email }).then(result=>
  {
    res.send(result);

  })
    

  // userModel.findOne({ pass: arr.pass }).then(result=>
  //   {
  //     console.log(result);
  //     if (result==null) {
  //       return res.status(400).send('Incorrect email or password.');
  //   }
  
  //   })
    //console.log("true");
    console.log(flag);
  //  res.send(flag);
  


});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.use(function(req, res) {
  res.send("ERROR 404 - NOT FOUND");
})
