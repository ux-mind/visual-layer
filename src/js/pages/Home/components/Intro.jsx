import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import PUBLIC_ROUTES from '../../../data/publicRoutes';
import { Player } from '@lottiefiles/react-lottie-player';

import intro_icon from '../../../../assets/images/intro-icon.svg';
import intro_icon_2 from '../../../../assets/images/intro-icon-2.svg';
import intro_icon_3 from '../../../../assets/images/intro-icon-3.svg';
import partner_1 from '../../../../assets/images/partner-1.png';
import partner_2 from '../../../../assets/images/partner-2.png';
import partner_3 from '../../../../assets/images/partner-3.png';
import partner_4 from '../../../../assets/images/partner-4.png';
import partner_5 from '../../../../assets/images/partner-5.png';
import partner_1_2x from '../../../../assets/images/partner-1-2x.png';
import partner_2_2x from '../../../../assets/images/partner-2-2x.png';
import partner_3_2x from '../../../../assets/images/partner-3-2x.png';
import partner_4_2x from '../../../../assets/images/partner-4-2x.png';
import partner_5_2x from '../../../../assets/images/partner-5-2x.png';
import arrow_blue from '../../../../assets/images/arrow-blue.svg';
import hero_img from '../../../../assets/images/hero.gif';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            ref.current.classList.remove('link-opened');
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Intro = ({handleClick}) => {
    const [partners, setPartners] = useState([
        {
            id: 0,
            img: partner_1,
            img2x: partner_1_2x
        },
        {
            id: 1,
            img: partner_2,
            img2x: partner_2_2x
        },
        {
            id: 2,
            img: partner_3,
            img2x: partner_3_2x
        },
        {
            id: 3,
            img: partner_4,
            img2x: partner_4_2x
        },
        {
            id: 4,
            img: partner_5,
            img2x: partner_5_2x
        }
    ]);

    const handleLinkClick = (e) => {
        if (!e.target.classList.contains('link-opened') && !e.target.parentElement.classList.contains('link-opened')) {
            e.preventDefault();
        }
        if (e.target.classList.contains('right-button')) {
            e.target.classList.add('link-opened');
        } else {
            e.target.parentElement.classList.add('link-opened');
        }
    }

    const wrapperRef1 = useRef(null);
    useOutsideAlerter(wrapperRef1);

    const wrapperRef2 = useRef(null);
    useOutsideAlerter(wrapperRef2);
    
	return (
        <section className='home-intro'>
            <a ref={wrapperRef1} onClick={(e) => handleLinkClick(e)} href='https://github.com/visual-layer/fastdup' className='right-button home-intro__right-button-1'>
                <img className='home-intro__right-button-icon' alt="" src={intro_icon_2} />
                <div>Contribute on GitHub!</div>
                <img className='home-intro__right-button-arrow' alt="" src={arrow_blue} />
            </a>
            <a ref={wrapperRef2} onClick={(e) => handleLinkClick(e)} href='https://visualdatabase.slack.com/join/shared_invite/zt-19jaydbjn-lNDEDkgvSI1QwbTXSY6dlA#/shared-invite/email' className='right-button home-intro__right-button-2'>
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
                            You focus on creating amazing products while we manage your visual data
                        </div>
                        <Link to='https://app.visual-layer.com/'>
                            <button className='home-intro__button'>
                                Get Started
                            </button>
                        </Link>
                        <div className='home-intro__developers'>
                            <img alt="" src={intro_icon} />
                            <span>From the creators of fastdup, XGBoost, and Turi Create</span>
                        </div>
                    </div>
                    <div className='home-intro__animation'>
                        <div className='home-intro__animation-elem'>
                        </div>
                    </div>
                </div>
                <div className='home-intro__bottom'>
                    <div className='home-intro__bottom-title'>
                        Trusted by our users
                    </div>
                    <div className='home-intro__bottom-content'>
                        {partners.map((item, i) => {
                            return (
                                <LazyLoadImage
                                    className={'partner-'+(i+1)}
                                    key={item.id + 1}
                                    alt=''
                                    src={item.img}
                                    srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {/*<div className='home-intro__bottom-content'>
                {partners.map((item, i) => {
                    return (
                        <LazyLoadImage
                            className='loop-collection'
                            key={item.id + 1}
                            alt=''
                            src={item.img}
                            srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                        />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <LazyLoadImage
                            className='loop-collection'
                            key={item.id + 1}
                            alt=''
                            src={item.img}
                            srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                        />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <LazyLoadImage
                            className='loop-collection'
                            key={item.id + 1}
                            alt=''
                            src={item.img}
                            srcSet={`${item.img} 1x, ${item.img2x} 2x`}
                        />
                    )
                })}
            </div>*/}
        </section>
	);
};

export default Intro;
