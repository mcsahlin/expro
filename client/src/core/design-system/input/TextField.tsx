import React from 'react';

interface Props {
	id: string | undefined;
	cl: string;
	label: string;
	name: string;
	value: string;
	placeholder?: string;
}
const TextField: React.FC<Props> = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type='text'
				name={props.name}
				id={props.id ? props.id : undefined}
				className={props.cl}
				value={props.value}
				placeholder={props.placeholder ? props.placeholder : undefined}
			/>
		</>
	);
};

export default TextField;
