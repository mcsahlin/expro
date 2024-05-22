import React from 'react';
import Navbar from '../Navbar';
import './Header.scss';

const Header: React.FC = () => {
	return (
		<>
			{/**
			 * Header and Navbar components are separated to aid in accessibility.
			 * (Screen readers can navigate to the header and skip the navbar if needed.)
			 *
			 */}
			<header></header>
			<Navbar />
		</>
	);
};

export default Header;
