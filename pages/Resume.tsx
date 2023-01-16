import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Resume() {
    return (
        <section id="about" className="dark-bg">
            <NavBar/>
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UX/UI Design"
                     
                        description="I create design  products with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="Web Design"
                       
                        description="I develop Front-End with coding super smooth."
                        projects={10} />
                    <AboutCard
                        title="Mobile"
                        
                        description="I develop cross-platform mobile applications."
                        projects={7} />
            </div>
            </div>
            <Footer/>
        </section>
    )
}
type Props = {
    title: string,
    description: string,
    projects: number
}
function AboutCard ({title, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}
