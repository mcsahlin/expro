import React from 'react';
import { Button, Container } from '../../core/design-system';
import { Main } from '../../core/components';
import { GoalForm } from './components/GoalForm/GoalForm';

// How to add roles to elements:
// <li
// 	key={goal.id}
// 	className='goal'
// 	onFocus={() => console.log('goal focused')}
// 	role='listitem'
// >
// 	<h2>{goal.name}</h2>
// 	<p>{goal.description}</p>
// 	<p>{goal.progress}</p>

// Best practices:
// - Use semantic HTML elements
// - Add roles to elements
// - Use the onFocus event handler
// - Use the onHover event handler
// - Use the onBlur event handler
// - Use the onScroll event handler
// Handle onFocus, onHover, onBlur, and onScroll events to improve accessibility and user experience.
// Example:
// <li
// 	key={goal.id}
// 	className='goal'
// 	onFocus={() => console.log('goal focused')}
// 	onHover={() => console.log('goal hovered')}
// 	onBlur={() => console.log('goal blurred')}
// 	onScroll={() => console.log('goal scrolled')}
// 	role='listitem'
// >
// 	<h2>{goal.name}</h2>
// 	<p>{goal.description}</p>
// 	<p>{goal.progress}</p>
// </li>

const Dashboard: React.FC = () => {
	let goals = [
		{
			id: 1,
			name: 'goal 1',
			description: 'goal 1 description',
			progress: 0,
		},
		{
			id: 2,
			name: 'goal 2',
			description: 'goal 2 description',
			progress: 0,
		},
		{
			id: 3,
			name: 'goal 3',
			description: 'goal 3 description',
			progress: 0,
		},
	];

	const form = {
		visible: false,
		fields: [
			{
				name: 'goalName',
				type: 'text',
				placeholder: 'Goal name',
			},
			{
				name: 'goalDescription',
				type: 'text',
				placeholder: 'Goal description',
			},
			{
				name: 'goalProgress',
				type: 'number',
				placeholder: 'Goal progress',
			},
		],
	};

	// handleNewGoal = () => {
	// 	// Show form
	// 	// Add new goal
	// 	// Hide form
	// };

	// handleEditGoal = () => {
	// 	// Show form
	// 	// Edit goal
	// 	// Hide form
	// };

	return (
		<Main>
			<GoalForm />
			<Container cl='col'>
				<h1>Dashboard</h1>
				<Container cl='row'>
					<Button
						id='edit_goal_btn'
						cl='btn btn--edit'
						onClick={() => console.log('editGoal clicked')}
						value={'Edit goal'}
					/>
					<Button
						id='newGoal-btn'
						cl='btn btn--primary'
						onClick={() => console.log('newGoal clicked')}
						value={'New goal'}
					/>
				</Container>
				<Container cl='col'>
					<ul>
						{goals.map((goal) => (
							<li
								key={goal.id}
								className='goal'
							>
								<h2>{goal.name}</h2>
								<p>{goal.description}</p>
								<p>{goal.progress}</p>
							</li>
						))}
					</ul>
				</Container>
			</Container>
		</Main>
	);
};

export default Dashboard;
