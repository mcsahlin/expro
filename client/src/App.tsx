import React from 'react';
import { Outlet } from 'react-router';
import './App.css';
import { Footer, Navbar } from './core/components';

const App = () => {
	return (
		<div id='app'>
			hej
			<header></header>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
