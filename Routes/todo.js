const express=require("express");
const router=express.Router();

//import Controller
const {createTodo}=require("../controllers/createTodo.")

//define Api routes
router.post("/createTodo",createTodo);

module.exports=router;