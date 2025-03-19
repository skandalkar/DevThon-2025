
const mongoose = require('mongoose');

require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection failed.");
        process.exit(1);
    }
};

module.exports = dbConnection;