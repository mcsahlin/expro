import React from 'react';
import './style.module.scss';

interface InputProps {
	id: string;
	type: string;
	cls: string;
	label: string;
	name: string;
	value?: string;
	onChange?: () => {};
	validate?: () => {};
	required?: boolean;
}

const Input: React.FC<InputProps> = ({
	type,
	name,
	cls,
	id,
	label,
	value,
	onChange,
	required,
	validate,
}) => {
	return (
		<>
			<label
				htmlFor={id}
				className='label sr-only'
			>
				{label}
				{required ? <span>*</span> : null}
			</label>
			<input
				id={id}
				className={`input ${cls}`}
				type={type}
				placeholder={label}
				name={name}
				value={value}
				{...(validate && { validate })}
				{...(required && { required: true })}
				{...(onChange && { onChange })}
			/>
		</>
	);
};

export default Input;
