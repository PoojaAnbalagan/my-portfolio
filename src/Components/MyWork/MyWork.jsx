import React from 'react'
import { useRef, useEffect } from 'react';
import "./MyWork.css"
import vid_1 from "../../assets/vid_1.mp4"
import vid_2 from "../../assets/vid_2.mp4"




const MyWork = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        // Preload video for smoother playback
        video.load();

        // Handle the loop transition
        const handleTimeUpdate = () => {
            // Add a small buffer (0.5s) before the end to restart
            if (video.currentTime > video.duration - 0.5) {
                video.currentTime = 0;
                video.play().catch(e => console.log('Autoplay prevented:', e));
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);


    return (
        <div id='mywork' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <p>Here are two of the projects I’ve completed during my studies, each helping me explore different areas of software development. From building a simple Python quiz game to developing a full-stack pet adoption website, these projects reflect my growth, curiosity, and passion for learning through hands-on experience.</p>
            </div>
            <div className="mywork-cards">
                <div className="mywork-card">
                    <div className="mywork-card-title">
                        Python Console Quiz Application
                    </div>

                    {/* <div className="mywork-card-img">
                        <img src={pro_1_1} alt="" />
                        <img src={pro_1_3} alt="" />
                        <img src={pro_1_2} alt="" />
                        <img src={pro_1_4} id="image" alt="" />
                    </div> */}
                    <video ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        preload="auto" className='vid_2'
                    >
                        <source src={vid_2} type="video/mp4" />

                    </video>
                    <div className="mywork-card-para">
                        This is my first-year, first-ever Python console project, a quiz application designed primarily for teenagers in a school setting. The quiz features 5 fixed questions randomly selected from a hardcoded list. Users interact by typing their answers directly into the console. Each question is worth 20 marks, for a total possible score of 100. Players enter their index number, name, and age at the start, and at the end, the program displays their final score and ranking. This project helped me build foundational programming skills and gain confidence in creating interactive command-line applications. All code repositories for this project are hosted on GitHub.
                    </div>
                    <div className="github-link"><h3>| View on GitHub |</h3>
                        <a href="https://github.com/PoojaAnbalagan/QUIZ_GAME_PA.git" target='_blank'><p>Click Me</p></a>
                    </div>
                </div>


                <div className="mywork-card">
                    <div className="mywork-card-title">
                        Barking Shelter – Capstone Project
                    </div>
                    <div className="mywork-card-img" id='card-2'>
                        <video ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            preload="auto" className='vid_1'
                        >
                            <source src={vid_1} type="video/mp4" />

                        </video>



                    </div>
                    <div className="mywork-card-para">
                        This is a full-stack Pet Adoption Website developed as my first-year capstone project, combining React JS for the frontend and Django with SQLite3 for the backend. The platform allows users to explore pet dog profiles, submit seller and feedback forms, read a pet care guide, and access a veterinary directory. It also features a user registration and login system for basic authentication. I handled both frontend and backend development, gaining hands-on experience in integrating dynamic UI with database-driven logic. All code repositories for this project are hosted on GitHub.
                    </div>
                    <div className="github-link"><h3>| View on GitHub |</h3>
                        <a href="https://github.com/PoojaAnbalagan/Barking-Shelter.git" target='_blank'><p>Click Me</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork