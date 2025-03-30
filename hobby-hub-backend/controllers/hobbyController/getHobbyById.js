const Hobby = require("../../models/Hobby");
const User = require("../../models/User");

const getHobbyById = async (req, res) => {
  try {
    const hobby = await Hobby.findById(req.params.id);
    if (!hobby) return res.status(404).json({ message: "Hobby not found" });
    res.json(hobby);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getHobbyById;