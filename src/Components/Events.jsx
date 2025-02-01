import React, { useState,useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/EventPage.css";
import Modal from "./Model.jsx";
import stars from "../assets/stars.png";
import tech from "../assets/horizons_hogwarts.png";
import nontech from "../assets/horizons_quidditch.png";
import dividerDiamond from "../assets/divider-diamond.svg"; // Import the divider-diamond.svg
import '../styles/Title.css';

import poster from '../assets/poster.png';
import { Zoom } from "react-awesome-reveal";

import bottom from "../assets/horizons_train.png";  
import dumbledoreImage from '../assets/Harry_Potter/witch11.png';
import letter from '../assets/Harry_Potter/letter111.png';
import "../styles/AboutUs.css";

function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [Contest, setContest] = useState(1);

  const handleClick = (event) => {
    setIsOpen((current) => !current);
    setContest(Number(event.target.id));
  };
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
    <>
      <div className="text-white relative bg-gradient-to-b from-[rgb(18,12,15)] via-[rgb(42,39,40)] to-[rgb(46,45,45)] overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full py-40" id="events">
          <div className="absolute justify-center bg-cover bg-center absolute-bottom">
            <img src={stars} alt="Bottom Image" className="w-full object-contain scale-125" />
          </div>
          
          {/* Technical Events */}
       

          <Fade top>
            <div className="house">
              {/* housesa */}
              <div className="housesa">
               
                <div className="house1">
                <div className="Gryffindor">
                  <h1>Gryffindor</h1>
                  <br />
                  </div>
                    <div className="paper">
                      <h3>PAPER PRESENTATION</h3>
                      <button>Register</button>
                    </div>
                    <div className="paper">
                      <h3>PROJECT PRESENTATION</h3>
                      <button>Register</button>
                    </div>
                    <div className="paper">
                      <h3>PROJECT PRESENTATION</h3>
                      <button>Register</button>
                    </div>
                    
                    
                </div>
                {/* Vertical white line between house1 and house2 */}
                <div className="white-line"></div>

              
               <div className="house2">
                <br />
               <div className="Hufflepuff">
                <h1>Hufflepuff</h1>
                <br />
                </div>
                  <div className="paper">
                    <h3>PAPER PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                  <div className="paper">
                    <h3>PROJECT PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                </div>
               </div>
              
              {/* Horizontal divider between housesa and housesb */}
              <div className="divider">
                <img 
                  src={dividerDiamond} 
                  alt="Divider" 
                  className="divider-image" 
                />
              </div>

              {/* housesb */}
              <div className="housesb">
                
                  <div className="house3">
                    <br />
                  <div className="Ravenclaw">
                  <h1>Ravenclaw</h1>
                  <br />
                  </div>
                  <div className="paper">
                    <h3>PAPER PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                  <div className="paper">
                    <h3>PROJECT PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                </div>

                {/* Vertical white line between house1 and house2 */}
                <div className="white-line1"></div>

                
                  <div className="house4">
                <br />
                  <div className="Slytherin">
                  <h1>Slytherin</h1>
          
                
                  </div>
                  <br />
                  <div className="paper">
                    <h3>PAPER PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                  <div className="paper">
                    <h3>PROJECT PRESENTATION</h3>
                    <button>Register</button>
                  </div>
                </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                  <div className="absolute bottom-5 left-0 w-full absolute-bottom">

                      <br /><br /><br /><br /><br /><br /><br />
                  <h1>ATTENTION STUDENTTS</h1><br /><br /><b><br /></b>
              <div className="image">
                      <center>
                      
                      </center>
                      <div
                          className={`letter ${isScrolling ? 'appear' : ''}`}
                          style={{ backgroundImage: `url(${letter})`,marginTop:"70px" }}
                      ></div> &nbsp;
                      <img
                          src={dumbledoreImage}
                          alt="Albus Dumbledore"
                          className={`about-us-image ${isScrolling ? 'move-left' : ''}`}
                        
                      />
                  </div>
                  </div>
                  
              </div>
             
          </Fade>

          <div className="absolute bottom-5 left-0 w-full absolute-bottom">
            <img src={tech} alt="Bottom Image" className="scale-150" />
          </div>
        </div>
      </div>

              <div className="text-white relative bg-gradient-to-b from-[rgb(18,11,14)] via-[rgb(52,45,89)] to-[rgb(61,54,109)] overflow-hidden">
                 
                  
              </div>
    </>
  );
}

export default Events;