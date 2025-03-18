

////this file contains the schema for the attendance of the student

/* 
    This file defines the Attendance Schema and creates a model (Attendance) for storing and managing student attendance records in database.
*/

const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },  // Links attendance to a student
    date: Date,   // Date of attendance
    status: { type: String, enum: ["Present", "Absent", "Late"], default: "Present" }, // Attendance status (Present, Absent, Late)
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;

