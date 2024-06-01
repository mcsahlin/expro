import React from 'react';
import BaseForm from '../../../base/BaseForm';
import Button from '../../../base/Button';
import Input from '../../../base/Input';
interface Props {
	props: any;
}

const LoginForm: React.FC<Props> = ({ props }) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Login form submitted');
	};

	return (
		<BaseForm
			method='POST'
			cls='login'
			id='login-form'
			onSubmit={() => handleSubmit}
		>
			<Input
				name='username'
				type='text'
				id='username'
				label='Username'
				cls='signup__uid'
				value={props.username}
				onChange={props.handleChange}
				required
			/>

			<Input
				name='password'
				type='password'
				cls='signup__password'
				id='signup__password'
				label='Password'
				value={props.password}
				onChange={props.handleChange}
				required
			/>

			<Button
				name={'signup-submit'}
				type={'submit'}
				id={'signup-submit'}
				cls='signup__submit btn--primary'
				value={'Confirm'}
			/>
		</BaseForm>
	);
};

export default LoginForm;
