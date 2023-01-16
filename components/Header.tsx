import Link from "next/link";
import React from "react";  
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div style={{width: 500, height: 500, color: "black", paddingTop: "4%"}}>
                    <img style={{borderRadius: '50%'}}  src="/images/chaitrali.jpg" width={450} height={450} alt="Chaitrali"  /> 
                </div>
                <div style={{paddingTop: "8%"}}>
                    <b className="hello">Hello</b>
                    <p style={{fontSize:"20px"}}><b>A Bit About Me</b></p>
                    <p style={{fontFamily: "Calibri Light", fontSize: "15px"}}>I'm a paragraph. Click here to add your own text and edit me.
                    <br/>I'm a great place for you to tell a story and let your
                    <br/>users know a little more about you</p>
                    <Link href={"/Resume"}><button style={{backgroundColor:"#ffa027", cursor: "pointer"}}>Resume</button></Link>
                    <Link href={"/Projects"}><button style={{backgroundColor:"#ff2a2a", margin: "10px", cursor: "pointer"}}>Projects</button></Link>
                    <Link href={"/Contact"}><button style={{backgroundColor:"#7FD7DD", cursor: "pointer"}}>Contact</button></Link>
                </div>
            </div>
            
        </header>
    )
}