const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = await User.findOne({ token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  }
  catch (e) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

const userLogin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const user = await User.findOne({ token });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();

  } catch (e) {
    next();
  }
};
