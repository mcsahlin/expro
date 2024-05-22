import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
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
			<label className='hamburger'>
				<input type='checkbox' />
				<svg viewBox='0 0 32 32'>
					<path
						className='line line-top-bottom'
						d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
					></path>
					<path
						className='line'
						d='M7 16 27 16'
					></path>
				</svg>

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
								type='button'
								id='signup-btn-lp'
								cls='btn btn--secondary'
								name='signup'
								onClick={() => console.log('Signup clicked')}
								value='Signup'
							/>
						</Link>
					</li>

					<li className='navbar__item'>
						{' '}
						<Link to='/login'>
							<Button
								type='button'
								id='login-btn-lp'
								name='login'
								cls='btn btn--primary'
								onClick={() => console.log('Login clicked')}
								value={'Login'}
							/>
						</Link>
					</li>
				</ul>
			</label>
		</nav>
	);
};

export default Navbar;
