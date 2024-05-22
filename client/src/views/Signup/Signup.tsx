import React, { useState } from 'react';
import { SignupForm } from '../../modules';
import axios from 'axios';
import Main from '../../base/Main';

const Signup: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const data = {
			email,
			username,
			password,
			confirmPassword,
		};
		axios
			.post('http://localhost:3001/signup', data)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Main>
			<SignupForm
				props={{
					email,
					setEmail,
					username,
					setUsername,
					password,
					setPassword,
					confirmPassword,
					setConfirmPassword,
					handleSubmit,
					handleChange,
				}}
			/>
		</Main>
	);
};

export default Signup;
