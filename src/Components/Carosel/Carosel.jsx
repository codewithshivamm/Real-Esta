import React from 'react'
import './Carosel.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import card from '../../utils/slider.json'
import { SwiperControl } from '../../utils/SwiperControl'

const Carosel = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth  r-container">
            <div className=" flexColStart r-head">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Properties</span>
            </div>


            <Swiper {...SwiperControl}>
                <SliderButton/>
                {card.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={data.image} alt="home" />

                                <span className="secondaryText r-price">
                                    <span style={{color : 'orange'}}>$</span>
                                    <span>{data.price}</span>
                                </span>

                                <span className='primaryText'>{data.name}</span>
                                <span className='secondaryText'>{data.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    </section>
  )
}

export default Carosel


const SliderButton = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}
