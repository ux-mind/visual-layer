import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import PUBLIC_ROUTES from '../../../data/publicRoutes';

import partner_1 from '../../../../assets/images/partner-1.png';
import partner_2 from '../../../../assets/images/partner-2.png';
import partner_3 from '../../../../assets/images/partner-3.png';
import partner_4 from '../../../../assets/images/partner-4.png';
import partner_5 from '../../../../assets/images/partner-5.png';
import about_img from '../../../../assets/images/about-img.svg';

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
        <section className='about-intro'>
            <div className="container">
                <div className="about-intro__content">
                    <h1 className='about-intro__title'>
                        Introducing Visual Layer:<br />The Next-Generation Visual Data Management Platform
                    </h1>
                    <div className='about-intro__description'>
                        Visual Layer is building the most powerful visual data management platform that enables companies to manage and curate massive image and video datasets with unparalleled speed and quality.
 Based on the popular open-source project fastdup, Visual Layer leverages its proprietary graph engine to automatically detect data quality issues such as corrupted images, wrong labels, and outliers, and suggest correction steps to ensure high-quality datasets.
                    </div>
                    <div className='about-intro__creators'>
                        From the creators of fastdup, XGBoost & Turi Create
                    </div>
                    <img className='about-intro__animation' alt='' src={about_img} />
                </div>
            </div>
        </section>
	);
};

export default Intro;