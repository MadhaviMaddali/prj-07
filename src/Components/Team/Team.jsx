import React from 'react';
import './Team.css';
import Founders from '../Founders/Founders';
import BaseFooter from '../BaseFooter/BaseFooter'

export default function Team() {
  return (
    <div>
      <div className='teams-parallax'>
        <p>OUR INVESTMENT TEAM</p>
      </div>
      <Founders/>
      <BaseFooter/>
    </div>
  )
}
