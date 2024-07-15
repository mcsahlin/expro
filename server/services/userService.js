const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

//:: Register user
exports.register = async (req, res, next) => {
  const regUser = { email, username, hashedPassword } = req.body;
  const isMember = await User.findOne({ email: email }); 
  if (isMember) { 
    return res.status(400).json({
      message: 'User already exists',
    });
  } 
  try { 
    const newUser = new User(regUser); 
    await newUser.save() 
      .then(() => res.status(201).json({ 
        message: 'User created', newUser 
      })); 
  } catch (err) { return res.status(500).json({ 
    message: 'An error occured while creating user', err }); 
  } await mongoose.connection.close(); 
  next();
};
//______ LOGIN _______\\
exports.login = async (req, res, next) => {
  const { email, password } = req.body;


  const user = await User.findOne({ email: email }); // Check if user exists  
  if (!user) { // If user does not exist
    return res.status(404).json({ // Return 404
      message: 'Invalid credentials', 
    });
  }

  let isValidPassword = false; // Check if password is valid
  try { // Try to compare password
    isValidPassword = await bcrypt.compare(password, user.password);  
  } catch (err) { // If error
    return res.status(500).json({ // Return 500
      message: 'An error occured while checking password', err
    });
  }

  if (!isValidPassword) { // If password is not valid
    return res.status(404).json({ // Return 404
      message: 'Invalid credentials', 
    });
  }

  try {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {   expiresIn: '1h' });  // Update token in database
    User.updateOne({ email: email }, { token: token }).then(() => { // Return token
      res.setHeader('Authorization', token); // Set token in header
      res.status(200).json({ // Return 200
        message: 'User logged in', token
      }); 
      mongoose.connection.close(); // Close connection
      next(); // Call next middleware
    });
  } catch (err) { // If error
    return res.status(500).json({ // Return 500
      message: 'An error occured while logging in', err
    });
  };
};

