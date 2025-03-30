const Hobby = require("../../models/Hobby");
const User = require("../../models/User");

const updateHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findById(req.params.id);
    if (!hobby) return res.status(404).json({ message: "Hobby not found" });

    hobby.name = req.body.name || hobby.name;
    hobby.description = req.body.description || hobby.description;
    
    const updatedHobby = await hobby.save();
    res.json(updatedHobby);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = updateHobby;
