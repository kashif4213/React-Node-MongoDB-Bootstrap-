const mongoose= require("mongoose");
const userSchema= mongoose.Schema;

const newUserSchema= new userSchema({
fName: {type:String , required:true},
lName: {type:String , required:true},
email: {type:String , required:false},
pass: {type:String , required:true}
});

const userModel= mongoose.model("users",newUserSchema);

module.exports.userModel= userModel;