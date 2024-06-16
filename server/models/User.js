const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: String,
  age: Number,
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
