import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar: React.FC = () => {
	return (
		<>
			<header></header>

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
						<Link
							to='/about'
							className='navbar__link'
						>
							About
						</Link>
					</li>
					<li className='navbar__item'>
						<Link to='/signup'>Signup</Link>
					</li>

					<li className='navbar__item'>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
