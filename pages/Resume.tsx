import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';    

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
        </Grid>
           
        </header>
    )
}