import React from 'react';
import './Button.scss';

interface Props {
	type: 'button' | 'submit' | 'reset';
	id: string;
	cls: string;
	name: string;
	value: string;
	onClick?: () => void;
	primary?: boolean;
}

const Button: React.FC<Props> = ({
	type = 'button',
	id = undefined,
	cls = '',
	name = '',
	value = '',
	onClick = () => {},
	primary = false,
}) => {
	return (
		<button
			type={type}
			id={id}
			className={cls + primary ? ' btn btn--primary' : ' btn btn--secondary'}
			name={name}
			onClick={onClick}
		>
			{value}
		</button>
	);
};

export default Button;
