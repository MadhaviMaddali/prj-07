import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Team.css';
import Founders from '../Founders/Founders';
import BaseFooter from '../BaseFooter/BaseFooter'

export default function Team() {
  useEffect(()=>{
    AOS.init({duration:2500})
  },[]);
  return (
    <div>
      <div className='teams-parallax'>
        <p data-aos='fade-up' data-aos-easing='ease-in-sine'>OUR INVESTMENT TEAM</p>
      </div>
      <Founders/>
      <BaseFooter/>
    </div>
  )
}
