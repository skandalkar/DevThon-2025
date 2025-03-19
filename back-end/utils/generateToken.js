

// Utility function to generate JWT token
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_secret_key"; // Use environment variable in production

const generateToken = (user, role) => {
    return jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateToken;
