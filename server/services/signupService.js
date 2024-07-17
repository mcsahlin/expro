const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

exports.signupService = async (req, res, next) => {
	const { email, username, password } = req.body;
	console.log(req.body); // Data arrived at signupService
	const isMember = await User.findOne({ email: email });
	if (isMember) {
		return res.status(400).json({
			message: 'User already exists',
		});
	}
	try {
		const user = new User({
			username: username,
			email: email,
			password: password,
		});
		await user.save();

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});
		res.json({ token });
		this.login(req, res, next);
	} catch (err) {
		return res.status(500).json({
			message: 'An error occured while creating user',
			err,
		});
	}
	await mongoose.connection.close();
	next();
};
