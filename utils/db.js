const mongoose= require("mongoose");

const URI = "  mongodb+srv://vaghasiyapinal:pinal@13@cluster0.gbxa2nl.mongodb.net/mern_admin?retryWrites=true&w=majority";

const connectDb =async () =>
{
    try{
        await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("database connection successfully");
    }
catch(error) {
        console.error(" database connection error");
        process.exit(1);
    }
}

module.exports=connectDb;