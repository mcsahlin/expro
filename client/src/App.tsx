import React from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Footer, Main, Navbar } from './modules/layout';

const App: React.FC = () => {
	return (
		<>
			<header></header>
			<Navbar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default App;
