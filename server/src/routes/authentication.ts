import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passwordHash from "../config/passwordHash";

// Get middleware

import authenticateUser from "./middleware/authenticateUser";
import validateBodyWith from "./middleware/validateBodyWidth";

// Data validators
const { loginValidator, registerValidator } = require("./validation");

// Load User model
const { User } = require("../models");

const router = express.Router();

// Get the currently authenticated user
router.post("/authenticated", authenticateUser, (req, res) => {

  res.json( req.user );

});

/**
 * Log in an existing user by signing and returning a secure JWT token
 * for the client application to store and include with requests.
 */
router.post("/login", validateBodyWith( loginValidator ), async (req, res) => {

  const { email, password } = req.body;

  try {

    const user =
      await User
        .findOne({ email });

    if (!user) {
      // User not found by email.
      return res.status(404).json({ default: "Email or password is invalid." });
    }

    const {
      password: encryptedPassword,
      // User object without the password
      ...secureUser
    } = user._doc;

    const isMatch = await bcrypt.compare( password, encryptedPassword );
    
    if( !isMatch ) {
      // User's password is invalid.
      return res.status(404).json({ default: "Email or password is invalid." });
    }

    const payload = {
      id: secureUser._id,
      email: secureUser.email
    };

    // Create a signed JWT token to send back to the client for reauthentication.
    const token = await jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      {
        expiresIn: 31556926 // 1 year in seconds
      }
    );

    return res.json({
      success: true,
      token: "Bearer " + token,
      user: secureUser
    })
  

  } catch( err ) {

    console.log(err);
    res.status(500).json({ default: "Something went wrong trying to log in." });

  }

});

/**
 * Creates a new user for authentication
 */
router.post("/register", validateBodyWith( registerValidator ), async (req, res) => {

  try {

    const { email, password } = req.body;


    const allUsers = await User.find({});

    for(let i=0; i<allUsers.length; i++) {
      console.log("a user: ", allUsers[i]);
    }

    const user = await User.findOne({ email });

    if (user) {
      // User already exists error.
      return res.status(400).json({ email: "Email already exists." });
    }

    const newUser = new User({
      ...req.body,
      password: await passwordHash( password )
    });

    await newUser.save();

    const {
      password: encryptedPassword,
      // User object without the password
      ...secureUser
    } = newUser._doc;

    res.json( secureUser );

  } catch( err ) {

    console.log(err);
    res.status(500).json({ default: "Something went wrong creating your account." });

  }

});

export default router;