import React from 'react'
import "./Home.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <div id='home' className='home'>
        <h1><span>I'm Pooja Anbalagan, </span>
        Data Scientist, in Sri Lanka</h1>

        <p>A passionate Data Science student at Sabaragamuwa University, Sri Lanka. I love turning data into insights and building intelligent solutions. Currently exploring ML, AI, and big data—always learning, always coding!"</p>

        <div className="home-action">
          <div className="home-connect">
            <AnchorLink id="connect1" className='anchor-link' offset={50} href='#contact'>
              Connect With Me
              </AnchorLink>
          </div>
          
       

        <div className="resume">My Resume </div>

 </div>

    </div>
  )
}

export default Home