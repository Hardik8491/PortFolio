import React from 'react'
import './Header.css'
import Socialdata from './SocialData'
import profile from './../../assets/profile.png'

const Header = () => {
  return (

      <header id="header">
        <div className="container header__container">
          <div className="header__profile">
            <img src={profile} alt="profile" />
          </div>
          <h3>User Name</h3>
          <p>
            that is my new website for a introduction and
            like this website so subscrive and give me project and like good .thankyu for Reading!

          </p>
   <div className="header__cta">
   <a href="#contact" className='btn primary'>Let's Talk</a>
    <a href="#portfolio" className='btn light'>My Work</a>
   </div> 

  <div className="socials">
{Socialdata.map(item=>< a key={item.id} href={item.link}
target="_blank " rel="noopener noreferrer"> {item.icon} </a>)}
  </div>
   
        </div>
      </header>
  )
}

export default Header
