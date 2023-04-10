import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import form_img from '../../../../assets/images/form-img.png';
import sample from '../../../../assets/videos/jzc7j9qqn4.json';

const Form = () => {
	return (
        <section className='home-form'>
            <div className='container'>
                <div className='home-form__content'>
                    <Player
                        src={sample}
                        className="player"
                        loop
                        autoplay
                    />
                    <div className='home-form__info'>
                        <div className='home-form__title'>
                            Join our mailing list
                        </div>
                        <div className='home-form__text'>
                            We promise to only update about Visual Layer product releases
                        </div>
                        <div className='home-form__row'>
                            <div className='home-form__input-wrap'>
                                <input className='home-form__input' type='text'></input>
                                {/*<div className='home-form__input-label'>
                                    Please complete this required field.
                                </div>*/}
                            </div>
                            <button className='home-form__button'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default Form;