const home =async(req,res)=>{ 
    try{
        res.status(200).send("welcome to world best mern series by pinal using controller");
    }catch(error){
        console.log(error);
    }
};

const register =async (req,res) =>{
    try{
        console.log(req.body);
        res.status(200).send("Happy birthday Pinal")
    }catch(error){
        res.status(400).json("page not found")
    }
}

module.exports  = {home,register};