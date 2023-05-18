import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VerticalTicker, HorizontalTicker } from "react-infinite-ticker";
import PUBLIC_ROUTES from '../../../data/publicRoutes';

import gallery_img_1 from '../../../../assets/images/about-img-1.png';
import gallery_img_2 from '../../../../assets/images/about-img-2.png';
import gallery_img_3 from '../../../../assets/images/about-img-3.png';
import gallery_img_4 from '../../../../assets/images/about-img-4.png';
import gallery_img_5 from '../../../../assets/images/about-img-5.png';
import gallery_img_6 from '../../../../assets/images/about-img-6.png';
import gallery_img_mobile_1 from '../../../../assets/images/about-img-mobile-1.png';
import gallery_img_mobile_2 from '../../../../assets/images/about-img-mobile-2.png';
import gallery_img_mobile_3 from '../../../../assets/images/about-img-mobile-3.png';
import gallery_img_mobile_4 from '../../../../assets/images/about-img-mobile-4.png';
import gallery_img_mobile_5 from '../../../../assets/images/about-img-mobile-5.png';
import gallery_img_mobile_6 from '../../../../assets/images/about-img-mobile-6.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ({data}) => {
    
	return (
        <section className='about-gallery'>
            <div className="container">
                <div className="about-gallery__items">
                    <div className='about-gallery__item about-img-1'>
                        <LazyLoadImage alt='' src={gallery_img_1} />
                    </div>
                    <div className='about-gallery__item about-img-2'>
                        <LazyLoadImage alt='' src={gallery_img_2} />
                    </div>
                    <div className='about-gallery__item about-img-3'>
                        <LazyLoadImage alt='' src={gallery_img_3} />
                    </div>
                    <div className='about-gallery__item about-img-4'>
                        <LazyLoadImage alt='' src={gallery_img_4} />
                    </div>
                    <div className='about-gallery__item about-img-5'>
                        <LazyLoadImage alt='' src={gallery_img_5} />
                    </div>
                    <div className='about-gallery__item about-img-6'>
                        <LazyLoadImage alt='' src={gallery_img_6} />
                    </div>
                </div>
                <div className="about-gallery__items mobile">
                    <div className='about-gallery__item about-img-1'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_1} />
                    </div>
                    <div className='about-gallery__item about-img-2'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_2} />
                    </div>
                    <div className='about-gallery__item about-img-3'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_3} />
                    </div>
                    <div className='about-gallery__item about-img-4'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_4} />
                    </div>
                    <div className='about-gallery__item about-img-5'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_5} />
                    </div>
                    <div className='about-gallery__item about-img-6'>
                        <LazyLoadImage alt='' src={gallery_img_mobile_6} />
                    </div>
                </div>
                <div className="about-gallery__offices">
                    Our offices located in Tel Aviv, California, and Bangalore
                </div>
            </div>
        </section>
	);
};

export default Gallery;