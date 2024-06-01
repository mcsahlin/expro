import React from 'react';
import BaseForm from '../../../base/BaseForm';
import Input from '../../../base/Input';
import Button from '../../../base/Button';

interface Props {
	props: any;
}

const SignupForm: React.FC<Props> = ({ props }) => {
	return (
		<BaseForm
			method='POST'
			cls='signup'
			id='signup-form'
		>
			<h2 className='signup__title'>Sign Up</h2>
			<Input
				name='email'
				type='email'
				id='signup__email'
				cls='signup__email'
				label='Email'
				value={props.email}
				onChange={props.handleChange}
				required
			/>
			<Input
				name='username'
				type='text'
				id='signup__uid'
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
			<Input
				id='confirm-password'
				cls='signup__confirm-password'
				label='Confirm Password'
				type='password'
				name='confirmPassword'
				value={props.confirmPassword}
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

export default SignupForm;
