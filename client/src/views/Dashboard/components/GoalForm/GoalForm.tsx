import React, { useState } from 'react';
import { TextField } from '../../../../core';

export const GoalForm: React.FC = () => {
	const [gName, setGName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [progress, setProgress] = useState<number>(NaN);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		switch (e.target.name) {
			case 'title':
				setGName(e.target.value);
				break;
			case 'description':
				setDescription(e.target.value);
				break;
			case 'progress':
				setProgress(+e.target.value);
				break;
			default:
				break;
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label='Affirm your goal'
				name='gName'
				value={gName}
				{...{
					id: 'affirmation',
					cl: 'input',
					placeholder: 'Affirmation',
					onChange: handleChange,
				}}
			/>
			<input
				type='text'
				name='description'
				value={description}
			/>
			<input
				type='number'
				name='progress'
				value={progress}
			/>
			<button type='submit'>Add goal</button>
		</form>
	);
};
