import React from 'react';
import CountUp from 'react-countup';

import features_icon_1 from '../../../../assets/images/features-icon-1.svg';
import features_icon_2 from '../../../../assets/images/features-icon-2.svg';
import features_icon_3 from '../../../../assets/images/features-icon-3.svg';
import features_icon_4 from '../../../../assets/images/features-icon-4.svg';

const Features = () => {
	return (
        <section className='home-features'>
            <div className='container'>
                <div className="home-features__content">
                    <div className="home-features__top">
                        <div className="home-features__number">
                            <CountUp enableScrollSpy={true} end={50000000000} />+
                        </div>
                        <div className="home-features__label">
                            Images processed by fastdup so far
                        </div>
                    </div>
                    <div className="home-features__items">
                        <div className="home-features__item">
                            <img className="home-features__item-icon" alt="" src={features_icon_1} />
                            <div className="home-features__item-text">
                                Save up to 95% of your labeling costs
                            </div>
                        </div>
                        <div className="home-features__item">
                            <img className="home-features__item-icon" alt="" src={features_icon_2} />
                            <div className="home-features__item-text">
                                Manage billions of images and videos
                            </div>
                        </div>
                        <div className="home-features__item">
                            <img className="home-features__item-icon" alt="" src={features_icon_3} />
                            <div className="home-features__item-text">
                                Accelerate your product development by x20
                            </div>
                        </div>
                        <div className="home-features__item">
                            <img className="home-features__item-icon" alt="" src={features_icon_4} />
                            <div className="home-features__item-text">
                                Improve 50% on data and model quality
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Features;