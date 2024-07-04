import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import './Navbar.scss';

const Navbar: React.FC = () => {
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
						to='/about'
						className='navbar__link'
					>
						About
					</Link>
				</li>
				<li className='navbar__item'>
					{' '}
					<Link to='/signup'>
						<Button
							name='signup'
							cName='btn btn--secondary'
							onClick={() => console.log('Signup clicked')}
							value='Signup'
						/>
					</Link>
				</li>

				<li className='navbar__item'>
					{' '}
					<Button
						name='login'
						cName='btn btn--primary'
						onClick={() => console.log('Login clicked')}
						value={'Login'}
					/>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
