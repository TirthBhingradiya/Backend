const express =require('express');
const app= express();


app.listen(3000,()=>{
    console.log("server started at port  no 3000");
});


app.get('/',(request,response) =>{
    response.send("HEllo jee kaise ho saare");
})