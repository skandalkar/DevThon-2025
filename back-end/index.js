
const mongoose = require('mongoose');

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const connectDB = require('./config/dbConnection');

const authRoute = require("./routes/authRoutes");


const app = express();
require('dotenv').config();
connectDB();

app.use(cors());
app.use(bodyParser.json());

//home  route
app.get("/", (req, res) => {
  res.send("Welcome to the home route");
});

//authentication route
app.use("/auth", authRoute);  //for sigup and signin


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
