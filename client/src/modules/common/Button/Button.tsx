import React from 'react';
import './Button.scss';

export interface ButtonProps {
	name?: string;
	cName: string;
	type?: 'button' | 'submit' | 'reset';
	value?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	name = '',
	cName = '',
	type = 'button',
	value = '',
	onClick,
}) => (
	<button
		name={name}
		className={'btn' + cName}
		type={type}
		onClick={onClick}
	>
		{value}
	</button>
);

export default Button;
