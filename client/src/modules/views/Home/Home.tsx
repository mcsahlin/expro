import React from 'react';
import './Home.css';
import { Button } from '../common/Button';

const Home: React.FC = () => {
	return (
		<>
			<header></header>
			<nav id='navbar'>
				<div className='logo-container'>
					<img id='logo'></img>
				</div>
				<ul id='menu--primary'>
					<li></li>
				</ul>
				<Button />
			</nav>
			<section></section>
			<main></main>
			<footer></footer>
		</>
	);
};

export default Home;
