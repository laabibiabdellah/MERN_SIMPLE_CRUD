const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.BACKEND_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
