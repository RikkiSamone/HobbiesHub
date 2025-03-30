// controllers/hobby/createHobby.js
const Hobby = require("../../models/Hobby");
const User = require("../../models/User");

const createHobby = async (req, res) => {
  try {
    const { userId, name, description } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const hobby = new Hobby({ user: userId, name, description });
    await hobby.save();

    user.hobbies.push(hobby._id);
    await user.save();

    res.status(201).json(hobby);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createHobby;

