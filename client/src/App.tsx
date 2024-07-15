import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './modules/layout';
import './App.css';

const App: React.FC = () => {
	return (

		// Add HOS layout components here

		<div>
			<Navbar />
				<Outlet />
			<Footer />
		</div>
	);
};

export default App;

