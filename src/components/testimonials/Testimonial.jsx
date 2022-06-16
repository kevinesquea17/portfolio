import React from 'react'
import './testimonial.css';
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section id="testimonial">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonial__container" 
            spaceBetween={20}
            navigation
            slidesPerView={1}
            Pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="testimonial">
                <div className="testimonial__avatar">
                    <img src={AVATAR1} alt="" />
                </div>
                <h5 className='client__name'>Ernest Archivier</h5>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex neque aliquid natus consequatur 
                    eos? Maiores necessitatibus laboriosam dignissimos ea veritatis? 
                    Nobis molestias deserunt ducimus cumque hic molestiae quaerat, beatae vitae?
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="testimonial__avatar">
                    <img src={AVATAR2} alt="" />
                </div>
                <h5 className='client__name'>Donald Trump</h5>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex neque aliquid natus consequatur 
                    eos? Maiores necessitatibus laboriosam dignissimos ea veritatis? 
                    Nobis molestias deserunt ducimus cumque hic molestiae quaerat, beatae vitae?
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="testimonial__avatar">
                    <img src={AVATAR3} alt="" />
                </div>
                <h5 className='client__name'>Gareth Bale</h5>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex neque aliquid natus consequatur 
                    eos? Maiores necessitatibus laboriosam dignissimos ea veritatis? 
                    Nobis molestias deserunt ducimus cumque hic molestiae quaerat, beatae vitae?
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
                <div className="testimonial__avatar">
                    <img src={AVATAR4} alt="" />
                </div>
                <h5 className='client__name'>Elon Musk</h5>
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex neque aliquid natus consequatur 
                    eos? Maiores necessitatibus laboriosam dignissimos ea veritatis? 
                    Nobis molestias deserunt ducimus cumque hic molestiae quaerat, beatae vitae?
                </small>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Testimonial