import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const RecentWorks = () => {
    return (
        <>
            <div className="works-area pt-80 pb-50 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Recent Works</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Pagination, Autoplay]}
                    className="works-slides"
                >
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image1.jpg" alt="image" />

                            <Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Incredible infrastructure</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image2.jpg" alt="image" />

                            <Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Email Notifications</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image3.jpg" alt="image" />

                            <Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Best Analytics Audits</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image4.jpg" alt="image" />

                            <Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>

                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Simple Dashboard</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="single-works">
                            <img src="/images/works-image/works-image5.jpg" alt="image" />

                            <Link href="/project-details">
                                <a className="icon"><Icon.Settings /></a>
                            </Link>
                            
                            <div className="works-content">
                                <h3>
                                    <Link href="/project-details"><a>Information Retrieval</a></Link>
                                </h3>
                                <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                
                {/* Shape Images */}
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
            </div>
        </>
    )
}

export default RecentWorks;
