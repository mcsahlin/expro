import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
	return (
		<>
			<section className='hero'>
				<button
					className='hero__cta'
					type='button'
					value='Join the fun'
				>
					<Link to='/login' />
				</button>
			</section>
		</>
	);
};

export default Home;
