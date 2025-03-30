const express = require("express");
const router = express.Router();

const createHobby = require("../controllers/hobbyController/createHobby");
const getHobbies = require("../controllers/hobbyController/getHobbies");
const getHobbyById = require("../controllers/hobbyController/getHobbyById");
const updateHobby = require("../controllers/hobbyController/updateHobby");
const deleteHobby = require("../controllers/hobbyController/deleteHobby");

router.post("/", createHobby);
router.get("/", getHobbies);
router.get("/:id", getHobbyById);
router.put("/:id", updateHobby);
router.delete("/:id", deleteHobby);

module.exports = router;