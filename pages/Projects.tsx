import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="resume-section">
            <h2>RELEVANT PROJECTS</h2>
            <div className="resume-work-experience">
                <h3>Tourist App (Android Application)</h3>
                <p>May 2020 - June 2020</p>
                <p>Hack-overflow National Level Hackathon</p>
                <p>Built an android app utilizing Android studio for guiding tourist
                <br/>
                Leveraged CNN image classifier to obtain 86% accuracy for an image recognition system<br/>
                </p>
                <h3>Kick Start-up (Web Application)</h3>
                <p>February 2020 - May 2020</p>
                <p>Smart India Hackathon Project</p>
                <p>
                Implemented a web application for connecting mentors with startups and investors. Created a community 
                platform for startups to add job openings and for advertisement<br/>
                Utilized React JS, Spring Boot, Docker, MySQL, and AWS to create web platform<br/>
                Designed a recommendation system using AWS ML API to improve efficiency of system<br/>
                </p>
            </div>
            </div>
        </header>
    )
}