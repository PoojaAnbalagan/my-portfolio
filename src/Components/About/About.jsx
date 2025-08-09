import React from 'react'
import "./About.css"


const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>  About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a second-year Data Science undergraduate at Sabaragamuwa University of Sri Lanka, with a deep curiosity for learning and a passion for turning data into meaningful insights. I enjoy solving real-world problems through creative and logical thinking.</p>

                        <p>So far, I’ve worked on two key projects that reflect my growth: a Python-based command-line quiz game that sharpened my logic and problem-solving skills, and a pet adoption website built using React and Django, which introduced me to full-stack development and real-world user needs.</p>
                   
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Django</p><hr style={{ width: "40%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About