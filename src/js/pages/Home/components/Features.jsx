import React from 'react';
import CountUp from 'react-countup';

import features_icon_1 from '../../../../assets/images/features-icon-1.svg';
import features_icon_2 from '../../../../assets/images/features-icon-2.svg';
import features_icon_3 from '../../../../assets/images/features-icon-3.svg';
import features_icon_4 from '../../../../assets/images/features-icon-4.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Features = () => {
    const counterAdd = () => {
        const interval = setInterval(() => {
            if (document.querySelector('.home-features__counter')) {
                const number = Number(document.querySelector('.home-features__counter').innerHTML.replaceAll(',', '')) + Math.floor(Math.random() * 100) + 1;     
                const numberFormatter = Intl.NumberFormat('en-US');
                const formatted = numberFormatter.format(number);
                document.querySelector('.home-features__counter').innerHTML
                = formatted;
            } else {
                clearInterval(interval);
            }
        }, 1000);
    };
	return (
        <section className='home-features'>
            <div className='container'>
                <div className="home-features__content">
                    <div className="home-features__top">
                        <div className="home-features__number">
                            <CountUp
                                className='home-features__counter'
                                enableScrollSpy={true}
                                scrollSpyOnce={true}
                                end={50000000000}
                                onStart={() => counterAdd()}
                            />
                        </div>
                        <div className="home-features__label">
                            Images processed so far
                        </div>
                    </div>
                    <div className="home-features__items">
                        <div className="home-features__item">
                            <LazyLoadImage className="home-features__item-icon" alt="" src={features_icon_1} />
                            <div className="home-features__item-text">
                                Save up to 95% of your labeling costs
                            </div>
                        </div>
                        <div className="home-features__item">
                            <LazyLoadImage className="home-features__item-icon" alt="" src={features_icon_2} />
                            <div className="home-features__item-text">
                                Manage billions of images and videos
                            </div>
                        </div>
                        <div className="home-features__item">
                            <LazyLoadImage className="home-features__item-icon" alt="" src={features_icon_3} />
                            <div className="home-features__item-text">
                                Accelerate your product development by x20
                            </div>
                        </div>
                        <div className="home-features__item">
                            <LazyLoadImage className="home-features__item-icon" alt="" src={features_icon_4} />
                            <div className="home-features__item-text">
                                Improve your data and model by up to 50%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Features;