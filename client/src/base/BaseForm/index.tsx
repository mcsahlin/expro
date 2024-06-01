import React from 'react';
import { Form } from 'react-router-dom';
import './BaseForm.scss';

interface Props {
	id: string;
	method: 'get' | 'post' | 'put';
	action: string;
	children: React.ReactNode;
}

const BaseForm: React.FC<Props> = ({ children, id, action, method }) => {
	return (
		<Form
			method={method}
			action={action}
			id={id}
			className={'form ' + `form--${id}`}
		>
			{children}
		</Form>
	);
};

export default BaseForm;
