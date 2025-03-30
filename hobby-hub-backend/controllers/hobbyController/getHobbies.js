const Hobby = require("../../models/Hobby");
const User = require("../../models/User");

const getHobbies = async (req, res) => {
  try {
    const hobbies = await Hobby.find({ user: req.params.userId });
    res.json(hobbies);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getHobbies;