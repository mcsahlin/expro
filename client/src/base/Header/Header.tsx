import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import './Header.scss';
import { UserContext } from '../../contexts/userContext';
import App from '../../App';

const Header: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [online, setOnline] = useState(false);

	const user = useContext(UserContext).user;

	useEffect(() => {
		if (!loading) return;

		if (user) {
			setOnline(true);
			console.log(`User is online`);
		}

		setLoading(false);
	}, []);

	return (
		<>
			{/**
			 * Header and Navbar components are separated to aid in accessibility.
			 * (Screen readers can navigate to the header and skip the navbar if needed.)
			 *
			 */}
			<header></header>
			{online && (
				<div>
					<nav
						id='main-navigation'
						className='navbar navbar--app'
						aria-label='Main Navigation'
					></nav>
				</div>
			)}
			<Navbar />
		</>
	);
};

export default Header;
