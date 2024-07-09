const User = require('../models/User');

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
  
  try {
    const newUser = new User({
      email,
      username,
      password,
    });
    await newUser.save()
      .then(() => {
        res.status(201).json({
          message: 'User created'
        });
      });
  }
  catch (err) {
    return res.status(500).json({
      message: 'An error occured while creating user',
    });
  } finally {
    await mongoose.connection.close();
  }
  
}

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

