import React from 'react';
import './Main.scss';

interface MainProps {
	children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<main
			id='main'
			className='main'
		>
			{children}
		</main>
	);
};

export default Main;
