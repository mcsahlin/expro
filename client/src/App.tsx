import { Outlet } from 'react-router'; // Import the Outlet component from the react-router package
import './App.css';

const App: React.FC = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default App;
