import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './modules/layout';
import './App.css';

const App: React.FC = () => {
	const [loading, setLoading] = React.useState<

	return (

		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
