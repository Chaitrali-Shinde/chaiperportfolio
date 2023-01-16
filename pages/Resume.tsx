import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="resume-section">
            <h2>EDUCATION</h2>
            <div className="resume-education">
                <h3>Master of Information Technology</h3>
                <p>Expected December 2024</p>
                <p>Arizona State University</p>
                <p>Tempe, AZ, USA</p>
                <p>Courses: Data visualization and reporting in IT, Data in cloud for IT, Info Systems Development</p>
            </div>
            <div className="resume-education">
                <h3>Bachelor of Computer Engineering</h3>
                <p>December 2021</p>
                <p>Savitribai Phule Pune University</p>
                <p>Pune, Maharashtra, India</p>
                <p>Courses: Data Structures and algorithms, Object-oriented programming, Computer networks, Operating systems, Database management system, Design and analysis of algorithms, Web technology, Data analytics</p>
            </div>
            </div>
            <div className="resume-section">
                <h2>TECHNICAL SKILLS</h2>
                <p>Programming Languages: Java, Python, C, C++, JavaScript, SQL, MongoDB</p>
                <p>Framework/Libraries: Bootstrap, NumPy, Pandas, React JS, Spring Boot, Bokeh</p>
                <p>Tools, Databases, and OS, Platform: MySQL, Git, Windows, MacOS, Linux/Unix, Docker, AWS, Azure, GCP, Tableau</p>
            </div>
            <div className="resume-section">
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <div className="resume-work-experience">
                <h3>Engineer</h3>
                <p>June 2021 - July 2022</p>
                <p>Tata Consultancy Services (TCS)</p>
                <p>
                Provided SaaS solutions to more than 15 customers on various cloud service platforms such as AWS, Azure, and GCP for cloud migration
                <br/>Developed a python script for automation of manual pricing efforts, boosted pricing productivity
                <br/>Led a team of 3 for three months to revise cloud services choice according to product types, increased the SaaS 
                solution's competency
                <br/>Researched and documented AWS and Azure services according to various business use-cases, enhance 
                efficiency of services provided
                </p>
                <h3>Intern</h3>
                <p>August 2020 - March 2021</p>
                <p>BOS Global India Private Limited</p>
                <p>
                PDeveloped an application to capture screen time and monitor employee's activities during work hours
                <br/>Reduced managing efforts by 50% by developing a web application with data analysis dashboard
                <br/>Built window's installer in C programing language, improved installer's effectiveness by 70%
                <br/>Programmed windows installer and web application using C, advance installer, React JS, spring boot, MySQL, 
                and followed agile conventions
                </p>
            </div>
            </div>
        </header>
    )
}