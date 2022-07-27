import React from 'react'
import BaseFooter from '../BaseFooter/BaseFooter';
import './Home.css';
import Founders from '../Founders/Founders';

export default function Home() {
  return (
    <section className='home-page'>
      <div className='video-section'>
        <span>
          <article>WHO WE ARE</article> 
          <p>
            Guardian Asset Management Pvt.Ltd, is a SEBI registered Portfolio Management Service [PMS]-
          </p>
          <p>
            Guardian Multicap PMS is our flagship product
          </p>
          <button>The Objective</button>
          <p>
            The Objective of Guardian's PMS is to maximize client's returns, while minimizing the risk component n their investments.
          </p>
        </span>
        <span>
          {/* This span is for video which needs to be added later on  */}
        </span>
      </div>
      <div className='invest-guardian'>
        <p>INVEST THE GUARDIAN WAY</p>
        <hr />
      </div>
      <div>
        {/* leaders linkedin which needs to be added which has been created while creating the team page ..... */}
      </div>
      <div className='imported-founders'>
        <h1>OUR INVESTMENT TEAMS</h1>
        <Founders/>
      </div>
      <BaseFooter/>
    </section>
  )
}
