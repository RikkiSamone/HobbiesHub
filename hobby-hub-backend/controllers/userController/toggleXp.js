const User = require("../../models/User");
const toggleXp = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.xpEnabled = !user.xpEnabled;
    await user.save();
    res.json({ message: `XP tracking ${user.xpEnabled ? "enabled" : "disabled"}` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = toggleXp;