import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './modules/layout';
import './App.css';
import { AuthProvider } from './core/contexts/authContext';

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Navbar />
			<Outlet />
			<Footer />
		</AuthProvider>
	);
};

export default App;
