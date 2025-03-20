import React from 'react'
import './Footer.css'
import {assets} from '../assets/assets'


const Footer = () => {
  return (
    <div>
        <div className="play-store">
            <img src={assets.app_store} alt='at'/>
            <img src={assets.play_store} alt='at' />
        </div>
        <div className="Footer-content">
            <div className='main'>
            <div className="Footer-content-logo" >
                <img src={assets.logo} alt='logo' className='tomoto' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ullam perspiciatis! Facilis cupiditate ullam magnam iure atque eos quibusdam, possimus veniam? Quasi dignissimos quia ex, aliquid minima alias voluptate quaerat.</p>
           
            <div className="Footer-logo">
                <img src={assets.facebook_icon} alt='face' className='logo-icon
                '/>
                <img src={assets.linkedin_icon} alt='face' className='logo-icon
                '/>
                <img src={assets.twitter_icon} alt='face' className='logo-icon
                '/>
            </div>
            </div>
            <div className="Footer-company">
                <h1>Company</h1>
                <ul>
                    <li>home</li>
                    <li>Contact</li>
                    <li>Mobile-app</li>
                    <li>About-us</li>
                </ul>
                </div>

                <div className="Footer-touch">
                    <h1>Get in Touch</h1>
                    <li>appusingh423@gmail.com</li>
                    <li>+91 9876895434</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer