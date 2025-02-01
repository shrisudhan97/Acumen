import React, {useState} from "react"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Landing from '../Components/Landing'
// import Header from '../Components/header'
import VantaBg from '../Components/VantaBg'
import Events from '../Components/Events'
import Scrol from '../Components/Scrol'
function Home(){
    return (
        <div>
            {/* <Header/> */}
            <NavBar/>
            <Landing/>
            <AboutUs/>
            <Events/>
            <Scrol/>
            <Footer className="bg-gradient-to-b from-[rgb(15,15,17)] via-[rgb(46,60,73)] to-[rgb(52,69,85)]"/>
        </div>
       
    );
}

export default Home;
