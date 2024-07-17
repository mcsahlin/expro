const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT secret, expiration time, algorithm and bcrypt salt rounds
const JWT_SECRET = process.env.JWT_SECRET || 'B001D0Z3R';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '5m';
const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'HS256';
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

// Hash password and return it, async function because it takes time to hash
const hashPassword = async (password) => {
  return await bcryptjs.hash(password, SALT_ROUNDS);
};

// Compare password with hash and return true if match or false if not
const comparePassword = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

// Create JWT token and return it
const getToken = (payload) => {
  const options = { expiresIn: JWT_EXPIRATION, algorithm: JWT_ALGORITHM };
  return jwt.sign(payload, JWT_SECRET, options);
};

// Verify JWT token and return payload if successful or throw error if not
const verifyJWT = async (token) => {
  try {
    const options = { algorithms: [JWT_ALGORITHM] }; // Define options with the algorithm
    return jwt.verify(token, JWT_SECRET, options); // Directly return the result of jwt.verify
  } catch (err) {
    console.error(err);
    throw new Error('Invalid token');
  }
};

// Decode JWT token and return payload
const decodeJWT = (token) => {
  return jwt.decode(token);
};

module.exports = {
  hashPassword,
  comparePassword,
  getToken,
  verifyJWT,
  decodeJWT
};