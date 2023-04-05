import React, { useRef } from 'react';
import Intro from './components/Intro';
import Features from './components/Features';
import Product from './components/Product';
import Community from './components/Community';
import Loved from './components/Loved';
import Form from './components/Form';

const Home = () => {
	const ref = useRef(null);
	const handleClick = () => {
		ref.current?.scrollIntoView({behavior: 'smooth'});
	};
	return (
		<main className="main home">
			<Intro handleClick={handleClick} />
			<Features />
			<Product />
			<Community />
			<Loved />
			<div ref={ref}></div>
			<Form />
		</main>
	);
};

export default Home;
