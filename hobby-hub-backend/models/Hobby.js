const mongoose = require("mongoose");

const HobbySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  xp: { type: Number, default: 0 },
  xpEnabled: { type: Boolean, default: true },
  goals: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }]
});

module.exports = mongoose.model("Hobby", HobbySchema);