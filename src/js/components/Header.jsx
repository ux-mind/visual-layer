import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';

const links = [
	{ name: 'HOME', route: PUBLIC_ROUTES.home },
	{ name: 'RELATED CHESS SITES', route: PUBLIC_ROUTES.sites },
	{ name: 'RELATED CHESS CHANNELS', route: PUBLIC_ROUTES.channels },
	{ name: 'POPULAR CHESS ACCOUNTS', route: PUBLIC_ROUTES.accounts },
	{ name: 'CHESS STORES', route: PUBLIC_ROUTES.stores }
];

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const menuOpen = () => {
		const html = document.documentElement;

		html.classList.add('.is-locked');

		setMenuOpened(true);
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<Link className='header__logo-wrap' href="/">
						<img alt="" src="" />
					</Link>
					<ul className="header-links">
						{links.map(({ name, route }) => (
							<li className="header-links__item" key={name}>
								<Link to={route}>{name}</Link>
							</li>
						))}
					</ul>
					<Link className="header__button-wrap" to='/'>
						<button className='header__button'>
							Request a demo
						</button>
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
