import React from 'react';
import './Button.scss';

export interface ButtonProps {
	id: string;
	cl: string;
	name?: string;
	type?: 'button' | 'submit';
	value?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
	id,
	cl,
	name = '',
	type = 'button',
	value = '',
	onClick,
}) => (
	<button
		id={id}
		className={cl}
		name={name}
		type={type}
		onClick={onClick}
	>
		{value}
	</button>
);

export default Button;
