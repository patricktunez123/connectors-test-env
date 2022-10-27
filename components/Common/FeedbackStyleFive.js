import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleFive = () => {
    return (
        <div className="agency-portfolio-feedback-area ptb-80">
            <div className="container">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="agency-portfolio-feedback-slides"
                >
                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src="/images/client-image/client1.jpg" alt="image" />
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src="/images/client-image/client2.jpg" alt="image" />
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="agency-portfolio-feedback-item">
                            <img src="/images/client-image/client3.jpg" alt="image" />
                            <p>Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default FeedbackStyleFive;  