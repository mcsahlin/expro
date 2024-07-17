const jwt = require('jsonwebtoken'); // Import jsonwebtoken
const dotenv = require('dotenv'); // Import dotenv
dotenv.config(); // Load .env file

module.exports = (req, res, next) => {
	// auth middleware module
	const token = req.header('x-auth-token'); // Get token from header
	if (!token) {
		// If no token
		return res.status(401).json({ msg: 'No token, authorization failed' });
	} else {
		// If token
		try {
			// Try
			const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
			req.user = decoded.user; // Set user to decoded user
			next(); // Next middleware
		} catch (err) {
			// If error
			res.status(401).json({ msg: 'Invalid token, authorization failed' });
		}
	}
};

// import * as util from '../utils/auth';

// // Middleware to check if user is logged in
// exports.authorizeUser = (req, res, next) => {
// 	const token = req.headers.authorization;
// 	try {
// 		if (token && util.verifyJWT(token)) {
// 			const tokenData = util.decodeJWT(token);
// 			req.user = tokenData;
// 			req.user.isLoggedIn = true;
// 			console.log('User logged in');
// 		} else {
// 			req.user = { isLoggedIn: false };
// 			console.log('User not logged in, or invalid token');
// 		}
// 	} catch (err) {
// 		console.error(err.statusText);
// 		req.user = { isLoggedIn: false };
// 		console.log('User not logged in, or invalid token');
// 	}
// 	next();
// };

// // Middleware to force user to be logged in
// exports.forceAuthorize = (req, res,	next) => {
// 	if (req.user.isLoggedIn) {
// 		console.log('User logged in');
// 		next();
// 	} else {
// 		res.sendStatus(401);
// 		console.log('User not logged in');
// 	}
// };
