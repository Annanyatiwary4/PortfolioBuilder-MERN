// Initiate connection to MongoDB
require('dotenv').config();
const mongoose = require('mongoose');

const dburl = process.env.DB_URL || "mongodb://localhost:27017/annanya's_portfolio_mng_sys_db";
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully");
}).catch((err) => {
    console.log(err.message);
});