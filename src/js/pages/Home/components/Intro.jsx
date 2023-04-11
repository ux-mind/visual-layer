import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import PUBLIC_ROUTES from '../../../data/publicRoutes';

import intro_icon from '../../../../assets/images/intro-icon.svg';
import intro_icon_2 from '../../../../assets/images/intro-icon-2.svg';
import intro_icon_3 from '../../../../assets/images/intro-icon-3.svg';
import partner_1 from '../../../../assets/images/partner-1.png';
import partner_2 from '../../../../assets/images/partner-2.png';
import partner_3 from '../../../../assets/images/partner-3.png';
import partner_4 from '../../../../assets/images/partner-4.png';
import partner_5 from '../../../../assets/images/partner-5.png';
import arrow_blue from '../../../../assets/images/arrow-blue.svg';
import hero_img from '../../../../assets/images/hero.gif';

const Intro = ({handleClick}) => {
    const [partners, setPartners] = useState([
        {
            id: 0,
            img: partner_1
        },
        {
            id: 1,
            img: partner_2
        },
        {
            id: 2,
            img: partner_3
        },
        {
            id: 3,
            img: partner_4
        },
        {
            id: 4,
            img: partner_5
        }
    ]);
    
	return (
        <section className='home-intro'>
            <a href='https://github.com/visual-layer/fastdup' className='home-intro__right-button-1'>
                <img className='home-intro__right-button-icon' alt="" src={intro_icon_2} />
                <div>Contribute our GitHub!</div>
                <img className='home-intro__right-button-arrow' alt="" src={arrow_blue} />
            </a>
            <a href='https://visualdatabase.slack.com/join/shared_invite/zt-19jaydbjn-lNDEDkgvSI1QwbTXSY6dlA#/shared-invite/email' className='home-intro__right-button-2'>
                <img className='home-intro__right-button-icon' alt="" src={intro_icon_3} />
                <div>Join our Slack!</div>
                <img className='home-intro__right-button-arrow' alt="" src={arrow_blue} />
            </a>
            <div className="container">
                <div className="home-intro__content">
                    <div className='home-intro__left'>
                        <h1 className='home-intro__title'>
                            Simplify Your Visual Data Ops
                        </h1>
                        <div className='home-intro__description'>
                            You can focus on creating amazing products while we manage your visual data
                        </div>
                        <Link to={PUBLIC_ROUTES.request_a_demo}>
                            <button className='home-intro__button'>
                                Request a demo
                            </button>
                        </Link>
                        <div className='home-intro__developers'>
                            <img alt="" src={intro_icon} />
                            <span>From the creators of fastdup, XGBoost & Turi Create</span>
                        </div>
                    </div>
                    <div className='home-intro__animation'></div>
                </div>
                <div className='home-intro__bottom'>
                    <div className='home-intro__bottom-title'>
                        Trusted by our users
                    </div>
                </div>
            </div>
            <div className='home-intro__bottom-content'>
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 1} alt='' src={item.img} />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 2} alt='' src={item.img} />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 3} alt='' src={item.img} />
                    )
                })}
            </div>
        </section>
	);
};

export default Intro;
