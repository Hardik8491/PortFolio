import React from 'react'
import AboutImage from './../../assets/profilepng.png'
import { data } from 
'./data'
import './About.css'

import Card from '../../Components/Cards/Card'
const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">

            {
              data.map(item => (

                <Card key={item.id} className="about__card"
                  Children= {
                    <>
                  <span className="About__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                  </>
                }
                  />

                
                // <h1>{item.title}</h1>

              ))
            }
          </div>


          <p>
            something accomplished, especially by superior ability, special effort, great courage, etc.; a great or heroic deed:
            his remarkable achievements in art.
            the act of achieving; attainment or accomplishment:
            the achievement of one's object.</p><p>
            Heraldry. the full display of the armorial bearings of an individual or corporation.
            Digital Technology. a title or icon associated with a user profile or account that indicates the person's skill or rank in an online community, especially on a gaming platform.</p>

        </div>


      </div>
    </section>
  )
}

export default About
