const express = require("express");
const app = express();
const routes = require ("./Routes/todo");
const dbConnect = require("./config/database");
dbConnect();

app.use(express.json());
app.use("/api/auth", routes);

const PORT = 3000;


app.listen(PORT,()=>{
    console.log('serevr is running port:3000');
});
