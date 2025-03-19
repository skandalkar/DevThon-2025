//this file contains the schema for the user based on their role
/*
    This file (`user.js`) defines Mongoose schemas for different user roles (Principal, HoD, Faculty, and Student) in a system. It specifies their required fields and creates models for database storage and retrieval.
*/

//new updated schema for user
const mongoose = require("mongoose");

const options = { discriminatorKey: "role", timestamps: true };

// Base Schema (Common fields for all users)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String },  //removed required
    role: { type: String, default: "Principal" },
}, options);

const User = mongoose.model("User", userSchema);

// Principal Schema (No extra fields)
const Principal = User.discriminator("Principal", new mongoose.Schema({}, options));

// HoD Schema (Extra fields: department, designation)
const HoD = User.discriminator("HoD", new mongoose.Schema({
    department: { type: String, required: true },
    designation: { type: String, required: true }
}, options));

// Faculty Schema (Extra fields: department, designation)
const Faculty = User.discriminator("Faculty", new mongoose.Schema({
    department: { type: String, required: true },
    designation: { type: String, required: true }
}, options));

// Student Schema (Extra fields: rollNumber, year, department)
const Student = User.discriminator("Student", new mongoose.Schema({
    rollNumber: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    department: { type: String, required: true }
}, options));

module.exports = { User, Principal, HoD, Faculty, Student };
