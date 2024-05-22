import React from 'react';
import { Link } from 'react-router-dom';
import './style.module.scss';

const Footer: React.FC = () => {
	return (
		<footer
			id='footer'
			className='footer'
		>
			<div className='footer__div--social'>
				<Link to='/'>
					<i className='fab fa-facebook'></i>
				</Link>
				<Link to='/'>
					<i className='fab fa-twitter'></i>
				</Link>
				<Link to='/'>
					<i className='fab fa-instagram'></i>
				</Link>
			</div>
			<div className='footer__div--nav'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/signup'>Signup</Link>
				<Link to='/login'>Login</Link>
			</div>
			<div className='footer__div--contact'>
				<p>
					<i className='fas fa-phone'></i>
					<span>123-456-7890</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
