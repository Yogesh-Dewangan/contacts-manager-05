const express = require("express");
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.use(express.json());

router.post(
  "/",
  body("password"),
  body("confirm_password"),
  body("email").isEmail(),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: "Failed",
          message: errors.array(),
        });
      }

      const { email, password, confirm_password } = req.body;

      if (password != confirm_password) {
        return res.status(400).json({
          status: "Failed",
          message: "Passwords do not match.",
        });
      }

      let repeatedEmail = await User.findOne({ email });

      if (repeatedEmail) {
        return res.status(400).json({
          status: "Registration unsuccessful",
          message: "User already exists",
        });
      }

      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }
        if (hash) {
          repeatedEmail = await User.create({
            email,
            password: hash,
          });

          return res.status(201).json({
            status: "Success",
            message: "User registered successfully, you Can Login Now",
          });
        }
      });
    } catch (e) {
      res.status(500).json({
        status: "failed",
        message: e.message,
      });
    }
  }
);

module.exports = router;
