import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { Main } from '../../layout';
import axios from 'axios';

const Signup: React.FC = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'email') setEmail(value);
		if (name === 'username') setUsername(value);
		if (name === 'password') setPassword(value);
		if (name === 'confirmPassword') setConfirmPassword(value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Signup form submitted');

		// Add form validation here
		if (!email || !username || !password || !confirmPassword) {
			console.error('All fields are required');
			return;
		}

		if (password !== confirmPassword) {
			console.error('Passwords do not match');
			return;
		}

		if (
			email &&
			username &&
			password &&
			confirmPassword &&
			password === confirmPassword
		) {
			const res = await axios.get('http://localhost:8000/api/auth/register', {
				params: {
					email,
					username,
					password,
				},
			});

			// Save token to local storage
			try {
				localStorage.setItem('token', res.data.token);
			} catch (err) {
				console.error('Error saving token to local storage', err);
			}
		}
	};

	return (
		<Main cls='signup'>
			<form
				id='auth-form'
				className='form'
			>
				<h1>New user</h1>
				<div className='form__row'>
					<label htmlFor='email'>Email</label>
					<input
						className='form__field'
						type='email'
						id='email'
						name='email'
						onChange={handleChange}
						value={email}
					/>
					<span className='error__email'>{email ? 'Invalid email' : ''}</span>
				</div>

				<div className='form__row'>
					<label htmlFor='username'>Username</label>
					<input
						className='form__field'
						type='text'
						id='username'
						name='username'
						onChange={handleChange}
						value={username}
					/>
					<span className='error__username'></span>
				</div>
				<div className='form__row'>
					<label htmlFor='password'>Password</label>
					<input
						className='form__field form__field--pw'
						type='password'
						id='password'
						name='password'
						onChange={handleChange}
						value={password}
					/>
					<span className='error__password'></span>
				</div>

				<div className='form__row'>
					<label htmlFor='confirmPassword'>Confirm Password</label>
					<input
						className='form__field form__field--pw'
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						onChange={handleChange}
						value={confirmPassword}
					/>
					<span className='error__confirmPassword'></span>
				</div>

				<div className='form__row'>
					<button
						className='form__submit'
						type='submit'
					>
						Signup
					</button>
				</div>
			</form>
			<Link to='/login'>Already have an account? Login here!</Link>
		</Main>
	);
};

export default Signup;
