import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { Main } from '../../layout';



const Signup: React.FC = () => {

	

	return (
		<Main cls='signup'>
		<form id="auth-form" className="form"> 

			
	
			<h1>New user</h1>
			<div className="form__row">
			<label htmlFor='email'>Email</label>
				<input className="form__field" type='email' id='email' name='email'
				/>

				</div>
				
				<div className="form__row">
			<label htmlFor="username">Username</label>
			<input className="form__field" type="text" id="username" name="username" />
				</div>
			<div className="form__row">
			<label htmlFor='password'>Password</label>
			<input className="form__field form__field--pw" type='password' id='password' name='password' />
				</div>
				
			<div className="form__row">
			<label htmlFor="confirmPassword">Confirm Password</label>
			<input className="form__field form__field--pw" type="password" id="confirmPassword" name="confirmPassword" />
				</div>

				<div className="form__row">
			<button className="form__submit" type='submit'>Signup</button>
				</div>
			</form>
			<Link to='/login'>Already have an account? Login here!</Link>
			
		</Main>
	);
}


export default Signup;
