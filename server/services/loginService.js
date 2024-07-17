const User = require('../models/User');
const { comparePassword, getToken } = require("../utils/authUtility");

exports.loginService = async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			message: 'Email and password are required',
		});
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				message: 'User not found',
			});
		}

		const isValidPassword = await comparePassword(password, user.password);
		if (!isValidPassword) {
			return res.status(401).json({
				message: 'Invalid credentials',
			});
		}

		const token = getToken({ id: user._id });
		user.token = token;
		await user.save();

		res.setHeader('x-auth-token', token);
		return res.status(200).json({
			message: 'User logged in successfully',
			token,
		});
	} catch (err) {
		console.error('An error occurred while logging in', err);
		return res.status(500).json({
			message: 'An error occurred while logging in',
			err,
		});
	}
};