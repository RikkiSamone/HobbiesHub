const express = require("express");
const router = express.Router();

const addGoal = require("../controllers/goalController/addGoal");
const updateGoal = require("../controllers/goalController/updateGoal");
const deleteGoal = require("../controllers/goalController/deleteGoal");

router.post("/:hobbyId/goals", addGoal);
router.put("/:hobbyId/goals/:goalId", updateGoal);
router.delete("/:hobbyId/goals/:goalId", deleteGoal);

module.exports = router;