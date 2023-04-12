import React, { useEffect, useState } from 'react';
import Ticker from "react-ticker";

import partner_1 from '../../../assets/images/partner-1.png';
import partner_2 from '../../../assets/images/partner-2.png';
import partner_3 from '../../../assets/images/partner-3.png';
import partner_4 from '../../../assets/images/partner-4.png';
import partner_5 from '../../../assets/images/partner-5.png';
import intro_icon from '../../../assets/images/intro-icon.svg';
import requestademo_list from '../../../assets/images/requestademo-list.svg';
import cross from '../../../assets/images/cross.svg';

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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formValues, setFormValues] = useState({
	  name: '',
	  surname: '',
	  email: '',
	  phone: '',
	  job: '',
	  company: '',
	  building: ''
	});
	const [formErrors, setFormErrors] = useState({
	  name: '',
	  surname: '',
	  email: '',
	  phone: '',
	  job: '',
	  company: '',
	  building: ''
	});

	const handleInputChange = (e) => {
		const target = e.target;

		// Name attribute of the target input element must match formValues key
		// to update the state
		const formValuesKey = target.name;

		setFormValues((prev) => {
			const newFormValues = Object.assign({}, prev);

			newFormValues[`${formValuesKey}`] = target.value;

			return newFormValues;
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		let errorSubmit = false;
		console.log('formValues')
		console.log(formValues)
		Object.keys(formValues).map((key) => {
			if (!formValues[key]) {
				errorSubmit = true;
				setFormErrors((prev) => {
					const newFormErrors = Object.assign({}, prev);
					newFormErrors[`${key}`] = 'This field can`t be empty. Please fill in the information.';
					return newFormErrors;
				});
			} else {
				setFormErrors((prev) => {
					const newFormErrors = Object.assign({}, prev);
					newFormErrors[`${key}`] = '';
					return newFormErrors;
				});
			}
		});
		if (!(/\S+@\S+\.\S+/).test(formValues['email'])) {
			setFormErrors((prev) => {
			const newFormErrors = Object.assign({}, prev);
			newFormErrors['email'] = 'Not valid e-mail';
			return newFormErrors;
			});
			errorSubmit = true;
		}
		if (formValues['email'] && formValues['email'].indexOf('@') === -1) {
			setFormErrors((prev) => {
			const newFormErrors = Object.assign({}, prev);
			newFormErrors['email'] = 'An e-mail address must contain a single @.';
			return newFormErrors;
			});
			errorSubmit = true;
		}
		if (formValues['phone']) {
			const regex = new RegExp('^[\+]?[0-9]+$');
			if (!regex.test(formValues['phone'])) {
				setFormErrors((prev) => {
				const newFormErrors = Object.assign({}, prev);
				newFormErrors['phone'] = 'Not valid phone number';
				return newFormErrors;
				});
				errorSubmit = true;
			}
		}

		
            
		if (!errorSubmit) {
			try {
				/*const data = {
					'name': formValues.name,
					'surname': formValues.surname,
					'email': formValues.email,
					'subject': formValues.subject,
					'resume': formValues.resume,
					'message': formValues.message,
				}
				console.log(JSON.stringify(data));*/
				const formData = new FormData();
				console.log(formValues);
				formData.append('vl-name', formValues.name);
				formData.append('vl-surname', formValues.surname);
				formData.append('vl-email', formValues.email);
				formData.append('vl-phone', formValues.phone);
				formData.append('vl-job', formValues.job);
				formData.append('vl-company', formValues.company);
				formData.append('vl-building', formValues.building);

				const html = document.documentElement;
				html.classList.add('is-locked');
				setIsModalOpen(true);
				setFormValues({
					name: '',
					surname: '',
					email: '',
					phone: '',
					job: '',
					company: '',
					building: '',
				});

				let res = await fetch("send.php", {
					method: "POST",
					body: formData,
				});

				console.log(res);
				if (res.status === 200) {
					console.log('success');
				} else {
					console.log('error');
				}
			} catch (err) {
			console.log(err);
			}
		} else {
			console.log('error');
			console.log(errorSubmit);
		}
	};

	const handleModalClose = (e) => {
		const html = document.documentElement;
		html.classList.remove('is-locked');
		setIsModalOpen(false);
	};

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
								Save up to 95% of your labeling costs
							</li>
							<li>
								<img src={requestademo_list} alt='' />
								Ensure autonomous and scalable visual data managementv  
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
								<input name='name' onChange={handleInputChange} type='text'></input>
								{formErrors.name ?
									<span className="requestademo__form-error">
									{formErrors.name}
									</span>
								: ''}
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Last name:&nbsp;<span>*</span>
								</div>
								<input onChange={handleInputChange} name='surname' type='text'></input>
								{formErrors.surname ?
									<span className="requestademo__form-error">
									{formErrors.surname}
									</span>
								: ''}
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Email:&nbsp;<span>*</span>
								</div>
								<input onChange={handleInputChange} name='email' type='email' placeholder='name@company.com'></input>
								{formErrors.email ?
									<span className="requestademo__form-error">
									{formErrors.email}
									</span>
								: ''}
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Phone number:
								</div>
								<input onChange={handleInputChange} name='phone' type='text'></input>
								{formErrors.phone ?
									<span className="requestademo__form-error">
									{formErrors.phone}
									</span>
								: ''}
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Job title:&nbsp;<span>*</span>
								</div>
								<input onChange={handleInputChange} name='job' type='text'></input>
								{formErrors.job ?
									<span className="requestademo__form-error">
									{formErrors.job}
									</span>
								: ''}
							</div>
							<div className='requestademo__form-input-wrap'>
								<div className='requestademo__form-label'>
									Company:&nbsp;<span>*</span>
								</div>
								<input onChange={handleInputChange} name='company' type='text' placeholder='Company'></input>
								{formErrors.company ?
									<span className="requestademo__form-error">
									{formErrors.company}
									</span>
								: ''}
							</div>
						</div>
						<div className='requestademo__form-input-wrap'>
							<div className='requestademo__form-label'>
								Please share what you are building:&nbsp;<span>*</span>
							</div>
							<textarea onChange={handleInputChange} name='building' type='text'></textarea>
							{formErrors.building ?
								<span className="requestademo__form-error">
								{formErrors.building}
								</span>
							: ''}
						</div>
						<button onClick={handleFormSubmit} className='requestademo__form-button'>Submit</button>
						<div className='requestademo__form-text'>
							By submitting this form, I agree to the <a href='#'>Terms&nbsp;of&nbsp;Use</a> and acknowledge that my information will be used in accordance with the <a href='#'>Privacy&nbsp;Policy</a>.
						</div>
					</form>
					{isModalOpen ?
					<div
						className='requestademo__form-modal-wrapper'
					>
						<div className="requestademo__form-modal">
						<div className="requestademo-form__modal-close-wrapper">
							<button
							type="button"
							className="requestademo__form-modal-close"
							onClick={(evt) => handleModalClose(evt)}
							>
							<img className='modal-menu__cross' alt="" src={cross} />
							</button>
						</div>
						<h3 className="requestademo__form-modal-title">
							Thank you!
						</h3>
						<p>We have received your message.</p>
						</div>
					</div>
					: ''}
				</div>
                <div className='requestademo__bottom'>
                    <div className='requestademo__bottom-title'>
						Trusted by our users
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