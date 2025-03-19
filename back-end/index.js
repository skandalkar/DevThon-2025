
//server aknowlegement
let date = new Date();
console.log(date.toLocaleTimeString());
console.log("\n");


//importing express
const express = require('express');

//accessing the .env file
require('dotenv').config();

//importing mongoose
const mongoose = require('mongoose');

//importing the 
const app = express();




//Server running 
app.listen(process.env.portNo, ()=> {
    console.log(`Server is running on port ${process.env.portNo}`);
});

