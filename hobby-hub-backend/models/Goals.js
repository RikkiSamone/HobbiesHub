const mongoose = require("mongoose");


const GoalSchema = new mongoose.Schema({
  hobby: { type: mongoose.Schema.Types.ObjectId, ref: "Hobby", required: true },
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  xpReward: { type: Number, default: 10 }
});

module.exports = mongoose.model("Goal", GoalSchema);