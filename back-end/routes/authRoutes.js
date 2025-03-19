/*
const express = require("express");
const bcrypt = require("bcrypt");
const { Principal, HoD, Faculty, Student } = require("../models/user");
const generateToken = require("../utils/generateToken");

const router = express.Router();

// Common authentication function for all roles (SignUp & SignIn)

const handleAuth = async (req, res, RoleModel, roleName) => {
    try {
        const { name, email, password, department, year, contact, designation, rollNumber} = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        let user = await RoleModel.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "Account already exists with this email." });
        }

        // Check if required fields for role exist before proceeding
        const newUser = { 
            name, 
            email, 
            password: await bcrypt.hash(password, 10), 
            contact,
            role: roleName 
        };

        if (roleName === "HoD" || roleName === "Faculty" || roleName === "Student") {
            if (!department) return res.status(400).json({ message: "Department is required" });
            newUser.department = department;
        }

        if (roleName === "HoD" || roleName === "Faculty") {
            if (!contact) return res.status(400).json({ message: "Contact is required" });
            if (!designation) return res.status(400).json({ message: "Designation is required" });
            newUser.contact = contact;
            newUser.designation = designation;
        }

        if (roleName === "Student") {
            if (!year) return res.status(400).json({ message: "Year is required" });
            if (!contact) return res.status(400).json({ message: "Contact is required" });
            if (!rollNumber) return res.status(400).json({ message: "Roll Number is required" });
        
            newUser.year = year;
            newUser.contact = contact;
            newUser.rollNumber = rollNumber;
        }

        user = new RoleModel(newUser);
        await user.save();

        // Generate JWT token
        const token = generateToken(user, roleName);

        res.status(201).json({ message: "Account created successfully", token, user });
    } 
    catch (error) {
        console.error("Authentication error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};


// Routes for each role
router.post("/principal", (req, res) => handleAuth(req, res, Principal, "Principal"));
router.post("/hod", (req, res) => handleAuth(req, res, HoD, "HoD"));
router.post("/faculty", (req, res) => handleAuth(req, res, Faculty, "Faculty"));
router.post("/student", (req, res) => handleAuth(req, res, Student, "Student"));

module.exports = router;
*/


const express = require("express");
const bcrypt = require("bcrypt");
const { Principal, HoD, Faculty, Student } = require("../models/user");
const generateToken = require("../utils/generateToken");

const router = express.Router();

// Common SignUp function for all roles
const handleSignUp = async (req, res, RoleModel, roleName) => {
    try {
        const { name, email, password, department, year, contact, designation, rollNumber } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        let existingUser = await RoleModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Account already exists with this email." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // New user object
        const newUser = { name, email, password: hashedPassword, role: roleName };

        if (roleName === "HoD" || roleName === "Faculty" || roleName === "Student") {
            if (!department) return res.status(400).json({ message: "Department is required" });
            newUser.department = department;
        }

        if (roleName === "HoD" || roleName === "Faculty") {
            if (!contact) return res.status(400).json({ message: "Contact is required" });
            if (!designation) return res.status(400).json({ message: "Designation is required" });
            newUser.contact = contact;
            newUser.designation = designation;
        }

        if (roleName === "Student") {
            if (!year) return res.status(400).json({ message: "Year is required" });
            if (!contact) return res.status(400).json({ message: "Contact is required" });
            if (!rollNumber) return res.status(400).json({ message: "Roll Number is required" });
            newUser.year = year;
            newUser.contact = contact;
            newUser.rollNumber = rollNumber;
        }

        const user = new RoleModel(newUser);
        await user.save();

        // Generate JWT token
        const token = generateToken(user, roleName);

        res.status(201).json({ message: "Account created successfully", token, user });
    } catch (error) {
        console.error("SignUp Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Common SignIn function for all roles
const handleSignIn = async (req, res, RoleModel, roleName) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await RoleModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = generateToken(user, roleName);

        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("SignIn Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

// Routes for SignUp
router.post("/signup/principal", (req, res) => handleSignUp(req, res, Principal, "Principal"));
router.post("/signup/hod", (req, res) => handleSignUp(req, res, HoD, "HoD"));
router.post("/signup/faculty", (req, res) => handleSignUp(req, res, Faculty, "Faculty"));
router.post("/signup/student", (req, res) => handleSignUp(req, res, Student, "Student"));

// Routes for SignIn
router.post("/signin/principal", (req, res) => handleSignIn(req, res, Principal, "Principal"));
router.post("/signin/hod", (req, res) => handleSignIn(req, res, HoD, "HoD"));
router.post("/signin/faculty", (req, res) => handleSignIn(req, res, Faculty, "Faculty"));
router.post("/signin/student", (req, res) => handleSignIn(req, res, Student, "Student"));

module.exports = router;
