import React from 'react';
import HomeBg from './HomeBg/HomeBg';

const Home = () => {
	return (
		<main className="main home">
			<HomeBg />
			<sectoin className='home-intro'>
				<div className="container">
					<div className="home-intro__content">
						<div className='home-intro__left'>
							<h1 className='home-intro__title'>
								Simplify Your Visual Data Ops
							</h1>
							<div className='home-intro__description'>
								We manage your visual data so you could focus on building amazing products fast. Get insights, auto fixes & search at scale. No manual work required.
							</div>
							<Link className="home-intro__button-wrap" to='/'>
								<button className='home-intro__button'>
									Join our alpha waiting list
								</button>
							</Link>
							<div className='home-intro__developers'>
								<img alt="" src="" />
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
						</div>
					</div>
				</div>
			</sectoin>
			<sectoin className='home-features'>
				<div className='conteiner'>
					<div className="home-features__content">
						<div className="home-features__top">
							<div className="home-features__number">
							</div>
							<div className="home-features__label">
							</div>
						</div>
						<div className="home-features__items">
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src="" />
								<div className="home-features__item-text">
									95% Cost reduction on your visual data ops
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src="" />
								<div className="home-features__item-text">
									Billions of managed images/videos
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src="" />
								<div className="home-features__item-text">
									x20 faster data-centric cycles.
								</div>
							</div>
							<div className="home-features__item">
								<img className="home-features__item-icon" alt="" src="" />
								<div className="home-features__item-text">
									50% data and model quality improvement
								</div>
							</div>
						</div>
					</div>
				</div>
			</sectoin>
			<sectoin className='home-product'>
				<div className='container'>
					<div className='home-product__section'>
						<div className='home-product__title'>
							Visual Layer’s Cloud Product
						</div>
						<div className='home-product__section-content'>
							<img alt="" src="" />
							<div className='home-product__section-info'>
								<div className='home-product__section-title'>
									Visual Layer’s Cloud Product
								</div>
								<div className='home-product__section-text'>
									Our platform offers effortless integration with various data sources, such as local disks, network file systems, and major cloud providers such as AWS, GCP, and Azure
								</div>
							</div>
						</div>
					</div>
					<div className='home-product__section'>
						<div className='home-product__section-content'>
							<img alt="" src="" />
							<div className='home-product__section-info'>
								<div className='home-product__section-title'>
									Automatically gain valuable insights and identify data quality issues
								</div>
								<div className='home-product__section-text'>
									Visual Layer automatically scans through your entire dataset, whether it's 10K or 50B images, and continuously provides insights about your data while alerting you to possible quality issues in your dataset
								</div>
							</div>
						</div>
					</div>
					<div className='home-product__section'>
						<div className='home-product__section-content'>
							<img alt="" src="" />
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
			</sectoin>
			<sectoin className='home-community'>
				<div className='container'>
					<sectoin className='home-community__content'>
						<div className='home-community__title'>
							Visual Layer community
						</div>
						<div className='home-community__items'>
							<div className='home-community__item'>
								<div className='home-community__item-number'>
									50,000,000,000
								</div>
								<div className='home-community__item-text'>
									Images processed by fastdup so far
								</div>
							</div>
							<div className='home-community__item'>
								<div className='home-community__item-number'>
									180,000
								</div>
								<div className='home-community__item-text'>
									fastdup github project users
								</div>
							</div>
							<div className='home-community__item'>
								<div className='home-community__item-number'>
									1$
								</div>
								<div className='home-community__item-text'>
									Cloud cost for running on 10,000,000 images
								</div>
							</div>
						</div>
					</sectoin>
				</div>
			</sectoin>
			<sectoin className='home-loved'>
				<div className='container'>
					<sectoin className='home-loved__content'>
						<div className='home-loved__title'>
							Loved by our users
						</div>
						<div className='home-loved__items'>
							<div className='home-loved__item'>
								<img alt="" src="" />
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
								<img alt="" src="" />
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
								<img alt="" src="" />
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
					</sectoin>
				</div>
			</sectoin>
			<sectoin className='home-form'>
				<div className='container'>
					<div className='home-form__content'>
						<img alt="" src="" />
						<div className='home-form__info'>
							<div className='home-form__title'>
							</div>
							<div className='home-form__text'>
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
			</sectoin>
		</main>
	);
};

export default Home;
