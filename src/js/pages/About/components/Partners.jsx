import React, { useEffect, useState } from 'react';

import partner_1 from '../../../../assets/images/partner-1.png';
import partner_2 from '../../../../assets/images/partner-2.png';
import partner_3 from '../../../../assets/images/partner-3.png';
import partner_4 from '../../../../assets/images/partner-4.png';
import partner_5 from '../../../../assets/images/partner-5.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Partners = () => {

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
        <section className='about-partners'>
            <div className="container">
                <div className='about-partners__content'>
                    <div className='about-partners__title'>
                        180k+ users<br />who trust Visual Layer
                    </div>
                    <div className='about-partners__items'>
                        {partners.map((item, i) => {
                            return (
                                <LazyLoadImage className='loop-collection' key={item.id + 1} alt='' src={item.img} />
                            )
                        })}
                        {partners.map((item, i) => {
                            return (
                                <LazyLoadImage className='loop-collection' key={item.id + 2} alt='' src={item.img} />
                            )
                        })}
                        {partners.map((item, i) => {
                            return (
                                <LazyLoadImage className='loop-collection' key={item.id + 3} alt='' src={item.img} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Partners;