

// Utility function to generate JWT token

const jwt = require("jsonwebtoken");

const generateToken = (user, role) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables.");
    }

    return jwt.sign(
        { id: user._id, email: user.email, role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hr
    );
};

module.exports = generateToken;
