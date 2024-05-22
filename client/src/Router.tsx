import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import Profile from './views/Profile';
import Settings from './views/Settings';
import Login from './views/Login';
import Signup from './views/Signup';
import ResetPassword from './views/ResetPassword';
import Dashboard from './views/Dashboard';
import Goals from './views/Goals';
import Goal from './views/Goal';
import Challenges from './views/Challenges';
import Challenge from './views/Challenge';
import Friends from './views/Friends';
import Tracker from './views/Tracker';
import Feed from './views/Feed';
import Notifications from './views/Notifications';
import NotFound from './views/NotFound';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
				index: true,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
			{
				path: '/reset-password',
				element: <ResetPassword />,
			},

			{
				path: '/dashboard/:id',
				element: <Dashboard />,
			},
			{
				path: '/goals',
				element: <Goals />,
			},
			{
				path: '/goals/:id',
				element: <Goal />,
			},
			{
				path: '/challenges',
				element: <Challenges />,
			},
			{
				path: '/challenges/:id',
				element: <Challenge />,
			},
			{
				path: '/friends',
				element: <Friends />,
			},
			{
				path: '/friends/:id',
				element: <Profile />,
			},
			{
				path: '/tracker',
				element: <Tracker />,
			},
			{
				path: '/feed',
				element: <Feed />,
			},
			{
				path: '/notifications',
				element: <Notifications />,
			},
		],
	},
]);
