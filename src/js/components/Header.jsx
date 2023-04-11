import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';
import logo from '../../assets/images/logo.svg';
import logo_black from '../../assets/images/logo-black.svg';
import arrow_down from '../../assets/images/arrow-down.svg';
import mobile_arrow_down from '../../assets/images/mobile-arrow.svg';
import arrow_down_black from '../../assets/images/arrow-down-black.svg';
import burger from '../../assets/images/burger.svg';
import cross from '../../assets/images/cross.svg';
import burger_black from '../../assets/images/burger-black.svg';
import menu_icon_1 from '../../assets/images/menu-icon-1.svg';
import menu_icon_2 from '../../assets/images/menu-icon-2.svg';
import menu_icon_3 from '../../assets/images/menu-icon-3.svg';
import menu_icon_4 from '../../assets/images/menu-icon-4.svg';
import { useLocation } from 'react-router-dom';

const links = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', href: PUBLIC_ROUTES.about, icon: menu_icon_1 },
			{ name: 'In Press', href: PUBLIC_ROUTES.in_press, icon: menu_icon_2 }
		]
	},
	{
		name: 'Community',
		children: [
			{ name: 'Join GitHub Community', href: '#', icon: menu_icon_3 },
			{ name: 'Join Slack Community', href: '#', icon: menu_icon_4 }
		]
	},
	{
		name: 'Contact',
		href: 'mailto:info@visual-layer.com'
	}
];

const links_mobile = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', href: PUBLIC_ROUTES.about },
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
		name: 'Request a demo',
		href: PUBLIC_ROUTES.request_a_demo
	},
	{
		name: 'Contact',
		href: 'mailto:info@visual-layer.com'
	}
];

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const [updated, setUpdated] = useState(false);

	const menuOpen = () => {
		const html = document.documentElement;

		if (html.classList.contains('is-locked')) {
			html.classList.remove('is-locked');
		} else {
			html.classList.add('is-locked');
		}

		setMenuOpened(prevState => !prevState);
	};

	const handleClick = (e) => {
		e.preventDefault;
		e.target.parentElement.classList.toggle("submenu-opened");
	}

	useEffect(() => {
		setUpdated(prevState => !prevState);
	}, [useLocation().pathname]);

	const [onTop, setOnTop] = useState(true);
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () =>
				setOnTop(window.pageYOffset === 0)
			);
		}
	}, []);

	return (
		<>
			<header className={`header ${onTop ? 'header-top' : ''}`}>
				<div className="container">
					<div className={`header__content ${location.pathname === PUBLIC_ROUTES.about && onTop ? 'black-header' : ''}`}>
						<Link className='header__logo-wrap' to="/">
							<img alt="" src={location.pathname === PUBLIC_ROUTES.about && onTop ? logo_black : logo} />
						</Link>
						<ul className="header-links">
							{links.map(({ name, href, children }) => (
								<li className="header-links__item" key={name}>
									<Link to={href}>
										{name}
										{children ?
											<img alt="" src={location.pathname === PUBLIC_ROUTES.about && onTop ? arrow_down_black : arrow_down} />
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
														<img alt='' src={child.icon} />
														<div>{child.name}</div>
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
						<Link
						style={location.pathname === PUBLIC_ROUTES.request_a_demo ? {
							visibility: 'hidden'
						} : null}
						className="header__button-wrap"
						to={PUBLIC_ROUTES.request_a_demo}
						>
							<button className='header__button'>
								Request a demo
							</button>
						</Link>
						<img onClick={menuOpen} className="header__burger" alt="" src={location.pathname === PUBLIC_ROUTES.about ? burger_black : burger} />
					</div>
				</div>
				{menuOpened ?
				<div className='modal-menu'>
					<div className='container'>
						<div className='modal-menu__top'>
							<Link className='modal-menu__logo-wrap' to="/">
								<img alt="" src={logo} />
							</Link>
							<img onClick={menuOpen} className='modal-menu__cross' alt="" src={cross} />
						</div>
						<ul className='modal-menu__content'>
							{links_mobile.map((item) => {
								return <li key={item.name}>
									<a href={item.href} onClick={!item.href ? (e) => handleClick(e) : null}>
										{item.name}
										{item.children ?
										<img alt='' src={mobile_arrow_down} />
										: null}
									</a>
									{item.children ?
									<ul className='modal-menu__children'>
										{item.children.map((child) => {
											return (
												<li>
													<a href={child.href}>
														{child.name}
													</a>
												</li>	
											);
										})}
									</ul>
									: null}
								</li>;
							})}
						</ul>
					</div>
				</div>
				: null}
			</header>
		</>
	);
};

export default Header;
