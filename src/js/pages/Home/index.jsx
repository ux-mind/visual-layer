import React from 'react';
import { Link } from 'react-router-dom';
import intro_icon from '../../../assets/images/intro-icon.svg';
import intro_icon_2 from '../../../assets/images/intro-icon-2.svg';
import intro_icon_3 from '../../../assets/images/intro-icon-3.svg';
import partner_1 from '../../../assets/images/partner-1.svg';
import partner_2 from '../../../assets/images/partner-2.svg';
import partner_3 from '../../../assets/images/partner-3.svg';
import partner_4 from '../../../assets/images/partner-4.svg';
import partner_5 from '../../../assets/images/partner-5.svg';
import features_icon_1 from '../../../assets/images/features-icon-1.svg';
import features_icon_2 from '../../../assets/images/features-icon-2.svg';
import features_icon_3 from '../../../assets/images/features-icon-3.svg';
import features_icon_4 from '../../../assets/images/features-icon-4.svg';
import product_img_1 from '../../../assets/images/product-img-1.png';
import product_img_2 from '../../../assets/images/product-img-2.png';
import product_img_3 from '../../../assets/images/product-img-3.png';
import loved_img_1 from '../../../assets/images/loved-img-1.png';
import loved_img_2 from '../../../assets/images/loved-img-2.png';
import loved_img_3 from '../../../assets/images/loved-img-3.png';
import form_img from '../../../assets/images/form-img.png';

const Home = () => {
	return (
		<main className="main home">
			<section className='home-intro'>
				<div className='home-intro__left-button-1'>
					<img alt="" src={intro_icon_2} />
				</div>
				<div className='home-intro__left-button-2'>
					<img alt="" src={intro_icon_3} />
				</div>
				<div className="container">
					<div className="home-intro__content">
						<div className='home-intro__left'>
							<h1 className='home-intro__title'>
								Simplify Your Visual Data Ops
							</h1>
							<div className='home-intro__description'>
								We provide you with an autonomous and scalable visual data management platform so you can focus on building amazing products.
							</div>
							<Link className="home-intro__button-wrap" to='/'>
								<button className='home-intro__button'>
									Join our alpha waiting list
								</button>
							</Link>
							<div className='home-intro__developers'>
								<img alt="" src={intro_icon} />
								From the developers of fastdup, XGBoost & Turi Create
							</div>
						</div>
						<div className='home-intro__right'>
							<img alt="" src="" />
						</div>
					</div>
					<div className='home-intro__bottom'>
						<div className='home-intro__bottom-title'>
							Trusted by our partners
						</div>
						<div className='home-intro__bottom-content'>
							<img alt="" src={partner_1} />
							<img alt="" src={partner_2} />
							<img alt="" src={partner_3} />
							<img alt="" src={partner_4} />
							<img alt="" src={partner_5} />
						</div>
					</div>
				</div>
			</section>
			<section className='home-features'>
				<div className='container'>
					<div className="home-features__content">
						<div className="home-features__top">
							<div className="home-features__number">
								50,000,000,000+
							</div>
							<div className="home-features__label">
								Images processed by fastdup so far
							</div>
						</div>
						<div className="home-features__items">
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src={features_icon_1} />
								<div className="home-features__item-text">
									95% Cost reduction on your visual data ops
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src={features_icon_2} />
								<div className="home-features__item-text">
									Billions of managed images/videos
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src={features_icon_3} />
								<div className="home-features__item-text">
									x20 faster data-centric cycles.
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src={features_icon_4} />
								<div className="home-features__item-text">
									50% data and model quality improvement
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='home-product'>
				<div className='home-product__section product-section-1'>
					<div className='container'>
						<div className='home-product__title'>
							Visual Layer’s Cloud Product
						</div>
						<div className='home-product__section-content'>
							<img alt="" src={product_img_1} />
							<div className='home-product__section-info'>
								<div className='home-product__section-title'>
									Seamlessly ingest data from any source
								</div>
								<div className='home-product__section-text'>
									Our platform offers effortless integration with various data sources, such as local disks, network file systems, and major cloud providers such as AWS, GCP, and Azure
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='home-product__section product-section-2'>
					<div className='container'>
						<div className='home-product__section-content'>
							<div className='home-product__section-info'>
								<div className='home-product__section-title'>
									Automatically gain valuable insights and identify data quality issues
								</div>
								<div className='home-product__section-text'>
									Visual Layer automatically scans through your entire dataset, whether it's 10K or 50B images, and continuously provides insights about your data while alerting you to possible quality issues in your dataset
								</div>
							</div>
							<img alt="" src={product_img_2} />
						</div>
					</div>
				</div>
				<div className='home-product__section product-section-3'>
					<div className='container'>
						<div className='home-product__section-content'>
							<img alt="" src={product_img_3} />
							<div className='home-product__section-info'>
								<div className='home-product__section-title'>
									Effortlessly resolve all data quality issues automatically
								</div>
								<div className='home-product__section-text'>
									Our platform's automated data quality issue resolution offers effortless and efficient data management. With automatic resolution capabilities, data quality issues are swiftly resolved, ensuring optimal performance and accuracy.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='home-community'>
				<div className='container'>
					<section className='home-community__content'>
						<div className='home-community__title'>
							Visual Layer community
						</div>
						<div className='home-community__items'>
							<div className='home-community__item community-item-1'>
								<div className='home-community__item-number'>
									50,000,000,000
								</div>
								<div className='home-community__item-text'>
									Images processed by fastdup so far
								</div>
							</div>
							<div className='home-community__item community-item-2'>
								<div className='home-community__item-number'>
									180,000
								</div>
								<div className='home-community__item-text'>
									fastdup github project users
								</div>
							</div>
							<div className='home-community__item community-item-3'>
								<div className='home-community__item-number'>
									1$
								</div>
								<div className='home-community__item-text'>
									Cloud cost for running on 10,000,000 images
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
			<section className='home-loved'>
				<div className='container'>
					<section className='home-loved__content'>
						<div className='home-loved__title'>
							Loved by our users
						</div>
						<div className='home-loved__items'>
							<div className='home-loved__item'>
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
							<div className='home-loved__item'>
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
							<div className='home-loved__item'>
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
			<section className='home-form'>
				<div className='container'>
					<div className='home-form__content'>
						<img alt="" src={form_img} />
						<div className='home-form__info'>
							<div className='home-form__title'>
								Join the alpha waitlist
							</div>
							<div className='home-form__text'>
								We promise to only update about Visual Layer product release - nothing markety.
							</div>
							<div className='home-form__row'>
								<div className='home-form__input-wrap'>
									<input className='home-form__input' type='text'></input>
									<div className='home-form__input-label'>
										Please complete this required field.
									</div>
								</div>
								<button className='home-form__button'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
