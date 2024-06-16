const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
