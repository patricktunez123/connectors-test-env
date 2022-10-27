import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleFour = () => {
    return (
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="ml-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/client1.jpg" alt="image" />
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/client2.jpg" alt="image" />
                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-ml-feedback-item">
                            <div className="client-info">
                                <img src="/images/client-image/client3.jpg" alt="image" />
                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="rating">
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                                <Icon.Star />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleFour;