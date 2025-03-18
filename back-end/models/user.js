
//this file contains the schema for the user based on their role

const mongoose = require("mongoose");

//schema for Pricipal
const principalSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
});


//schema for Head of Department
const hodSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
});

//schema for Faculty
const facultySchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    password: { type: String, required: true },
});

//schema for Student
const studentSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    roll_number: { type: String, required: true, unique: true },
    year: { type: Number, required: true }
});


const Principal = mongoose.model("Principal", principalSchema);

const HoD = mongoose.model("HoD", hodSchema);

const Faculty = mongoose.model("Faculty", facultySchema);

const Student = mongoose.model("Student", studentSchema);


module.exports = { Principal, HoD, Faculty, Student };