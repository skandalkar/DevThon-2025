
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

//authentication route
app.use("/auth", authRoute);  //for sigup and signin

/*
// demo
app.use(express.static("public")); // Serve frontend

// MongoDB Connection
const connectDB1 = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/placementDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("MongoDB Connection Failed:", err.message);
        process.exit(1); // Stop server if DB connection fails
    }
};
// Define Placement Schema & Model
const PlacementSchema = new mongoose.Schema({
  year: Number,
  placedStudents: Number
});
const Placement = mongoose.model("Placement", PlacementSchema);

// API to Fetch Placement Data
app.get("/api/placements", async (req, res) => {
  try {
    const data = await Placement.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});


//demo

// Sample Data
const sampleData = [
  { year: 2020, placedStudents: 10 },
  { year: 2021, placedStudents: 15 },
  { year: 2022, placedStudents: 18 },
  { year: 2023, placedStudents: 20 },
  { year: 2024, placedStudents: 25 }
];

// Insert Data
Placement.insertMany(sampleData)
  .then(() => {
    console.log("Sample Data Inserted");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
*/

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
