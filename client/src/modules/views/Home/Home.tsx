import React from 'react';
import './Home.scss';
import { Button } from '../../common';
import { Link } from 'react-router-dom';
import { Footer, Main } from '../../layout';
import { DummySection } from '../../dev/dev';

const Home: React.FC = () => {
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
						<Link
							to='/signup'
							children={
								<Button
									cName='btn btn--secondary'
									onClick={() => console.log('Signup clicked')}
									children={'Signup'}
								/>
							}
						/>
					</li>

					<li className='navbar__item'>
						{' '}
						<Button
							cName='btn btn--primary'
							onClick={() => console.log('Login clicked')}
							children={<Link to='login'>Login</Link>}
						/>
					</li>
				</ul>
			</nav>

			<section
				id='hero'
				className='hero'
			>
				<div className='hero__img-container'>
					<img
						src='https://images.unsplash.com/photo-1612838414607-9b5a2d4b4f7b'
						alt='hero'
						className='hero__img'
					/>
				</div>
				<div className='hero__content'>
					<h1 className='hero__title'>Welcome to booldozer</h1>
					<p className='hero__subtitle'>Your one stop for traction in life</p>
					<Button
						cName='btn--primary'
						onClick={() => console.log('CTA clicked')}
						children={'Join the fun'}
					/>
				</div>
			</section>

			<Main children={<DummySection />} />
			<Footer />
		</>
	);
};

export default Home;
