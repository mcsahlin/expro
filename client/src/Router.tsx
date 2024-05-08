import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Profile } from './modules';
import { NotFound } from './modules';
import { Home } from './modules';
import { Login } from './modules';
import { Signup } from './modules';
import { ResetPassword } from './modules';
import { Dashboard } from './modules';
import { Goals } from './modules';
import { Goal } from './modules';
import { Challenges } from './modules';
import { Challenge } from './modules';
import { Friends } from './modules';
import { Tracker } from './modules';
import { Settings } from './modules';
import { Feed } from './modules';
import { Notifications } from './modules';

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
