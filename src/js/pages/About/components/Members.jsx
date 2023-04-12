import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import PUBLIC_ROUTES from '../../../data/publicRoutes';

import linkedin from '../../../../assets/images/linkedin.svg';
import link_down from '../../../../assets/images/link-down.svg';

const Members = ({data}) => {
    
	return (
        <section className='about-members'>
            <div className="container">
                {data && data.title ?
                <div className="about-members__title">
                    {data.title}
                </div>
                : null}
                {data && data.subtitle ?
                <div className="about-members__subtitle">
                    {data.subtitle}
                </div>
                : null}
                <div className="about-members__items">
                    {data && data.members.map((item) => {
                        return (
                            <div key={item.name} className='about-members__item'>
                                <div className='about-members__photo'>
                                    <img alt='' src={item.photo} />
                                </div>
                                <a className='about-members__name' href={item.linkedin}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <img alt='' src={linkedin} />
                                </a>
                                {item.post ? 
                                <div className='about-members__post'>
                                    {item.post}
                                </div>
                                : null}
                                <div className='about-members__description'>
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
	);
};

export default Members;
