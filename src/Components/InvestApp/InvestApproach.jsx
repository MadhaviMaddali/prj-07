import React, { useEffect } from 'react';
import AOS  from 'aos';
import 'aos/dist/aos.css';
import './InvestApproach.css';
import {FiFilter} from 'react-icons/fi';
import {BsChevronDoubleDown} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BaseFooter from '../BaseFooter/BaseFooter';
export default function InvestApproach() {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
  return (
    <div>
        <div className="investApproach">
            <div className='parallax-effect'>
                <p data-aos='fade-up'>INVESTMENT APPROACH</p>
            </div>
            <div className='filter-animations'>
                    <span className='animation-bar-l'></span>   
                    <span className='animation-bar-s'></span>
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
                    <div className='investmentApproach-flex-conatiner'>
                        <p>CONSOLIDATED PORTFOLIO OF 10-12 COMPANIES</p>
                        <div className='multi-flex' data-aos='fade-up'>
                            <span><FiFilter className='label-filter'/><h1>1</h1></span>
                            <span className='filter-flex'>
                                <article className='filter-header'>FILTER 1: INVESTING IN BUSINESS WHERE WE BELIEVE</article>
                                <span>
                                    <aside><img src="https://cdn-icons-png.flaticon.com/128/61/61222.png" className='ok-icon' alt="not found"/> The unknowns are manageable</aside>
                                    <aside><img src="https://cdn-icons-png.flaticon.com/128/61/61222.png" className='ok-icon' alt="not found" /> The industry is stable and profitable</aside>
                                </span>
                            </span>
                        </div>
                        <div className='multi-flex' data-aos='fade-up'>
                            <span><FiFilter className='label-filter'/><h1>2</h1></span>
                            <article className='filter-header'>FILTER 2: COMPANIES THAT ARE TRADING AT REASONABLE PRICE</article>
                        </div>
                        <div className='multi-flex' data-aos='fade-up'>
                            <span><FiFilter className='label-filter'/><h1>3</h1></span>
                            <article className='filter-header'>FILTER 3: COMAPNIES THAT HAVE A SUSTAINABLE COMPETITIVE ADVANTAGE</article>
                        </div>
                        <div className='multi-flex' data-aos='fade-up'>
                            <span><FiFilter className='label-filter'/><h1>4</h1></span>
                            <article className='filter-header'>FILTER 4: COMPETENCY OF THE MANAGEMENT IN ALLOCATION OF CASH</article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='investmentApproach-graph'>
            <p>FOLLOWING IS THE PERFORMANCE OF GUARDIANS VS BSE 500</p>
            <img src="https://static.wixstatic.com/media/48010f_f65b9999bdd0406ebe1bad3b152c4290~mv2.png/v1/fill/w_918,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/16.png" alt="..." />
        </div>
        <BaseFooter/>
    </div>
  )
}
