import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';
import { Main } from '../layout';
import AuthContext from '../../core/contexts/authContext';
const Signup: React.FC = () => {
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	});
	const { email, username, password, confirmPassword } = formData;

	const authContext = useContext(AuthContext);
	if (!authContext) {
		throw new Error('Auth context not found');
	}
	const { register } = authContext;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			setFormData({ ...formData, password: '', confirmPassword: '' });
			return;
		}
		register({ email, username, password });

		// const data: {} = {
		// 	email: email,
		// 	username: username,
		// 	password: password,
		// };
		// const authUrl = 'http://localhost:8000/api/auth';
		// const res: Response = await fetch(authUrl, {
		// 	method: 'POST',
		// 	mode: 'cors',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(data),
		// });

		// console.log(res.json());
	};

	return (
		<Main cls='signup'>
			<form
				id='auth-form'
				className='form'
				onSubmit={handleSubmit}
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
