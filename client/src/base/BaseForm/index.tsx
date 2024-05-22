import React from 'react';
import { Form } from 'react-router-dom';
import './BaseForm.scss';

interface Props {
	cls: string;
	method: any;
	children: any;
	onSubmit?: () => any;
}

const BaseForm: React.FC<Props> = ({ children, onSubmit, cls, method }) => {
	return (
		<Form
			method={method}
			id='form'
			className={'form ' + `form--${cls}`}
			{...(onSubmit && { onSubmit })}
		>
			{children}
		</Form>
	);
};

export default BaseForm;
