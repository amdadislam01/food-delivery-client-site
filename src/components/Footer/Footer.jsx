import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Zomato.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fugit quod expedita dignissimos eveniet eos, molestiae libero modi. Corporis, porro enim non perspiciatis nisi eos?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+013456789</li>
                <li>contact@zomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Zomato.com - All Right Reserved</p>
      <p>Developed By Amdad Islam</p>
    </div>
  )
}

export default Footer
