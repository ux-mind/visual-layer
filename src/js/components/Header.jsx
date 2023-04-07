import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';
import logo from '../../assets/images/logo.svg';
import arrow_down from '../../assets/images/arrow-down.svg';
import burger from '../../assets/images/burger.svg';
import { useLocation } from 'react-router-dom';

const links = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', href: PUBLIC_ROUTES.about_us },
			{ name: 'In Press', href: PUBLIC_ROUTES.in_press }
		]
	},
	{
		name: 'Community',
		children: [
			{ name: 'Join GitHub Community', href: '#' },
			{ name: 'Join Slack Community', href: '#' }
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

	const location = useLocation();

	const onMouseEnter = () => {

	}

	return (
		<>
			<header className="header">
				<div className="container">
					<div className='header__content'>
						<Link className='header__logo-wrap' to="/">
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
									{children ? 
										<>
										<div className='header-links__connect'>
										</div>
										<div className='header-links__dropdown'>
											{children.map((child) => {
												return (
													<Link key={child.name} to={child.href}>
														{child.name}
													</Link>
												);
											})}
										</div>
										</>
										: null
									}
								</li>
							))}
						</ul>
						{location.pathname !== PUBLIC_ROUTES.request_a_demo ?
						<Link className="header__button-wrap" to={PUBLIC_ROUTES.request_a_demo}>
							<button className='header__button'>
								Request a demo
							</button>
						</Link>
						: null}
						<img className="header__burger" alt="" src={burger} />
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
