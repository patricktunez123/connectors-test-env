import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PartnerStyleTwo = () => {
    return (
        <div className="repair-partner-area bg-f9fafb">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        }
                    }}
                    modules={[Autoplay]}
                    className="repair-partner-slides"
                > 
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-1.png' alt="image" />
                                <img src='/images/partner-img/partner-hover1.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-2.png' alt="image" />
                                <img src='/images/partner-img/partner-hover2.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-3.png' alt="image" />
                                <img src='/images/partner-img/partner-hover3.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-10.png' alt="image" />
                                <img src='/images/partner-img/partner-hover10.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-5.png' alt="image" />
                                <img src='/images/partner-img/partner-hover5.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-6.png' alt="image" />
                                <img src='/images/partner-img/partner-hover6.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-repair-partner">
                            <a href="#" target="_blank">
                                <img src='/images/partner-img/partner-7.png' alt="image" />
                                <img src='/images/partner-img/partner-hover7.png' alt="image" />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default PartnerStyleTwo;
