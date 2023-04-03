import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';

const links = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', route: PUBLIC_ROUTES.about_us },
			{ name: 'In Press', route: PUBLIC_ROUTES.in_press }
		]
	},
	{
		name: 'Community'
	},
	{
		name: 'Contact',
		children: [
			{ name: 'Contact Us', route: PUBLIC_ROUTES.contact_us }
		]
	}
];

const social_links = [
	{
		icon: '',
		href: 'https://github.com'
	},
	{
		icon: '',
		href: 'https://github.com'
	},
	{
		icon: '',
		href: 'https://twitter.com'
	},
	{
		icon: '',
		href: 'https://linkendin.com'
	},
	{
		icon: '',
		href: 'https://youtube.com'
	},
];

const bottomLinks = [
	{
		name: 'Company',
		href: PUBLIC_ROUTES.company
	},
	{
		name: 'Contact',
		href: PUBLIC_ROUTES.contact
	},
	{
		name: 'Privacy policy',
		href: PUBLIC_ROUTES.privacy_policy
	},
	{
		name: 'Terms of Use',
		href: PUBLIC_ROUTES.terms_of_use
	}
];

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer__top">
						<Link className='footer__logo' href="/">
							<img alt="" src="" />
						</Link>
						<div className="footer-links">
							{links.map(({ name, children }) => {
								return (
									<>
										<div className="footer-links__label" key={name}>
											{name}
										</div>
										{children && 
										<ul>
											{children.map((child) => {
												return (
													<li className="header-links__item" key={child.name}>
														<Link to={child.route}>{child.name}</Link>
													</li>
												);
											})}
										</ul>
										}
									</>
								)
							})}
						</div>
					</div>
					<div className="footer__middle">
						<div class="footer__middle-left">
							<div class="footer__slogan">
								Be part of our <span>community</span> and connect with us
							</div>
							<Link className='footer__middle-logo' href="/">
								<img alt="" src="" />
							</Link>
						</div>
						<div class="footer__social">
							<div class="footer__social-label">
								Find us on:
							</div>
							<ul class="footer__social-items">
								{social_links.map((item) => {
									return (
										<li>
											<a href={item.href}>
												<img src={item.icon} />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="footer__bottom">
						<div className='footer__credits'>
							Copyright © 2023 Visual Layer, Inc. All rights reserved.
						</div>
						<ul class="footer__bottom-menu">
							{bottomLinks.map((item) => {
								return (
									<li>
										<a href={item.href}>
											{item.name}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
