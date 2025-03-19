const { User, Principal, HoD, Faculty, Student } = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Register User (Handles all roles dynamically)
const registerUser = async (req, res) => {
    try {
        const { name, email, contact, password, role, department, designation, rollNumber, year } = req.body;

        let userModel;
        let extraFields = {};  // Store role-specific fields

        if (role === "Principal") userModel = Principal;
        else if (role === "HoD") {
            userModel = HoD;
            extraFields = { department, designation };
        }
        else if (role === "Faculty") {
            userModel = Faculty;
            extraFields = { department, designation };
        }
        else if (role === "Student") {
            userModel = Student;
            extraFields = { rollNumber, year, department };
        }
        else return res.status(400).json({ message: "Invalid role" });

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user with common and role-specific fields
        const user = await userModel.create({ name, email, contact, password: hashedPassword, ...extraFields });

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// User Login (No change needed)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate token with role
        const token = generateToken(user, user.role);
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


//still update and fetch functionality is left

// Export all functions
module.exports = { registerUser, loginUser };
