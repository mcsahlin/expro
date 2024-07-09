import React from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
	return (

		<form id="loginForm" >
			
				<h1>Create an account</h1>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' name='email' />

				<label htmlFor="username">Username</label>
				<input className="loginForm__field" type="text" id="username" name="username" />

				<label htmlFor='password'>Password</label>
				<input className="loginForm__field loginForm__field--pw" type='password' id='password' name='password' />
				
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input className="loginForm__field loginForm__field--pw" type="password" id="confirmPassword" name="confirmPassword" />

				<button className="loginForm__submit" type='submit'>Signup</button>
			<Link to='/login'>Already have an account? Login here!</Link>
		
			</form>
	);
};

export default Signup;
