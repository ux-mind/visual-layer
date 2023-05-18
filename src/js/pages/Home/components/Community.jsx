import React from 'react';

const Community = () => {
	return (
        <section className='home-community'>
            <div className='container'>
                <section className='home-community__content'>
                    <div className='home-community__title'>
                        Visual Layer community
                    </div>
                    <div className='home-community__items'>
                        <div className='home-community__item community-item-1'>
                            <div className='home-community__item-number'>
                                50,000,000,000+
                            </div>
                            <div className='home-community__item-text'>
                                Images processed by fastdup so far
                            </div>
                        </div>
                        <div className='home-community__item community-item-2'>
                            <div className='home-community__item-number'>
                                200,000+
                            </div>
                            <div className='home-community__item-text'>
                                fastdup users
                            </div>
                        </div>
                        <div className='home-community__item community-item-3'>
                            <div className='home-community__item-number'>
                                $1
                            </div>
                            <div className='home-community__item-text'>
                                Cloud cost for running on 10,000,000 images
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
	);
};

export default Community;