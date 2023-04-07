import React from 'react';

import loved_img_1 from '../../../../assets/images/loved-img-1.png';
import loved_img_2 from '../../../../assets/images/loved-img-2.png';
import loved_img_3 from '../../../../assets/images/loved-img-3.png';

const Loved = () => {
	return (
        <section className='home-loved'>
            <div className='container'>
                <section className='home-loved__content'>
                    <div className='home-loved__title'>
                        Loved by our users
                    </div>
                    <div className='home-loved__items'>
                        <div className='home-loved__item loved-item-1'>
                            <img alt="" src={loved_img_1} />
                            <div className='home-loved__item-text'>
                                Fastdup worked great. Already on my way
                            </div>
                            <div className='home-loved__item-name'>
                                Suhail Doshi
                            </div>
                            <div className='home-loved__item-post'>
                                CEO Playground.ai, ex CEO Mixpanel
                            </div>
                        </div>
                        <div className='home-loved__item loved-item-2'>
                            <img alt="" src={loved_img_2} />
                            <div className='home-loved__item-text'>
                                Meesho is using fastdup to curate 1,000,000,000 images of our digital catalog
                            </div>
                            <div className='home-loved__item-name'>
                                Srinivasa Rao Jami
                            </div>
                            <div className='home-loved__item-post'>
                                Manager, Data Science
                            </div>
                        </div>
                        <div className='home-loved__item loved-item-3'>
                            <img alt="" src={loved_img_3} />
                            <div className='home-loved__item-text'>
                                Everyone should de-duplicate their images. I found fastdup to work pretty well
                            </div>
                            <div className='home-loved__item-name'>
                                Eric Wallace
                            </div>
                            <div className='home-loved__item-post'>
                                PhD student, Berkely, Author for the popular paper of copyright violation of generative models
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
	);
};

export default Loved;