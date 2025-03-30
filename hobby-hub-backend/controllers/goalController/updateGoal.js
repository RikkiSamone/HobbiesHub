const Goal = require("../../models/Goals");

const updateGoal = async (req, res) => {
  try {
    const { goalId } = req.params;
    const { title, description, targetDate, xpRequired } = req.body;

    // Find the goal to update
    const goal = await Goal.findById(goalId);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // Update the goal fields
    goal.title = title || goal.title;
    goal.description = description || goal.description;
    goal.targetDate = targetDate || goal.targetDate;
    goal.xpRequired = xpRequired || goal.xpRequired;

    await goal.save();

    res.status(200).json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update goal' });
  }
};

module.exports = updateGoal;