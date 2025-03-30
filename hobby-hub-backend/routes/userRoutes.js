const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/userController/registerUser");
const loginUser = require("../controllers/userController/loginUser");
const toggleXp = require("../controllers/userController/toggleXp");
const updateUserProfile = require("../controllers/userController/updateUser");
const deleteUser = require("../controllers/userController/deleteUser")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:id/toggle-xp", toggleXp);
router.put("/:id", updateUserProfile);
router.delete("/:id", deleteUser);

module.exports = router;
