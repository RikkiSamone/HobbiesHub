const Goal = require("../../models/Goals");
const User = require("../../models/User");

const deleteGoal = async (req, res) => {
 try {
    const { goalId } = req.params;

    // Find the goal by its ID and delete it
    const goal = await Goal.findByIdAndDelete(goalId);
    if (!goal) {
      return res.status(404).json({ message: 'Goal not found' });
    }

    // Remove the goal from the user's goals array
    const user = await User.findById(req.user._id); // Assuming user is authenticated
    user.goals = user.goals.filter(goal => goal.toString() !== goalId);
    await user.save();

    res.status(200).json({ message: 'Goal deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete goal' });
  }
};

module.exports = deleteGoal;