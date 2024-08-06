import React from 'react'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
import './Home.css'

const Home = () => {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">

          <div className="flexColStart hero-left">
                <div className="hero-tittle">
                  <h1>Discover<br /> Most Suitable<br /> Property</h1>
                  <div className="orange-circle"/>
                </div>

                <div className="flexColStart hero-des">
                <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="flexCenter search-bar">
                <HiLocationMarker color='var(--blue)' size={25}/>
                <input type="text" />
                <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                  <div className="flexColCenter stat">
                    <span><CountUp start={8880} end={9000} duration={4}/> <span>+</span></span>
                    <span className='secondaryText'>Premium Product</span>
                  </div>

                  <div className="flexColCenter stat">
                    <span><CountUp start={1950} end={2000} duration={4}/> <span>+</span></span>
                    <span className='secondaryText'>Happy Costumer</span>
                  </div>

                  <div className="flexColCenter stat">
                    <span><CountUp  end={28}/> <span>+</span></span>
                    <span className='secondaryText'>Awards Winning</span>
                  </div> 
                </div>
          </div>

          <div className="flexStart hero-right">
              <div className="image-container">
                <img src="./hero-image.png" alt="hero-img" />
              </div>
          </div>

      </div>
    </section>
  )
}

export default Home
