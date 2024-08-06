import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="innerWidth paddings flexCenter f-container">
        {/* left-side  */}

            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="logo" width={120} />

                <span className='secondaryText'>
                Our vision is to make all people <br />
                the best place to live for them.
                </span>
            </div>

        {/* right-side */}

            <div className="flexColStart r-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Gurugram, Haryana 12101</span>

                <div className="flexStart f-menu">
                    <span>About</span>
                    <span>Contact</span>
                    <span>Service</span>
                    <span>Properties</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
