import React from 'react';
import './Home.scss';
import { Button } from '../../common';

const Home: React.FC = () => {
	return (
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
			</div>
			<Button
				name={'hero-cta'}
				cName='btn--primary'
				onClick={() => console.log('CTA clicked')}
				value={'Get Started'}
			/>
		</section>
	);
};

export default Home;
