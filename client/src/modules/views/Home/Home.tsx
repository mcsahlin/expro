import React from 'react';
import './Home.css';

const Home: React.FC = () => {
	return (
		<>
			<div className='p-4 max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md flex items-center space-x-4'>
				<div>
					<div className='text-xl font-medium text-black'>
						Welcome to Tailwind!
					</div>
					<p className='text-gray-500'>
						You're all set to start using Tailwind CSS in your React TypeScript
						project.
					</p>
				</div>
			</div>
		</>
	);
};

export default Home;
