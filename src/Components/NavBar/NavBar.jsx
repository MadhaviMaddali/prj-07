import React from 'react';
import {Link} from'react-router-dom';
import './NavBar.css';
export default function NavBar() {
  return (

        <div>
            <nav className='main-navbar'>
                <div className='logo'>
                    <img src="https://static.wixstatic.com/media/48010f_2bf158f001d047e295367edb742296b9~mv2.png/v1/fill/w_100,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202_PNG.png" alt="..." />
                    <h1>GUARDIAN ASSET MANAGEMENT</h1>
                    <p><i>Invest The Guardian Way</i></p>
                </div>
                <div className='media-links'>
                    <span className='media-links-buttons'>
                        <button>INVEST NOW</button>
                        <button>GET IN TOUCH</button>
                    </span>
                    <span className='media-pages-links'>
                        <ul>
                            <li>INVESTMENT APPROACH</li>
                            <li>TEAM</li>
                            <li><Link to="/product">PRODUCT</Link></li> 
                            <li><Link to="/values">VALUES</Link></li>
                            <li>DIFFERENTIATOR</li>
                            <li>BLOG</li>
                        </ul>
                    </span>
                </div>
            </nav>
       </div>

  )
}
