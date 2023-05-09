import React, { useEffect, useState } from 'react';

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
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Partners = () => {

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
    
	return (
        <section className='about-partners'>
            <div className="container">
                <div className='about-partners__content'>
                    <div className='about-partners__title'>
                        200k+ users<br />who trust Visual Layer
                    </div>
                    <div className='about-partners__items'>
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
        </section>
	);
};

export default Partners;