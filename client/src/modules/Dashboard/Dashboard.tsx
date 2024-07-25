import React, { useContext } from 'react';
import {AuthContext} from '../../contexts/authContext.tsx';

const Dashboard: React.FC = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<h1>Dashboard</h1>
			<h2>Welcome, {user?.username}</h2>
		</div>
	);
}
export default Dashboard;
