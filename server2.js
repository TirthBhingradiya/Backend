const express=require("express");
const app=express();


require("dotenv").config();
const PORT=process.env.PORT  || 4000;

app.use(express.json());

const todoRoutes=require("./Routes/todo");

app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,() =>{
    console.log(`server started successfully at ${PORT}`);
})

const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res) =>{
    res.send(`<h1> this is HOME page baby</h1>`);
})