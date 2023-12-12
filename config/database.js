const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async() => {
     mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    ,await console.log("DB ka connection successful ho gya");
    
};

module.exports = dbConnect;
