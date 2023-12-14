const Todo= require("../models/Todo");

//define route handler

 exports.createTodo= async(req,res) =>{
    try{
        //extract title and description from request body
        const{title,description}=req.body;
        //create a new Todo object and connect with database

        const response=await Todo.create({title:title,description:description});
          //send a json response with a success flag
          res.status(200).json(
            {
                success:true,
                data:response,
                message:'entry Created Successfully'
            }
          );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"interval server error",
            message:err.message,
        })
    }
 }