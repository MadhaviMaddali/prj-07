import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import './Founders.css';
import { ExternalLink } from 'react-external-link';

export default function Founders() {
  return (
    <div className='founders'>
        <section className='founder-sections'>
            <div className='leaders'>
                <ExternalLink href='https://www.linkedin.com/in/kartikinformation'>
                <img src="https://static.wixstatic.com/media/48010f_ddc2deb3e07e45268435f1b766e557da~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18a.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>KARTIK DAMODAR</p>
                    <p>CIO</p>
                    <ExternalLink href='https://www.linkedin.com/in/kartikinformation'><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
            <div className='leaders'>
                <ExternalLink href='https://www.linkedin.com/in/aseem-sen-gupta-3a3ab318?original_referer='>
                    <img src="https://static.wixstatic.com/media/48010f_aa8979656d7340708f80d99d2a88f2d7~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18c.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>ASSEM SEN GUPTA</p>
                    <p>CO-FOUNDER</p>
                    <ExternalLink href='https://www.linkedin.com/in/aseem-sen-gupta-3a3ab318?original_referer='><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
            <div className='leaders'>
                <ExternalLink href='https://www.linkedin.com/in/kay-bhattarai-099a701a9'>
                    <img src="https://static.wixstatic.com/media/48010f_b5e3a30f530949e1a747157c584ed5cb~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18b.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>KRIPA BHATTARAI</p>
                    <p>CO-FOUNDER</p>
                    <ExternalLink href='https://www.linkedin.com/in/kay-bhattarai-099a701a9'><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
            <div className='leaders'>
                <ExternalLink href='https://www.linkedin.com/in/rushab-inderkar'>
                    <img src="https://static.wixstatic.com/media/48010f_2f8edfb7c828498982a3c8e0c10bfd29~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18E.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>RUSHABH INDREKAR</p>
                    <p>PORTFOLIO MANAGER</p>
                    <ExternalLink href='https://www.linkedin.com/in/rushab-inderkar'><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
            <div className='leaders leader-5'>
                <ExternalLink href='https://www.linkedin.com/in/ratik-gupta-381283170/'>
                    <img src="https://static.wixstatic.com/media/48010f_3f85861e85f943f9b171d87340127ea4~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18D.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>RATIK GUPTA</p>
                    <p>POTFOLIO MANAGER</p>
                    <ExternalLink href='https://www.linkedin.com/in/ratik-gupta-381283170/'><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
            <div className='leaders leader-6'>
                <ExternalLink href=''>
                    <img src="https://static.wixstatic.com/media/48010f_892fb7dcaba44a94b867a3645a508349~mv2.png/v1/fill/w_610,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_auhref/18F.png" alt="not found" />
                </ExternalLink>
                <div>
                    <p className='leader'>NIHEETH MAMIDALA</p>
                    <p>SENIOR BUSINESS</p>
                    DEVELOPMENT MANAGER
                    <ExternalLink href='https://www.linkedin.com/in/niheeth-mamidala-782b66195/'><FaLinkedinIn className='linkdn-icon'/></ExternalLink>
                </div>
            </div>
        </section>

    </div>
  )
}
