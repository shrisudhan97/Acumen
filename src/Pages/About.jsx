import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
// import Header from '../Components/header'
import Officemembers from '../Components/OfficeMembers'
import Aboutdept from "../Components/aboutdept"

function About(){
    return (
        <div
            className="relative"
            style={{
                background: "linear-gradient(to bottom, #2c003e, #000000)", // Dark violet to black
                minHeight: "100vh", // Ensures it covers the viewport
                color: "white", // Ensures text is visible on dark background
                
            }}
        >
            {/* <Header/> */}
            <NavBar/>
            <Aboutdept />
            <Officemembers />
            <Footer className="bg-gradient-to-b from-[rgb(15,15,17)] via-[rgb(46,60,73)] to-[rgb(52,69,85)]"/>
        </div>
    )
}

export default About