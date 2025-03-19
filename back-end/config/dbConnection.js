/* 
    This file will specify the connection with database.
    It will use mongoose to connect with MongoDB.
*/

const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.mongoDBURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection failed.");
        process.exit(1);
    }
};

module.exports = dbConnection;
