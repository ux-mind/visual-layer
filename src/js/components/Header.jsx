import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';
import logo from '../../assets/images/logo.svg';
import arrow_down from '../../assets/images/arrow-down.svg';

const links = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', route: PUBLIC_ROUTES.about_us },
			{ name: 'In Press', route: PUBLIC_ROUTES.in_press }
		]
	},
	{
		name: 'Community',
		children: [
			{ name: 'Join GitHub Community', route: '#' },
			{ name: 'Join Slack Community', route: '#' }
		]
	},
	{
		name: 'Contact',
		href: PUBLIC_ROUTES.contact_us
	}
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
					<div className='header__content'>
						<Link className='header__logo-wrap' href="/">
							<img alt="" src={logo} />
						</Link>
						<ul className="header-links">
							{links.map(({ name, href, children }) => (
								<li className="header-links__item" key={name}>
									<Link to={href}>
										{name}
										{children ?
											<img alt="" src={arrow_down} />
											: null
										}
									</Link>
								</li>
							))}
						</ul>
						<Link className="header__button-wrap" to='/'>
							<button className='header__button'>
								Request a demo
							</button>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
