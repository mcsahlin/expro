import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { Main } from '../../layout';

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'email') setEmail(value);
		if (name === 'password') setPassword(value);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const response = fetch('http://localhost:8000/api/users', {})
		const form = document.getElementById('loginForm') as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		console.log(data);
	}
	return (
		<Main cls='login'>
			<form onSubmit={handleSubmit} className="form" id="loginForm" >
			<h1>Login</h1>
			<div className="form__row">

				<label htmlFor='email'>Email</label>
				<input className='form__field' type='email' id='email' name='email' value={email} onChange={handleChange}  />
			</div>

			<div className="form__row">
			
				<label htmlFor='password'>Password</label>
					<input className="form__field form__field--pw" type='password' id='password' name='password' value={password} onChange={handleChange} />
			</div>			
		
			
					<button className="form__submit" type='submit'>Login</button>
					<Link to='/signup' className="form__link">Create an account</Link>
		
			</form>
		</Main>
	);
};

export default Login;
