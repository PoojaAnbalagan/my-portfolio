import "./Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react';

const Navbar = () => {
    const [setMenu]=useState("home");
    

  
  return (
    <div className='navbar'>

        <div className="logo">
            <div className="logo-name">
              PA
            </div>
        </div>

        <u className="nav-menu">
            <li> <AnchorLink className="anchor-link" offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> </li>
            <li> <AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("home")}>About Me</p></AnchorLink></li>
            <li> <AnchorLink className="anchor-link" offset={50} href="#mywork"><p onClick={()=>setMenu("home")}>My Projects</p></AnchorLink></li>
            <li> <AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("home")}>Contact Me</p></AnchorLink></li>   
        </u> 

        <div className="nav-connect">
          <AnchorLink id="connect2" className='anchor-link' offset={50} href='#contact'>
          Connect With Me
          </AnchorLink>
        </div>

    </div>

  )
}

export default Navbar