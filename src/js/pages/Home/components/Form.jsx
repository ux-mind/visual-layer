import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import form_img from '../../../../assets/images/form-img.png';
import sample from '../../../../assets/videos/jzc7j9qqn4.json';
import cross from '../../../../assets/images/cross.svg';

const Form = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
	const [formValues, setFormValues] = useState({
	  email: '',
	});
	const [formErrors, setFormErrors] = useState({
	  email: '',
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
		if (formValues['email'] && !(/\S+@\S+\.\S+/).test(formValues['email'])) {
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
				formData.append('vl-email', formValues.email);

				const html = document.documentElement;
				html.classList.add('is-locked');
				setIsModalOpen(true);
				setFormValues({
					email: ''
				});

				let res = await fetch("send-email.php", {
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
                                <input name='email' onChange={handleInputChange} className='home-form__input' type='text'></input>
                                {formErrors.email ?
									<span className="home-form__form-error">
									{formErrors.email}
									</span>
								: ''}
                                {/*<div className='home-form__input-label'>
                                    Please complete this required field.
                                </div>*/}
                            </div>
                            <button onClick={handleFormSubmit} className='home-form__button'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen ?
            <div
                className='home-form-modal-wrapper'
            >
                <div className="home-form-modal">
                <div className="home-form-modal-close-wrapper">
                    <button
                    type="button"
                    className="home-form-modal-close"
                    onClick={(evt) => handleModalClose(evt)}
                    >
                    <img className='modal-menu__cross' alt="" src={cross} />
                    </button>
                </div>
                <h3 className="home-form-modal-title">
                    Thank you!
                </h3>
                <p>We have received your message.</p>
                </div>
            </div>
            : ''}
        </section>
	);
};

export default Form;