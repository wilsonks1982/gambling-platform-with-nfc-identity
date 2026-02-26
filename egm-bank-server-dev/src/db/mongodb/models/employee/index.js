const { default: mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  account: { type: String, required: true },
  pin: { type: String, required: false },
  role: { type: String, required: false },
  createdAt: { type: String, required: false },
  updatedAt: { type: String, required: false },
});

module.exports = employeeSchema;
