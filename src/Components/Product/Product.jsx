import React from 'react'
import './Product.css'
export default function Product() {
  return (
    <div>
        <div className='first_img'>
        <img src="https://static.wixstatic.com/media/nsplsh_e3555ec28da142b6b192cd9993b9b526~mv2.jpg/v1/fill/w_1171,h_937,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_e3555ec28da142b6b192cd9993b9b526~mv2.jpg" style={{width:'100%',height:'1000px'}} alt="..." />
        <h1 className='h1'>PRODUCT</h1>
        </div>
        <div className='img_centre'>
        <img src="https://static.wixstatic.com/media/48010f_6f0b13a5d1ae4ce2b5053f3e5a5c55b8~mv2.png/v1/fill/w_838,h_751,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cc_PNG.png" alt="..." />
        </div>
        <div class="container">
        <img src="https://static.wixstatic.com/media/48010f_eb7d9084fe2349629cbd99f74b644333~mv2.jpg/v1/fill/w_1171,h_355,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/48010f_eb7d9084fe2349629cbd99f74b644333~mv2.jpg"  style={{width:'100%',height:'400px'}} alt="..." />
        <button className='btn'>GET IN TOUCH</button>
        <h1 className='text'>HAVE QUESTIONS?<br/>CONTACT US TODAY!</h1>
        </div>
        </div>
  )
}
