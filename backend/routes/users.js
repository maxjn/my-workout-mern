const express = require("express");

const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userController");

// Login
router.post("/login", loginUser);

// Signin
router.post("/signup", signupUser);

module.exports = router;
