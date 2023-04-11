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
	const handleScroll = (e) => {
		console.log('scroll')
		if(e.currentTarget.scrollTop === 0) {
			setOnTop(true);
			console.log(true)
		} else {
			setOnTop(false);
			console.log(false)
		}
	};
	return (
		<main className="main home" onScroll={handleScroll}>
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
