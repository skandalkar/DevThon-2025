
//

/* 

*/

/*
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Principal, HoD, Faculty, Student } = require("../models/user");

const router = express.Router();
// const JWT_SECRET = "your_secret_key"; // Store securely in .env

const generateToken = (user, role) => {
    return jwt.sign({ id: user._id, role: role }, JWT_SECRET, { expiresIn: "1h" });
};

// Principal Signup/Login
router.post("/signin/principal", async (req, res) => {
    try {
        const { email, password, name } = req.body;
        let user = await Principal.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = new Principal({ name, email, password: hashedPassword });
            await user.save();
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user, "Principal");
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Example: Protected Route for Principals Only (Uses Middleware)
router.get("/dashboard/principal", authMiddleware(["Principal"]), (req, res) => {
    res.json({ message: "Welcome to Principal Dashboard", user: req.user });
});

// Example: Protected Route for HoDs Only
router.get("/dashboard/hod", authMiddleware(["HoD"]), (req, res) => {
    res.json({ message: "Welcome to HoD Dashboard", user: req.user });
});

module.exports = router;

*/

const express = require("express");
const bcrypt = require("bcrypt");
const { Principal, HoD, Faculty, Student } = require("../models/user");
const generateToken = require("../utils/generateToken"); // Import token utility

const router = express.Router();

//  Common function for handling login for different roles
const handleAuth = async (req, res, RoleModel, roleName) => {
    try {
        const { email, password, name, department, year } = req.body;
        let user = await RoleModel.findOne({ email });

        if (!user) {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { name, email, password: hashedPassword, role: roleName };

            // Extra fields for specific roles
            if (department) newUser.department = department;
            if (year) newUser.year = year;

            user = new RoleModel(newUser);
            await user.save();
        }

        // Password verification
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // 🔹 Generate token using the utility function
        const token = generateToken(user, roleName);

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Routes for each role
router.post("/signin/principal", (req, res) => handleAuth(req, res, Principal, "Principal"));
router.post("/signin/hod", (req, res) => handleAuth(req, res, HoD, "HoD"));
router.post("/signin/faculty", (req, res) => handleAuth(req, res, Faculty, "Faculty"));
router.post("/signin/student", (req, res) => handleAuth(req, res, Student, "Student"));

module.exports = router;
// Note: The `authMiddleware` function is not defined in this code snippet. It is assumed to be defined elsewhere in the codebase.