import { Outlet } from 'react-router'; // Import the Outlet component from the react-router package
import './App.css';
import { Footer, Main, Navbar } from './modules/layout';

const App: React.FC = () => {
	return (
		<>
			{/**
			 * Header and Navbar components are separated to aid in accessibility.
			 * (Screen readers can navigate to the header and skip the navbar if needed.)
			 *
			 */}
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
