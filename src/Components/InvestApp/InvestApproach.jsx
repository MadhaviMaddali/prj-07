import React from 'react';
import './InvestApproach.css';
import {FiFilter} from 'react-icons/fi';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function InvestApproach() {
  return (
    <div>
        <div className="investApproach">
            <div className='parallax-effect'>
                <p>INVESTMENT APPROACH</p>
            </div>
            <div className='filter-animations'>
                <p>GUARDIAN PMS IS A MULTI-CAP LONG TERM FOCUSED FUND WHICH IS HIGHLY CONCENTRATED</p>
                <p>GUARDIAN CAPITAL BELIEVES THE FOUR FILTER APPROACH FOCUSES ON REDUCING THE CLIENT’S RISK OF LOSING MONEY AND IN TURN HELPS THE CLIENT OUTPERFORM THE MARKET</p>
                <div className='stocks'>
                    <div className='stock-icons'>
                        <span className='stock-header'>STOCKS</span>
                        <span className='stock-down-arrow'>
                            <ul>
                                <li><BsChevronDoubleDown/></li>
                                <li><BsChevronDoubleDown/></li>
                                <li><BsChevronDoubleDown/></li>
                                <li><BsChevronDoubleDown/></li>
                            </ul>
                        </span>
                        <span className='stock-filter'><FiFilter className='filter-icon'/></span>
                    </div>
                    <div>
                        <p>CONSOLIDATED PORTFOLIO OF 10-12 COMPANIES</p>
                        <div>
                            <span><FiFilter>1</FiFilter></span>
                            <span>
                                <li>FILTER 1: INVESTING IN BUSINESS WHERE WE BELIEVE</li>
                                <span>The unknowns are manageable</span>
                                <span>The industry is stable and profitable</span>
                            </span>
                        </div>
                        <div>
                            <span><FiFilter>2</FiFilter></span>
                            <span>FILTER 2: COMPANIES THAT ARE TRADING AT REASONABLE PRICE</span>
                        </div>
                        <div>
                            <span><FiFilter/></span>
                            <span>FILTER 3: COMAPNIES THAT HAVE A SUSTAINABLE COMPETITIVE ADVANTAGE</span>
                        </div>
                        <div>
                            <span><FiFilter/></span>
                            <span>FILTER 4: COMPETENCY OF THE MANAGEMENT IN ALLOCATION OF CASH</span>
                        </div>
                    </div>
                    <div>
                        <p>FOLLOWING IS THE PERFORMANCE OF GUARDIANS VS BSE 500</p>
                        <div>
                            <span>GUARDIAN</span>
                            <span>BSE</span>
                        </div>
                        <img src="https://static.wixstatic.com/media/48010f_f65b9999bdd0406ebe1bad3b152c4290~mv2.png/v1/fill/w_918,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16.png" alt="..." />
                    </div>
                    <div>
                        <span>
                            <h1>HAVE QUESTIONS?</h1>
                            <h1>CONTACT US TODAY!</h1>
                        </span>
                        <span>
                            <Link to='/form'><button>GET IN TOUCH</button></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
