const { signupService } = require('./signupService');
const { loginService } = require('./loginService');

const handleSignup = async (req, res, next) => {
	await signupService(req, res, next);
}

const handleLogin = async (req, res) => {
	await loginService(req, res);
}

module.exports = {
	handleSignup,
	handleLogin,
}