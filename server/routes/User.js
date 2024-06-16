const express = require("express");

const router = express.Router();

// User model
const UserModel = require("../models/User");

router.get("/getAllUsers", (req, res) => {
  UserModel.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.get("/getUser/:id", (req, res) => {
  id = req.params.id;
  UserModel.findById({ _id: id })
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/addUser", (req, res) => {
  UserModel.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.put("/updateUser/:id", (req, res) => {
  id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      age: req.body.age,
    }
  )
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.delete("/deleteUser/:id", (req, res) => {
  id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
