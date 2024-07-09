import React from 'react';
import './Main.scss';

interface MainProps {
	children: React.ReactNode;
	cls: string;
}

const Main: React.FC<MainProps> = ({ children, cls }) => {
	return (
		<main
			id='main' 
			className={'main main--' + cls} 
		>
			<div className='main__content'>
				{children}
			</div>
			
		</main>
	);
};


export default Main;
