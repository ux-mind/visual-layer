import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RequestADemo from './pages/RequestADemo';
import About from './pages/About';
import PUBLIC_ROUTES from './data/publicRoutes';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={PUBLIC_ROUTES.home} element={<Home />} />
					<Route path={PUBLIC_ROUTES.request_a_demo} element={<RequestADemo />} />
					<Route path={PUBLIC_ROUTES.about} element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
