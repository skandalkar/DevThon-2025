//this file contains the schema for the user based on their role

/*
    This file (`user.js`) defines Mongoose schemas for different user roles (Principal, HoD, Faculty, and Student) in a system. It specifies their required fields and creates models for database storage and retrieval.
*/

/*
const mongoose = require("mongoose");
//schema for Pricipal
const principalSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    password: { type: String, required: true }
});
//schema for Head of Department
const hodSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true }
});
//schema for Faculty
const facultySchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    password: { type: String, required: true }
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
*/


//new updated schema for user
const mongoose = require("mongoose");

const options = { discriminatorKey: "role", timestamps: true };

//  Base Schema (Common fields for all roles)
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    password: { type: String, required: true },
}, options);

const User = mongoose.model("User", userSchema);

// Principal Schema (No extra fields)
const Principal = User.discriminator("Principal", new mongoose.Schema({}, options));

// HoD Schema (Extra: department, designation)
const HoD = User.discriminator("HoD", new mongoose.Schema({
    department: { type: String, required: true },
    designation: { type: String, required: true }
}, options));

// Faculty Schema (Extra: department, designation)
const Faculty = User.discriminator("Faculty", new mongoose.Schema({
    department: { type: String, required: true },
    designation: { type: String, required: true }
}, options));

// Student Schema (Extra: rollNumber, year, department)
const Student = User.discriminator("Student", new mongoose.Schema({
    rollNumber: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    department: { type: String, required: true }
}, options));

module.exports = { User, Principal, HoD, Faculty, Student };

