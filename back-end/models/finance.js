

////this file contains the schema for the finance for the level institution

/* 
    This file defines the Finance Schema and creates a model (Finance) for storing and managing financial transactions in your database.

    * Stores financial transactions (e.g., college fees, salaries, expenses)
    * Tracks income and expenses over time 
    * Allows financial reporting & budget analysis
*/

const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
    transactionType: String,  // Type of transaction (e.g., "Income", "Expense" on the institution's account)
    category: String,  // Category of transaction (e.g., "Tuition", "Books", "Salaries", "Utilities")
    amount: Number,  // Amount of money in the transaction
    date: Date,  // Date of transaction
    description: String,  // Additional details about the transaction
});


const Finance = mongoose.model("Finance", financeSchema);
module.exports = Finance;
