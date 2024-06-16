const express = require("express");
const app = express();
require("./config/connect");

const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = 3000;

// User CRUD
const UserRoute = require("./routes/User");
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
