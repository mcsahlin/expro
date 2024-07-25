import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../contexts/authContext.tsx";

interface User {

}
const Profile: React.FC = () => {
	const user = useContext(AuthContext);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch('/api/user', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},

				});
				const data = await response.json();
				console.log(data);
				if (response.ok) {
					setUser(data);
				}


			} catch (error) {
				console.error(error);
			}
		};
	}, []);



	return (
		<div>
			{ user ? (
				<div>
					<h1>Welcome {user.name}</h1>
					<p>{user.email}</p>
					<span>XP: {+user.xp}</span>
				</div>
			) : (
				<p>Loading...</p>
			)}



			<h1>Profile</h1>
		</div>

	);
};

export default Profile;
