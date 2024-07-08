import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../design-system';
import './Navbar.scss';
import axios from 'axios';

const Navbar: React.FC = () => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault(); // Optional: Prevent default behavior

		axios.get('/api/login').then((response) => {
			console.log(response);
		});

		console.log('Button clicked! Event: ', event);
	};

	return (
		<nav
			id='navbar'
			className='navbar'
		>
			<div className='navbar__logo-container'>
				<span className='navbar__logo'>
					<Link to='/'>booldozer</Link>
				</span>
			</div>
			{/* //? MENU */}
			<ul className='navbar__menu'>
				<li className='navbar__item'>
					<Link
						to='/'
						className='navbar__link'
					>
						Home
					</Link>
				</li>

				<li className='navbar__item'>
					{' '}
					<Link
						to='/dashboard'
						className='navbar__link'
					>
						Dashboard
					</Link>
				</li>
				<li className='navbar__item'>
					{' '}
					<Link to='/signup'>
						<Button
							id='signup-btn'
							name='signup'
							cl='btn btn--secondary'
							onClick={() => console.log('Signup clicked')}
							value='Signup'
						/>
					</Link>
				</li>

				<li className='navbar__item'>
					{' '}
					<Button
						id='login-btn'
						name='login'
						cl='btn btn--primary'
						onClick={handleClick}
						value={'Login'}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
