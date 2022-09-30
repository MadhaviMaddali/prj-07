import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import BaseFooter from '../BaseFooter/BaseFooter';
import './Home.css';
import Founders from '../Founders/Founders';
import VideoPlayer from 'react-simple-video-player';

export default function Home() {
  const images =[
    "https://static.wixstatic.com/media/48010f_a85011ad8b3748709f8e00d80cf93ca3~mv2.jpg/v1/fill/w_2374,h_1110,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/48010f_a85011ad8b3748709f8e00d80cf93ca3~mv2.jpg",
    "https://static.wixstatic.com/media/48010f_68aa10d2f9384dc1b7ccbbe8ecf6b2e1~mv2.jpg/v1/fill/w_1920,h_898,al_c,q_85,enc_auto/48010f_68aa10d2f9384dc1b7ccbbe8ecf6b2e1~mv2.jpg",
    "",
    "https://static.wixstatic.com/media/48010f_653f92bb202b4ee682e4ed9483fbac39~mv2.jpg/v1/fill/w_2374,h_1110,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/48010f_653f92bb202b4ee682e4ed9483fbac39~mv2.jpg"
  ];
  return (
    <section className='home-page'>
      <Fade>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>
                      <h1>GUARDIAN ASSET MANAGEMENT</h1>
                      <hr />
                      <p>Invest The Guardian Way</p>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>
                    <h1>GUARDIAN ASSET MANAGEMENT</h1>
                      <hr />
                      <p>Invest The Guardian Way</p>
                    </span>
                </div>
            </div>
            <div className="each-slide-effect third-slide">
                <div>
                    <p>FOLLOWING IS THE PERFORMANCE OF GUARDIAN VS BSE 500</p>
                    <span><img src="https://static.wixstatic.com/media/48010f_f65b9999bdd0406ebe1bad3b152c4290~mv2.png/v1/fill/w_1543,h_566,al_c,q_90,enc_auto/16.png" alt=".." /></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }} className='slide-four'>
                    <span>
                      <img src="https://static.wixstatic.com/media/48010f_2bf158f001d047e295367edb742296b9~mv2.png/v1/fill/w_668,h_432,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202_PNG.png" alt="..." />
                      <aside>
                        <p>In the mind of the client</p>
                        <p>Guardian Asset Management aims to be</p>
                        <h3>the <b>BEST</b></h3>
                        <h3>the <b>SECOND BEST</b></h3>
                        <h3>the <b>THIRD BEST</b></h3>
                        <p>option for their financial needs.</p>
                      </aside>
                    </span>
                </div>
            </div>
        </Fade>
      <div className='video-section'>
        <span>
          <article>WHO WE ARE</article> 
          <span className='status-bar large'></span>
          <span className='status-bar short'></span>
          <p>
            Guardian Asset Management Pvt.Ltd, is a SEBI registered Portfolio Management Service [PMS]-
          </p>
          <p>
            Guardian Multicap PMS is our flagship product
          </p>
          <button>The Objective</button>
          <p>
            The Objective of Guardian's PMS is to maximize client's returns, while minimizing the risk component in their investments.
          </p>
        </span>
        <span>
          <VideoPlayer
            url="https://video.wixstatic.com/video/48010f_7be5fdc8c83042bb825db0975c0c090b/480p/mp4/file.mp4"
            poster="https://static.wixstatic.com/media/48010f_7de84cabd37449b5935a456bf61a8038~mv2.png/v1/fill/w_456,h_254,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/48010f_7de84cabd37449b5935a456bf61a8038~mv2.png"
            width={450}
            height={254}
          />
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
