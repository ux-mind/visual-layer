import React, { useEffect, useState } from 'react';
import Ticker from "react-ticker";

import partner_1 from '../../../assets/images/partner-1.png';
import partner_2 from '../../../assets/images/partner-2.png';
import partner_3 from '../../../assets/images/partner-3.png';
import partner_4 from '../../../assets/images/partner-4.png';
import partner_5 from '../../../assets/images/partner-5.png';
import intro_icon from '../../../assets/images/intro-icon.svg';
import requestademo_list from '../../../assets/images/requestademo-list.svg';

const RequestADemo = () => {
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
		<main className="main requestademo">
			<div className='container'>
                <div className='requestademo__content'>
					<div className='requestademo__info'>
						<div className='requestademo__info-title'>
							We Simplify  Visual Data
						</div>
						<div className='requestademo__info-description'>
							Request a demo to see how leading enterprise teams use our product:
						</div>
						<ul className='requestademo__info-list'>
							<li>
								<img src={requestademo_list} alt='' />
								Gain insights, automatically find and fix data quality issues
							</li>
							<li>
								<img src={requestademo_list} alt='' />
								Save thousands of person-hours for labeling tasks
							</li>
							<li>
								<img src={requestademo_list} alt='' />
								Ensure autonomous and scalable visual data management
							</li>
							<li>
								<img src={requestademo_list} alt='' />
								Seamlessly integrate into any existing workflows
							</li>
							<li>
								<img src={requestademo_list} alt='' />
								Keep your visual data private and secure
							</li>
						</ul>
                        <div className='requestademo__developers'>
                            <img alt="" src={intro_icon} />
                            From the creators of fastdup, XGBoost & Turi Create
                        </div>
					</div>
					<form className='requestademo__form'>
						<div className='requestademo__form-title'>
							Request a live product demo
						</div>
						<div className='requestademo__form-data'>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									First name:&nbsp;<span>*</span>
								</div>
								<input type='text'></input>
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Last name:&nbsp;<span>*</span>
								</div>
								<input type='text'></input>
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Email:&nbsp;<span>*</span>
								</div>
								<input type='email' placeholder='name@company.com'></input>
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Phone number:
								</div>
								<input type='text'></input>
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Job title:&nbsp;<span>*</span>
								</div>
								<input type='text'></input>
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Company:&nbsp;<span>*</span>
								</div>
								<input type='text' placeholder='Company'></input>
							</div>
						</div>
						<div className='requestademo__form-input-wrap'>
							<div className='requestademo__form-label'>
								Please share what you are building:&nbsp;<span>*</span>
							</div>
							<textarea type='text'></textarea>
						</div>
						<button className='requestademo__form-button'>Submit</button>
						<div className='requestademo__form-text'>
							By submitting this form, I agree to the <a href='#'>Terms of Use</a> and acknowledge that my information will be used in accordance with the <a href='#'>Privacy Policy</a>.
						</div>
					</form>
				</div>
                <div className='requestademo__bottom'>
                    <div className='requestademo__bottom-title'>
						Trusted by our users
                    </div>
                    <div className='requestademo__bottom-content'>
                    </div>
                </div>
			</div>
            <div className='requestademo__bottom-content'>
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 1} alt='' src={item.img} />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 2} alt='' src={item.img} />
                    )
                })}
                {partners.map((item, i) => {
                    return (
                        <img className='loop-collection' key={item.id + 3} alt='' src={item.img} />
                    )
                })}
            </div>
		</main>
	);
};

export default RequestADemo;