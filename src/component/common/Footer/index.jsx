import React from 'react'
import companyLogo from "../../../assets/headerLogo.png"
import socialIcon1 from "../../../assets/socialIcon1.png"
import socialIcon2 from "../../../assets/socialIcon2.png"
import socialIcon3 from "../../../assets/socialIcon3.png"
import vector1 from "../../../assets/Vector (1).png"
import vector2 from "../../../assets/Vector (2).png"
import vector3 from "../../../assets/Vector.png"

import "./style.css"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='upper-box'>
                <div className='right-box'>
                   <div className='footer-logo-box'>
                       <img src={companyLogo} className='company-logo'/>
                       <p>Grihamate</p>
                    </div>
                    
                    <p>Your trusted partner in finding the perfect residential and commercial properties.</p>

                    <div className='social-icons'>
                       <img src={socialIcon3}/>
                        <img src={socialIcon1}/>
                       <img src={socialIcon2}/>
                    </div>
                  
                </div>
                <div className='left-box'>
                    <div className='links-box'>
                        <h1>Quick links</h1>
                        <p>Property for rent</p>
                        <p>Property for sale</p>
                        <p>About us</p>
                        <p>Contact</p>
                    </div>
                     <div className='property-box'>
                        <h1>Property Type</h1>
                        <p>Commercial Office</p>
                        <p>Retail Space</p>
                        <p>Appartments</p>
                        <p>Villas</p>
                        <p>Contact</p>
                    </div>
                     <div className='contact-box'>
                        <h1>Contact us</h1>
                        <div className='icon-text'>
                            <img src={vector1}/>
                            <p>7011769523</p>
                        </div>
                         <div className='icon-text'>
                            <img src={vector2}/>
                            <p>grihamte@gmail.com</p>
                        </div>
                         <div className='icon-text'>
                            <img src={vector3}/>
                            <p>Noida uttar pradesh</p>
                        </div>
                    </div>

                </div>

            </div>

             <div className='line'>

            </div>

            <div className='lower-box'>
               <div className='box-left'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Support</p>
               </div>
               <p>© Copyright 2024, All Rights Reserved</p>

            </div>
            
        </div>
    )
}


export default Footer;