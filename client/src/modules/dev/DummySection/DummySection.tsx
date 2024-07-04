import React from 'react';
import './DummySection.scss';

const DummySection: React.FC = () => {
	return (
		<section
			id='dummy-section'
			className='dummy-section'
		>
			<h2 className='dummy-section__title'>Dummy Section</h2>
			<p className='dummy-section__content'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ut
				possimus excepturi facilis distinctio quia et reiciendis architecto
				culpa voluptatum in, debitis vitae adipisci voluptate provident at
				nostrum sint expedita.
			</p>
		</section>
	);
};

export default DummySection;
