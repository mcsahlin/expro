import React from 'react';
const Login: React.FC = () => {
	return (
		<>
			<h1></h1>
			<form>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />

				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' />

				<button type='submit'>Login</button>
			</form>
		</>
	);
};

export default Login;
