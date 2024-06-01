import React from 'react';
import { LoginForm } from '../../modules';
import Main from '../../base/Main';

const Login = () => {
	const [username, setUsername] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const data = {
			username,
			password,
		};
		console.log(data);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		switch (name) {
			case 'username':
				setUsername(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				break;
		}
	};

	return (
		<Main>
			<h1>Login</h1>;
			<LoginForm
				props={{
					username,
					password,
					setUsername,
					setPassword,
					handleSubmit,
					handleChange,
				}}
			/>
		</Main>
	);
};

export default Login;
