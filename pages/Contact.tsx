import Link from "next/link";
import React from "react";  
import NavBar from "../components/NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
            <div className="resume-header">
                <h1>Chaitrali Ganesh Shinde</h1>
                <a href="https://linkedin.com/in/chaitrali-shinde">linkedin.com/in/chaitrali-shinde</a><br/>
                <a href="https://github.com/Chaitrali-Shinde">github.com/Chaitrali-Shinde</a>
                <p>cshinde2@asu.edu</p>
                <p>602-816-2209</p>
                </div>
            </div>

        </header>
    )
}