const User = require('../models/User');
const mongoose = require('mongoose');
const utilize = require('../utils/authUtility');
const service = require('../services/userService');

//::: GET ALL USERS ::: GET /api/users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      User_count: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while fetching users',
    });
  }
  await mongoose.connection.close();
};

//::: SIGNUP ::: POST /api/users/register
exports.signup = async (req, res) => {
  const data = { email, username, password } = req.body;
  const hashedPassword = await utilize.hashPassword(password);
  data.password = hashedPassword;
  

  service.register(data, err => {
    if (err) {
      return res.status(500).json({
        message: 'Error hashing password', err
      });
    };


    res.status(201).json({
      message: 'Successfully registered user'
    });

  });
 mongoose.connection && await mongoose.connection.close();
  next();
};

//::: LOGIN ::: POST /api/users/login
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
  await mongoose.connection.close();
  next();
}

//::: UPDATE USER ::: PUT /api/users/:id
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
  await mongoose.connection.close();
  next();
}

//::: DELETE USER ::: DELETE /api/users/:id
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
   await mongoose.connection.close();
  next();
}

