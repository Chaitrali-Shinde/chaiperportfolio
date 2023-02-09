import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';    
import { spacing } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

export default function Header() {
    return (
        <header>
            <NavBar />
            <Grid container spacing={2} paddingTop={10}>
                
            <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div>
                EDUCATION
              </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >

              <div>
              Arizona State University
              </div>
              <div>
              Master of Information Technology (Expected Graduation: May 2024)
              </div>
              <div>
              Courses: Data visualization and reporting in IT, Data in cloud for IT, Info Systems Development</div>
              <div>
              Savitribai Phule Pune University
              </div>
              <div>
              Bachelor of Computer Engineering (2017 - 2021)
              </div>
              <div>
             Courses: Data Structures and algorithms, Object-oriented programming, Computer networks, Operating systems, Database management system, Design and analysis of algorithms, Web technology, Data analytics</div>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div
               >
                TECHNICAL SKILLS
              </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >
              <div>
              Programming Languages: Java, Python, C, C++, JavaScript, SQL, MongoDB
              </div>
              <div>
              Framework/Libraries: Bootstrap, NumPy, Pandas, React JS, Spring Boot, Bokeh
              </div>
              <div>
              Tools, Databases, and OS, Platform: MySQL, Git, Windows, MacOS, Linux/Unix, Docker, AWS, Azure, GCP, Tableau              </div>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div>PROFESSIONAL EXPERIENCE </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >
              <Grid spacing={3}>
                  <div>Tata Consultancy Services (TCS) (June 2021 - July 2022)  </div>
                  <p>Engineer</p>
                  <p>
                  Provided SaaS solutions to more than 15 customers on various cloud service platforms such as AWS, Azure, and GCP for cloud migration
                  <br/>Developed a python script for automation of manual pricing efforts, boosted pricing productivity
                  <br/>Led a team of 3 for three months to revise cloud services choice according to product types, increased the SaaS
                  solution's competency
                  <br/>Researched and documented AWS and Azure services according to various business use-cases, enhance efficiency of services provided
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div>BOS Global India Private Limited (August 2020 - March 2021) </div>
                  <p>Intern</p>
                  <p>
                  Developed an application to capture screen time and monitor employee's activities during work hours
                  <br/>Reduced managing efforts by 50% by developing a web application with data analysis dashboard
                  <br/>Built window's installer in C programing language, improved installer's effectiveness by 70%
                  <br/>Programmed windows installer and web application using C, advance installer, React JS, spring boot, MySQL,
and followed agile conventions
                  </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div>RELEVANT PROJECTS </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >
              <Grid spacing={3}>
                  <div>Tourist App (Android Application)</div>
                  <p>Hack-overflow National Level Hackathon</p>
                  <p>
                  Built an android app utilizing Android studio for guiding tourist
                  <br/>Leveraged CNN image classifier to obtain 86% accuracy for an image recognition system
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div>Kick Start-up (Web Application)</div>
                  <p>Smart India Hackathon Project</p>
                  <p>
                  Implemented a web application for connecting mentors with startups and investors. Created a community
platform for startups to add job openings and for advertisement
                  <br/>Utilized React JS, Spring Boot, Docker, MySQL, and AWS to create web platform
                  <br/>Designed a recommendation system using AWS ML API to improve efficiency of system
                  <br/>
                  </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div>CO-CURRICULAR ACTIVITIES</div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >
              <div>
              Finalist in Smart India Hackathon 2020. Ministry/ Organization- Department of Information Technology and Biotechnology, Government of Karnataka, India
              </div>
              <div>
              Awarded as a runner up team in a Hackathon, Hack-overflow 1.0 Ministry/ Organization- Association of Computer Engineering
              </div>
              </Grid>
          </Grid>

          <Grid xs={6} md={5} display="flex" justifyContent="center" alignItems="center">
            <div >
              <div>POSITION OF RESPONSIBILITIES AND VOLUNTARY WORK </div> 
            </div>
          </Grid>
          <Grid xs={6} md={6} display="flex" justifyContent="center" alignItems="center">
            <Grid spacing={2} >
              <Grid spacing={3}>
                  <div>Arizona State University (October 2022- present)  </div>
                  <p>Voluntary work</p>
                  <p>
                  Lab and system setups for cloud and data lab
                  Designed and implemented on premise servers and made it available as cloud for other ASU campuses
                  </p>
              </Grid>
              <Grid spacing={3}>
              <div>National Service Scheme Club (August 2018 - August 2018) </div>
                  <p>Coordinator</p>
                  <p>
                  Organized and conducted more than ten social events under the National Service scheme club
                  </p>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
           
        </header>
    )
}