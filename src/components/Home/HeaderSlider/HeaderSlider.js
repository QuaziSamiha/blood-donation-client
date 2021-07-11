import React from 'react';
import styles from './HeaderSlider.module.css';
import Carousel1 from '../../../images/carousel-image1.jpg'
import Carousel2 from '../../../images/carousel-image4.jpg';
import Carousel3 from '../../../images/carousel-image5.jpg';

const HeaderSlider = () => {
    return (
        <div className={styles.all_component}>
            <div className='pt-0'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className={styles.blood_banner}>
                                <img src={Carousel1} alt="" className="d-block w-100" />
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h3>Donate The Blood, Save The Life</h3>
                                <p>Donate the blood to help the others</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.blood_banner}>
                                <img src={Carousel2} alt="" className="d-block w-100" />
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className='text-danger'>Donate The Blood, Save The Life</h3>
                                <p className='text-danger'>Donate the blood to help the others</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.blood_banner}>
                                <img src={Carousel3} alt="" className="d-block w-100" />
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className='text-danger'>Donate The Blood, Save The Life</h3>
                                <p className='text-danger'>Donate the blood to help the others</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;