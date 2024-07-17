import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './modules/layout';
import './App.css';
import {UserProvider} from "./contexts/userContext.tsx";

const App: React.FC = () => {
	return (


		<div>
			<Navbar />
				<Outlet />
			<Footer />
		</div>

	);
};

export default App;

