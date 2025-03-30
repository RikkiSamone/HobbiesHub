const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xpEnabled: { type: Boolean, default: true },
  hobbies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hobby" }]
});

module.exports = mongoose.model("User", UserSchema);