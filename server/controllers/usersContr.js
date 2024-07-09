const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: 'Users fetched successfully',
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while fetching users',
    });
  }
};


exports.signupUser = async (req, res, next) => {
  const { email, username, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).json({
      message: 'User already exists',
    });
  }

  // Create new user
  
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).json({
      message: 'An error occured while hashing password', err
    });
  }



  const newUser = new User({
    email,
    username,
    password: hashedPassword,
  });
    
  try {
    await newUser.save().then(() => {
      res.status(201).json({
        message: 'User created', newUser
      });
    }
      
    );
  } catch (err) {
    return res.status(500).json({
      message: 'An error occured while creating user',
    });
  }

    await mongoose.connection.close();

    next();

  
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      message: 'Invalid credentials',
    });
  }

  // Check if password is correct
  let isMatch;
  try {
    isMatch = await bcrypt.compare(password, user.password);
  } catch (err) {
    const error = new ('An error occured while comparing passwords');
    next(err);
  }

  if (!isMatch) {
    return res.status(404).json({
      message: 'Invalid credentials',
    });
  }

  // Generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  User.findOneAndUpdate({
    email: email
  }, {
    token: token
  }, {
    new: true
  }).then(() => {
    res.status(200).json({
      message: 'User logged in',
      token
    });
  });
};




exports.getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json({
      message: 'User fetched successfully',
      user,
    });
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    return res.status(500).json({
      message: 'An error occured while fetching user',
    });
  }
}

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { email, username, password } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate({ _id: id }, { email, username, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    } 
    res.status(200).json({
      message: 'User updated successfully',
      updatedUser,
    });
    
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while updating user',
    });
  }
}


    

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (err) {
    
    return res.status(500).json({
      message: 'An error occured while deleting user',
    });
  }
}

