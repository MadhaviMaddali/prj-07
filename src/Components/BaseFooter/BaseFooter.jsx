import React from 'react'
import { Link } from 'react-router-dom'
import './BaseFooter.css';

export default function BaseFooter() {
  return (
    <div>
        <section className='base-footer'>
            <span>
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
