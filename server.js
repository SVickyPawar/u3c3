const express=require("express");

const mogoose=require("mongoose");

const app=express();

const mongoose=mongoose();

const connect=()=>{
    return connect("mongodb://127.0.0.1:27017/books")
}

//creating schema

const userSchema= new mogoose.Schema({
    firstName:{type:String,required:true,minlength:3,maxlength:30},
    lastName:{type:String,required:false,minlength:3,maxlength:3},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:1},
    profileImages:{type:Image,required:true,min:1}
},{
    timestamps:{type:String ,required:true}
});

const User=mogoose.connect("user",userSchema);

const bookSchema=new mongoose.Schema({
    likes:{type:Number,required:true,default:1},
    coverImage:{type:String,required:true},
    content:{type:String,required:true}
},{
    timestamps:{type:String,required:true}
});

const Book=mongoose.connect("book",bookSchema);


const publicationSchema=new mongoose.Schema({
    name:{required:true}
},{
    timestamps:{type:String,required:true}
})

const Publication=mongoose.connect("publication",publicationSchema);


const commentSchema=new mogoose.Schema({
    body:{type:String,required:true}
},{
    timestamps:{type:String,required:true}
})


const Comment=mongoose.connect("comment",commentSchema);






app.listen(5000,()=>{
console.log("listening on port 5000");
})