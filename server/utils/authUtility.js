const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT secret, expiration time and algorithm
const JWT_SECRET = process.env.JWT_SECRET || 'B001D0Z3R';
const JWT_EXPIRATION = '30m'; // 30 minutes
const JWT_ALGORITHM = 'HS256'; // HMAC SHA-256
const saltRounds = 10;

// Hash password and return it, async function because it takes time to hash
const hashPassword = async (password) => {
  return await bcryptjs.hash(password, saltRounds);
};

// Compare password with hash and return true if match or false if not
const comparePassword = async (password, hash) => {
  return await bcryptjs.compare(password, hash);
};

// Create JWT token and return it
const getJWT = (payload) => {
  const options = { expiresIn: JWT_EXPIRATION };
  return jwt.sign(payload, JWT_SECRET, options);
};

// Verify JWT token and return payload if successful or throw error if not
const verifyJWT = (token) => {
  try {
    const options = { algorithms: [JWT_ALGORITHM] }; // Only allow HS256 algorithm
    const decodedToken = jwt.verify(token, JWT_SECRET, options);
    return decodedToken;
  } catch (err) {
    console.error(err);
    throw new Error('Invalid token');
  }
};

// Decode JWT token and return payload
const decodeJWT = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};

module.exports = {
  hashPassword,
  comparePassword,
  getJWT,
  verifyJWT,
  decodeJWT
};