import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import './BaseFooter.css';

export default function BaseFooter() {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    <div>
        <section className='base-footer'>
            <span data-aos='fade-up'>
                <h1>HAVE QUESTIONS?</h1>
                <h1>CONTACT US TODAY!</h1>
            </span>
            <span>
                <Link to='/Form'><button>GET IN TOUCH</button></Link>
            </span>
        </section>
    </div>
  )
}
