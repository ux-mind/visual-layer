import React from 'react';
import Ticker from 'react-awesome-ticker';
import { Link } from 'react-router-dom';
import VideoPlayer from "react-background-video-player";

import intro_icon from '../../../../assets/images/intro-icon.svg';
import intro_icon_2 from '../../../../assets/images/intro-icon-2.svg';
import intro_icon_3 from '../../../../assets/images/intro-icon-3.svg';
import partner_1 from '../../../../assets/images/partner-1.png';
import partner_2 from '../../../../assets/images/partner-2.png';
import partner_3 from '../../../../assets/images/partner-3.png';
import partner_4 from '../../../../assets/images/partner-4.png';
import partner_5 from '../../../../assets/images/partner-5.png';
import arrow_blue from '../../../../assets/images/arrow-blue.svg';
import sample from '../../../../assets/videos/hero.webm';

const Intro = ({handleClick}) => {
	return (
        <section className='home-intro'>
            <VideoPlayer
                className="video"
                src={
                    sample
                }
                autoPlay={true}
                muted={true}
            />
            <a href='/' className='home-intro__right-button-1'>
                <img className='home-intro__right-button-icon' alt="" src={intro_icon_2} />
                <div>Join our GitHub!</div>
                <img className='home-intro__right-button-arrow' alt="" src={arrow_blue} />
            </a>
            <a href='/' className='home-intro__right-button-2'>
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
                            You can focus on building amazing products while we manage your visual data
                        </div>
                        <button className='home-intro__button' onClick={handleClick}>
                            Join our alpha waiting list
                        </button>
                        <div className='home-intro__developers'>
                            <img alt="" src={intro_icon} />
                            From the creators of fastdup, XGBoost & Turi Create
                        </div>
                    </div>
                </div>
                <div className='home-intro__bottom'>
                    <div className='home-intro__bottom-title'>
                        Trusted by our users
                    </div>
                    <div className='home-intro__bottom-content'>
                        <Ticker>
                        <img className='partner-1' alt="" src={partner_1} />
                        <img className='partner-2' alt="" src={partner_2} />
                        <img className='partner-3' alt="" src={partner_3} />
                        <img className='partner-4' alt="" src={partner_4} />
                        <img className='partner-5' alt="" src={partner_5} />
                        </Ticker>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Intro;