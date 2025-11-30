import React from 'react'
import logo from '../../../assets/images/logo.png';
import colors from '../../../assets/styles/colors.js';
export const SliderSection = () => {
    const handleScroll = () => {
    const section = document.getElementById('special-units');
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return(
 <section className="home">
      <div className="home-content">
        <img src={logo} alt="home slider" className="home-logo" />
        <p className="home-text">مرحبا بك في مؤسسة الباب الأوثق</p>
        <button
        onClick={handleScroll}
          className="home-btn"
          style={{
            backgroundColor: colors.gold,
            color: colors.white,
          }}
        >
           تصفح عروضنا العقارية
         
        </button>
      </div>
    </section>
   )
  }
