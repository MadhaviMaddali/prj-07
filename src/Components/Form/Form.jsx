import React from 'react';
import './Form.css';
import {CgAsterisk} from 'react-icons/cg';

export default function Form() {
  return (
    <div className='forms-bg'>
        <div className="form-style">
            <p className='header'>REACH OUT TO US</p>
            <p>Reach out to us for your investment requirements or any question!</p>
            <form action="" className='form'>
                <p>Select user (required)<CgAsterisk className='asterick'/></p>
                <ul>
                    <li><input type="checkbox" />Distributor</li>
                    <li><input type="checkbox" />Investor</li>
                    <li><input type="checkbox" />Subscribe to distributor</li>
                </ul>
                <span className='form-input'>
                    <input type="text" placeholder='Full Name' id='inputID'/>
                    <input type="email" placeholder='Email' id='inputID'/>
                    <input type="text" placeholder='Phone' id='inputID'/>
                    <input type="text" placeholder='Subjcet' id='inputID'/>
                    <input type="textarea" placeholder='Your Message' className='message' id='inputID'/>
                    <input type="Submit" value='SUBMIT' className='submit-btn'/>
                </span>
            </form>
        </div>
    </div>
  )
}
