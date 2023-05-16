import React from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'


import 'swiper/css';


function Slider(props) {

    return (
        <>
      
      <Swiper className='relative group'
       modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{nextEl:".button-next-slide",
                    prevEl:".button-prev-slide"}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <SwiperSlide> 
        <div className="slider"></div>
            <div className="image ">
                <img src="image/slider-1.png" alt="" />
                <div className="title-content">
                    <h2>Don't Miss amzing<br/> grocery deals</h2>
                    <p className='mt-3'>Save up to 50% off on Your first order</p>
                    <form action=""  className='d-flex'>
                        <input type="email" placeholder='your email adress' className='myinput'/>
                        <button className='btn mbtn'>Subscribe</button>
                    </form>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> <div className="image ">
                <img src="image/slider-2.png" alt="" />
                <div className="title-content">
                    <h2>Don't Miss amzing<br/> grocery deals</h2>
                    <p className='mt-3'>Save up to 50% off on Your first order</p>
                    <form action=""  className='d-flex'>
                        <input type="email" placeholder='your email adress' className='myinput'/>
                        <button className='btn mbtn'>Subscribe</button>
                    </form>

                </div>
            </div>
            </SwiperSlide>
     
     <div className='button-next-slide'>
     <HiOutlineArrowNarrowRight/>
     </div>
     
     <div className='button-prev-slide'>
     <HiOutlineArrowNarrowLeft/>
     </div>
    </Swiper>
        </>
    );
}

export default Slider;