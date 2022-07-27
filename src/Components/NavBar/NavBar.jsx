import React from 'react';
import { BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';
import './NavBar.css';
import Home from '../Home/Home';
import Team from '../Team/Team';
import InvestApproach from '../InvestApp/InvestApproach';
import Form from '../Form/Form';
export default function NavBar() {
  return (
      <Router>
        <div>
            <nav className='main-navbar'>
                <div className='logo'>
                    <NavLink to='/' className='active'>
                        <img src="https://static.wixstatic.com/media/48010f_2bf158f001d047e295367edb742296b9~mv2.png/v1/fill/w_100,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202_PNG.png" alt="..." />
                        <h3>GUARDIAN ASSET MANAGEMENT</h3>
                        <p><i>Invest The Guardian Way</i></p>
                    </NavLink>
                </div>
                <div className='media-links'>
                    <span className='media-links-buttons'>
                        <button>INVEST NOW</button>
                        <button><NavLink to='/form' className='active'>GET IN TOUCH</NavLink></button>
                    </span>
                    <span className='media-pages-links'>
                        <ul>
                            <li><NavLink to='/investApproach' className='active'>INVESTMENT APPROACH</NavLink></li>
                            <li><NavLink to='/team' className='active'>TEAM</NavLink></li>
                            <li><NavLink to='/investApproach'className='active'>PRODUCT</NavLink></li>
                            <li><NavLink to='/'className='active'>VALUES</NavLink></li>
                            <li><NavLink to='/'className='active'>DIFFERENTIATOR</NavLink></li>
                            <li><NavLink to='/'className='active'>BLOG</NavLink></li>
                        </ul>
                    </span>
                </div>
            </nav>
        </div>
        <Routes><Route path='/' element={<Home/>}/></Routes>
        <Routes><Route path='/team' element={<Team/>}/></Routes>
        <Routes><Route path='/investApproach' element={<InvestApproach/>}/></Routes>
        <Routes><Route path='/form' element={<Form/>}/></Routes>
    </Router>
  )
}
