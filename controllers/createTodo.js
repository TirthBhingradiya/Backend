const User = require("../models/Todo");
const jwt = require('jsonwebtoken');


//----------home logic

const home =async(req,res)=>{ 
    try{
        res.status(200).send("welcome to world best mern series by pinal using controller");
    }catch(error){
        console.log(error);
    }
};

const register =async (req,res) =>{
    try{
        let token;
        console.log(req.body);
        const {username,email,phone,password} = req.body;
        const userExist =await User.findOne({email});
        if(userExist){
                        return res.status(400).json({msg:"email already exists"});
                     }

        //const saltRound = 10;
        //const hash_password = await bcrypt.hash(password,10);


        const userCreated = await User.create({username,email,phone,password});
        res.status(201).json({msg:"registration successfully",token:await  userCreated.generateToken(),userId:userCreated._id.toString()});
        console.log(token);     
    }
    catch(error){
                    res.status(500).json("internal server error");
                }
};

module.exports  = {home,register};