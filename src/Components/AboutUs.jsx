import React, { useEffect, useState } from "react";
import poster from '../assets/poster.png';
import { Zoom } from "react-awesome-reveal";
import stars from "../assets/stars.png";
import bottom from "../assets/horizons_train.png";  
import dumbledoreImage from '../assets/Harry_Potter/dumbledore.png';
import letter from '../assets/Harry_Potter/letter11.png';
import "../styles/AboutUs.css";

function AboutUs() {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="text-white relative bg-gradient-to-b from-[rgb(18,11,14)] via-[rgb(52,45,89)] to-[rgb(61,54,109)] overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center my-48">
                <img src={stars} alt="Stars" className="w-full object-contain scale-150" />
            </div>
            <div className="image">
                <center>
                <img
                    src={dumbledoreImage}
                    alt="Albus Dumbledore"
                    className={`about-us-image ${isScrolling ? 'move-left' : ''}`}
                />
                </center>
                <div
                    className={`letter ${isScrolling ? 'appear' : ''}`}
                    style={{ backgroundImage: `url(${letter})` }}
                ></div>
            </div>
            <div className="absolute bottom-5 left-0 w-full absolute-bottom">
                <img src={bottom} alt="Bottom Image" className="scale-150" />
            </div>
        </div>
    );
}

export default AboutUs;