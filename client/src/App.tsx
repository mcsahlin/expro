import { Outlet } from 'react-router'; // Import the Outlet component from the react-router package
import Header from './base/Header/Header';
import Footer from './base/Footer';
import './scss/main.scss'; // Import the main.scss file from the scss folder
import { UserProvider } from './contexts/userContext';

const App: React.FC = () => {
	return (
		<UserProvider>
			<Header />
			<Outlet />
			<Footer />
		</UserProvider>
	);
};

export default App;
