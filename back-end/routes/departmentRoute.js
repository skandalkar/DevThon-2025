const express = require("express");
const Department = require("../models/department");

const router = express.Router();

// Add or update department data
router.post("/add", async (req, res) => {
    try {
        const { name, totalStudents, passedOutStudents, placements } = req.body;

        let department = await Department.findOne({ name });

        if (department) {
            // Update existing department
            department.totalStudents = totalStudents;
            department.passedOutStudents = passedOutStudents;
            department.placements = placements;
        } else {
            // Create new department
            department = new Department({
                name,
                totalStudents,
                passedOutStudents,
                placements
            });
        }

        await department.save();
        res.status(200).json({ message: "Department data saved successfully", department });
    } catch (error) {
        res.status(500).json({ message: "Error saving department data", error: error.message });
    }
});

// Get placement statistics
router.get("/placements/:department", async (req, res) => {
    try {
        const department = await Department.findOne({ name: req.params.department });

        if (!department) {
            return res.status(404).json({ message: "Department not found" });
        }

        res.status(200).json({ placements: department.placements });
    } catch (error) {
        res.status(500).json({ message: "Error fetching placement data", error: error.message });
    }
});

module.exports = router;
