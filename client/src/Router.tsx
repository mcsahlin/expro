import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
	Home,
	Profile,
	Settings,
	Login,
	Signup,
	ResetPassword,
	Dashboard,
	Goals,
	Goal,
	Challenges,
	Challenge,
	Friends,
	Tracker,
	Feed,
	Notifications,
	NotFound,
} from './modules';
import {useContext} from "react";
import {AuthContext} from "./contexts/authContext.tsx";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
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
				path: '/dashboard',
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
