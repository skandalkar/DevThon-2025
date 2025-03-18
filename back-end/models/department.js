

//this file contains the schema for the department
/* 
 This file defines the Department Schema and creates a model (Department) for storing and managing department-related data in database.
*/


const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: String, // Department name (e.g., "Computer Science")
    hod: { type: mongoose.Schema.Types.ObjectId, ref: "HoD" },  // Reference to the HoD
    facultyCount: Number,  // Total faculties in this department
    studentCount: Number, // Total students in this department
});

const Department = mongoose.model("Department", departmentSchema);
module.exports = Department;
