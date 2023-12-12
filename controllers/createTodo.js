const home =async(req,res)=>{ 
    try{
        res.status(200).send("welcome to world best mern series by Tirth using controller");
    }catch(error){
        console.log(error);
    }
};

const register =async (req,res) =>{
    try{
        console.log(req.body);
        
    }catch(error){
        res.status(400).json("page not found")
    }
}

module.exports  = {home,register};