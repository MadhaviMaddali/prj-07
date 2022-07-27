import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs';
import './Values.css'
export default function Values() {
  return (
    <div>
        <div className='img1'>
        <img src="https://static.wixstatic.com/media/48010f_eb7d9084fe2349629cbd99f74b644333~mv2.jpg/v1/fill/w_1608,h_433,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/48010f_eb7d9084fe2349629cbd99f74b644333~mv2.jpg" style={{width:'100%',height:'400px'}} alt="..." />
        <img className='logo' src="https://static.wixstatic.com/media/48010f_2bf158f001d047e295367edb742296b9~mv2.png/v1/crop/x_0,y_0,w_1184,h_761/fill/w_334,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202_PNG.png" alt="..." />
        </div>
        <div className='img2'>
        <img src="https://static.wixstatic.com/media/48010f_6be907e9801443799b825a32a1e86208~mv2.jpg/v1/fill/w_1344,h_550,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/48010f_6be907e9801443799b825a32a1e86208~mv2.jpg" style={{width:'100%',height:'700px'}} alt='...'/>
        <h2 className='h2'>IN THE MINDS OF THE CLIENT. GUARDIAN ASSET MANAGEMENT AIMS TO BE</h2>
        <hr className='underline'/>
       <h2 className='h3'>option for their financial needs.</h2>
        <h2 className='h4' >ALL GUARDIAN MUST EXHIBIT</h2>
        <ul className='aim3'>
          <li><h2><BsCheck2Circle className='icon'/>PASSION</h2></li>
          <li><h2><BsCheck2Circle className='icon'/>COMPASSION</h2></li>
        </ul>
        <ul className='aim4'>
          <li><h2><BsCheck2Circle className='icon'/>FOCUS</h2></li>
          <li><h2><BsCheck2Circle className='icon'/>CLIENT CENTRICITY</h2></li>
        </ul>
        </div>
        <h5 class="font_5" >the <span style={{color:'#D49D3C'}}>BEST</span></h5>
        <h5 class="font_6" >the <span style={{color:'#D49D3C'}}>SECOND BEST</span></h5>
        <h5 class="font_7" >the <span style={{color:'#D49D3C'}}>THIRD BEST </span></h5>      
        </div>
  )
}
