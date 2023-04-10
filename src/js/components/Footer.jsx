import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';
import logo from '../../assets/images/logo.svg';
import logo_2 from '../../assets/images/footer-logo-2.svg';
import footer_social_1 from '../../assets/images/footer-social-1.svg';
import footer_social_2 from '../../assets/images/footer-social-2.svg';
import footer_social_3 from '../../assets/images/footer-social-3.svg';
import footer_social_4 from '../../assets/images/footer-social-4.svg';
import footer_social_5 from '../../assets/images/footer-social-5.svg';

const links = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', route: PUBLIC_ROUTES.about_us },
			{ name: 'In Press', route: PUBLIC_ROUTES.in_press }
		]
	},
	{
		name: 'Contact',
		children: [
			{ name: 'Contact Us', route: PUBLIC_ROUTES.contact_us }
		]
	}
];

const links_mobile = [
	{
		name: 'Company',
		children: [
			{ name: 'About Us', route: PUBLIC_ROUTES.about_us },
			{ name: 'In Press', route: PUBLIC_ROUTES.in_press }
		]
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
		icon: footer_social_1,
		href: 'https://github.com/visual-layer/fastdup'
	},
	{
		icon: footer_social_2,
		href: 'https://visualdatabase.slack.com/join/shared_invite/zt-19jaydbjn-lNDEDkgvSI1QwbTXSY6dlA#/shared-invite/email'
	},
	{
		icon: footer_social_3,
		href: 'https://twitter.com/visual_layer'
	},
	{
		icon: footer_social_4,
		href: 'https://il.linkedin.com/company/visual-layer'
	},
	{
		icon: footer_social_5,
		href: 'https://www.youtube.com/@visual-layer4035/featured'
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
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<Link className='footer__logo' href="/">
						<img alt="" src={logo} />
						<div className='footer__logo-text'>
							Simplifying Visual Data
						</div>
					</Link>
					<div className="footer-links">
						{links.map(({ name, children }) => {
							return (
								<div key={name} className='footer-links__wrap'>
									<div className="footer-links__label">
										{name}
									</div>
									{children && 
									<ul>
										{children.map((child) => {
											return (
												<li key={child.name} className="footer-links__item">
													<Link to={child.route}>{child.name}</Link>
												</li>
											);
										})}
									</ul>
									}
								</div>
							)
						})}
					</div>
					<div className="footer__middle-left">
						<div className="footer__slogan">
							Be part of our social <span>community</span> and connect with us
						</div>
						<div className='footer__middle-wrap'>
							<Link className='footer__middle-logo' href="/">
								<img alt="" src={logo_2} />
							</Link>
							<ul className="footer__social-items">
								{social_links.map((item, i) => {
									return (
										<li key={'footer-social-' + i}>
											<a href={item.href}>
												<img src={item.icon} />
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className="footer-links-mobile">
						{links_mobile.map((item) => {
							return (
								<div key={item.name} className='footer-links__wrap'>
									<div className="footer-links__label">
										{item.name}
									</div>
									{item.name_2 ? 
									<div className="footer-links__label">
										{item.name_2}
									</div> : null}
									{item.children && 
									<ul>
										{item.children.map((child) => {
											return (
												<li key={child.name} className="footer-links__item">
													<Link to={child.route}>{child.name}</Link>
												</li>
											);
										})}
									</ul>
									}
								</div>
							)
						})}
					</div>
					{/*<div className="footer__social">
						<div className="footer__social-label">
							Find us on:
						</div>
						<ul className="footer__social-items">
							{social_links.map((item, i) => {
								return (
									<li key={'footer-social-' + i}>
										<a href={item.href}>
											<img src={item.icon} />
										</a>
									</li>
								);
							})}
						</ul>
					</div>*/}
				</div>
				<div className="footer__bottom">
					<div className='footer__credits'>
						Copyright © 2023 Visual Layer, Inc. All rights reserved.
					</div>
					<ul className="footer__bottom-menu">
						{bottomLinks.map((item) => {
							return (
								<li key={item.name}>
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
	);
};

export default Footer;
