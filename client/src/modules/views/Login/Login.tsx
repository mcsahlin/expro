import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { Main } from '../../layout';
import authService from '../../../ts/services/authService';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'email') setEmail(value);
		if (name === 'password') setPassword(value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await authService.login({ email, password });
			window.location.href = '/dashboard';
		} catch (err) {
			console.error('Failed to authorize user:', err);
		}

		// Reset form fields
		setEmail('');
		setPassword('');
	};

	return (
		<Main cls='login'>
			<form className="form" id="loginForm" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="form__row">
					<label htmlFor='email'>Email</label>
					<input
						className='form__field'
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={handleChange}
					/>
				</div>
				<div className="form__row">
					<label htmlFor='password'>Password</label>
					<input
						className="form__field form__field--pw"
						type='password'
						id='password'
						name='password'
						value={password}
						onChange={handleChange}
					/>
				</div>
				<button className="form__submit" type='submit'>Login</button>
				<Link to='/signup' className="form__link">Create an account</Link>
			</form>
		</Main>
	);
};

export default Login;
