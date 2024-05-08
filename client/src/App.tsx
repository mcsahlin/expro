import { Outlet } from 'react-router'; // Import the Outlet component from the react-router package
import './App.css';
import Header from './modules/layout/Header';
import Main from './modules/layout/Main';
import Footer from './modules/layout/Footer';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default App;
