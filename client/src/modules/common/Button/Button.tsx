import React from 'react';
import './Button.scss';

export interface ButtonProps {
	cName: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	cName = '',
	type = 'button',
	onClick,
	children,
}) => (
	<button
		type={type}
		className={'btn' + cName}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
