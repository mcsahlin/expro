import React, { useContext, useEffect } from 'react';
import { LoginForm } from '../../modules';
import Main from '../../base/Main';
import { UserContext } from '../../contexts/userContext';

const Login = () => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const [username, setUsername] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');

	useEffect(() => {
		if (!loading) return;
		const { user, setUser } = useContext(UserContext);

		document.title = 'Login | Booldozer';
		setLoading(false);
	}, []);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
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
