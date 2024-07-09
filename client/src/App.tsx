import React from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Footer, Navbar } from './modules/layout';

const App: React.FC = () => {
	return (
		<>
			<Navbar />
				<Outlet />
			<Footer />
		</>
	);
};

export default App;
