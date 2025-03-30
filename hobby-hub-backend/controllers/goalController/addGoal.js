const Goal = require("../../models/Goals");
const User = require("../../models/User");

const addGoal = async (req, res) => {
  try {
    const { title, description, targetDate, hobbyId, xpRequired } = req.body;

    // Find the hobby to ensure it exists
    const hobby = await Hobby.findById(hobbyId);
    if (!hobby) {
      return res.status(404).json({ message: 'Hobby not found' });
    }

    // Create a new goal
    const goal = new Goal({
      title,
      description,
      targetDate,
      hobby: hobbyId, // Reference to the hobby
      xpRequired,
      user: req.user._id, // Assuming user is authenticated and we have access to user ID
    });

    await goal.save();

    // Add the goal to the user's goals array
    const user = await User.findById(req.user._id);
    user.goals.push(goal._id);
    await user.save();

    res.status(201).json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create goal' });
  }
};

module.exports = addGoal;