const Hobby = require("../../models/Hobby");
const User = require("../../models/User");

const deleteHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndDelete(req.params.id);
    if (!hobby) return res.status(404).json({ message: "Hobby not found" });

    await User.findByIdAndUpdate(hobby.user, { $pull: { hobbies: hobby._id } });
    res.json({ message: "Hobby deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = deleteHobby;