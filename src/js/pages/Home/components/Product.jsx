import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import product_img_1 from '../../../../assets/images/product_img_1.png';
import product_img_1_2x from '../../../../assets/images/product_img_1_2x.png';
import product_img_2 from '../../../../assets/images/product_img_2.png';
import product_img_2_2x from '../../../../assets/images/product_img_2_2x.png';
import product_img_3 from '../../../../assets/images/product_img_3.png';
import product_img_3_2x from '../../../../assets/images/product_img_3_2x.png';
import light_1 from '../../../../assets/images/light-1.png';
import light_2 from '../../../../assets/images/light-2.png';
import light_3 from '../../../../assets/images/light-3.png';

const Product = () => {
	return (
        <section className='home-product'>
            <div className='home-product__section product-section-1'>
                <div className='container'>
                    <div className='home-product__title'>
                        Leverage Visual Layer on the Cloud
                    </div>
                    <div className='home-product__section-content'>
                        <div className='home-product__section-img-wrap'>
                            <img className='home-product__section-img' alt="" src={product_img_1} srcSet={`${product_img_1} 1x, ${product_img_1_2x} 2x`}/>
                            {/*<img className='home-product__section-light' alt="" src={light_1}/>*/}
                        </div>
                        <div className='home-product__section-info'>
                            <div className='home-product__section-title'>
                                Seamlessly ingest data from any source
                            </div>
                            <div className='home-product__section-text'>
                                Our platform offers effortless integration with various data sources including local disks, network file systems, and major cloud providers such as AWS, GCP, and Azure.
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
                                Visual Layer automatically scans your entire dataset, whether 10K or 50B images, and continuously provides insights into your data while alerting you to possible quality issues in your dataset.
                            </div>
                        </div>
                        <div className='home-product__section-img-wrap'>
                            <img className='home-product__section-img' alt="" src={product_img_2} srcSet={`${product_img_2} 1x, ${product_img_2_2x} 2x`} />
                            {/*<img className='home-product__section-light' alt="" src={light_2}/>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-product__section product-section-3'>
                <div className='container'>
                    <div className='home-product__section-content'>
                        <div className='home-product__section-img-wrap'>
                            <img className='home-product__section-img' alt="" src={product_img_3} srcSet={`${product_img_3} 1x, ${product_img_3_2x} 2x`} />
                            {/*<img className='home-product__section-light' alt="" src={light_3}/>*/}
                        </div>
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
	);
};

export default Product;