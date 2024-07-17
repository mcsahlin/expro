const User = require('../models/User');
const mongoose = require('mongoose');
const utilize = require('../utils/authUtility');
const service = require('../services/userService');

//::: GET ALL USERS ::: GET /api/users
 const getUsers = async (req, res) => {
  try {
    const users = await User.find(undefined, undefined, undefined);
    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching users',
    });
  }
};

//::: SIGNUP ::: POST /api/users/register
const signup = async (req, res) => {
  const { email, username, password } = req.body;
  await utilize.hashPassword(password);
  const data = { email, username, password };




  service.register({data}, err => {
    if (err) {
      return res.status(500).json({
        message: 'Error hashing password', err
      });
    }


    res.status(201).json({
      message: 'Successfully registered user'
    });

  });
};

//::: LOGIN ::: POST /api/users/login
const getUser = async (req, res, next) => {
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
const updateUser = async (req, res, next) => {
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
const deleteUser = async (req, res, next) => {
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

module.exports = {
    getUsers,
    signup,
    getUser,
    updateUser,
    deleteUser
}