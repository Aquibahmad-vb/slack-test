const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  role: String,
  DOB: Date,
});

const userModal = mongoose.model("users", userSchema);

module.exports = userModal;
