import React from 'react';
import {ExternalLink} from 'react-external-link'
import './Footer.css';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn,FaFacebookF,FaYoutube} from 'react-icons/fa';
import {BiCopyright} from 'react-icons/bi';
import {IoCallOutline,IoMailOutline,IoLocationOutline} from 'react-icons/io5';

export default function Footer() {
  return (
    <div>
        <div className='main-footer'>
            <div className='footer-part-1'>
                <img src="https://static.wixstatic.com/media/48010f_2bf158f001d047e295367edb742296b9~mv2.png/v1/fill/w_200,h_132,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%202_PNG.png" alt="...." />
                <h3>GUARDIAN ASSET MANAGEMENT</h3>
                <p>Invest The Guardian Way</p>
            </div>
            <div className='footer-part-2'>
                <h2>QUICK LINKS</h2>
                <div className='footer-pages-links'>
                    <span className='footer-sublink-1'>
                        <ul>
                            <li>Investment Approach</li>
                            <li>Team</li>
                            <li>Product</li>
                            <li>Values</li>
                            <li>Differentiator</li>
                        </ul>
                    </span>
                    <span className='footer-sublink-2'>
                        <ul>
                            <li>Blog</li>
                            <li>Get In Touch</li>
                            <li>Download Brochure</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className='footer-part-3'>
                <h2>CONTACT US</h2>
                <div className='contact'>
                    <span className='mobile-icon'><IoCallOutline className='contact-icons'/></span>
                    <span >
                        <p>040 48539417</p>
                        <p>7093298222</p>
                    </span>
                </div>
                <div className='contact-mail'>
                    <span className='mail-icon'><IoMailOutline className='contact-icons'/></span>
                    <span>gam@gcia.in</span>
                </div>
                <div className='contact-address'>
                    <span className='location-icon'><IoLocationOutline className='contact-icons'/></span>
                    <span>
                        <ul>
                            <li>4th Floor,SAHA Building,</li>
                            <li>8-2-616/1,Road No11,</li>
                            <li>Banjara Hills,</li>
                            <li>Hyderabad-500034</li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
        <div className='sub-footer'>
            <span className='copy-rights'>
                <p><BiCopyright/>2021 Guardian Asset Management.All Rights Reserved</p>
            </span>
            <span className='social-media-links'>
                <ExternalLink href='https://twitter.com/GuardianCapita3'>
                 <BsTwitter className='social-media-icons'/>
                </ExternalLink>
                <ExternalLink href='https://www.linkedin.com/company/guardian-capital-investment-advisors/'>
                 <FaLinkedinIn className='social-media-icons'/>
                </ExternalLink>
                <ExternalLink href='https://www.facebook.com/gcinvestments.in/'>
                 <FaFacebookF className='social-media-icons'/>
                </ExternalLink>
                <ExternalLink href='https://www.instagram.com/guardiancapital/'>
                 <BsInstagram className='social-media-icons'/>
                </ExternalLink>
                <ExternalLink href='https://www.youtube.com/channel/UCoRYbNK4TebZcBbNR3-THbw'>
                 <FaYoutube className='social-media-icons'/>
                </ExternalLink>
            </span>
        </div>
    </div>
  )
}
