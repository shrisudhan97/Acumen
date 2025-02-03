import React, { useState,useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "../styles/EventPage.css";
import Modal from "./Model.jsx";
import stars from "../assets/stars.png";
import h2 from "../assets/divider-diamond.svg"
import tech from "../assets/horizons_hogwarts.png";
import nontech from "../assets/horizons_quidditch.png";
import dividerDiamond from "../assets/divider-diamond.svg"; // Import the divider-diamond.svg
import  paper from "../assets/Harry_Potter/paper.jpg";
import  project from "../assets/Harry_Potter/project.jpg";
import  tech3 from "../assets/Harry_Potter/tech3.jpg";
import  tech4 from "../assets/Harry_Potter/tech4.jpg";
import  tech5 from "../assets/Harry_Potter/tech5.jpg";
import  non1 from "../assets/Harry_Potter/non1.jpg";
import  non2 from "../assets/Harry_Potter/non2.jpg";
import  non3 from "../assets/Harry_Potter/non3.jpg";
import  n1 from "../assets/Harry_Potter/workshop1.jpg";
import  n2 from "../assets/Harry_Potter/workshop2.jpg";
import  n3 from "../assets/Harry_Potter/workshop4.jpg";


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
       <div className="h1">
       <h1>EVENTS</h1>
       <img src={h2} alt="" />
       </div>

          <Fade top>
            <div className="house">
              {/* housesa */}
              <div className="housesa">
               
                <div className="house1">
                <div  className="Gryffindor">
                  <h1>Gryffindor (Tech)</h1>
                  <br />
                  </div>
                  <div
                          className="paper"
                          style={{
                            backgroundImage: `url(${paper})`,
                            backgroundSize: "cover",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                          }}
                          >
                        <h3>PAPER PRESENTATION</h3>
                      
                      <a href="https://forms.gle/1p1X6NQC587WWKsf6

">
                       <center>
                       <button style={{ backgroundColor: "rgb(144, 56, 56)", color: "white" }}>
  Register
</button>
                       </center>
                       </a>
                     

                  </div>
                  <div
  className="paper"
  style={{
    backgroundImage: `url(${project})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>PROJECT PRESENTATION</h3>
  
 <a href="https://forms.gle/29HKUSdY2fSgvq9d6

">
 <button style={{ backgroundColor: "rgb(144, 56, 56)", color: "white" }}>Register</button>
 </a>
</div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${tech3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
> <h3>CODATHON</h3>
 <a href="https://forms.gle/8UE8fvESDnNf8pDr7



">
 <button style={{ backgroundColor: "rgb(144, 56, 56)", color: "white" }}>Register</button>
 </a>
 
</div>
                    
                    
                </div>
                {/* Vertical white line between house1 and house2 */}
                <div className="white-line"></div>

              
               <div className="house2">
                <br />
               <div className="Hufflepuff">
                <h1>Hufflepuff (Tech)</h1>
                <br />
                </div>
                <div
  className="paper"
  style={{
    backgroundImage: `url(${tech4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>LINE FOLLOWER</h3>
  <a href="https://forms.gle/uRX22dfJoYKrUZ818

">
  <button  style={{ backgroundColor: "rgb(144, 124, 10);", color: "white"} }>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${tech5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>ROBO RACE</h3>
  <a href="https://forms.gle/8CLpxuyLnHPntjye9

">
  <button  style={{ backgroundColor: "rgb(144, 124, 10);", color: "white" }}>Register</button>

  </a>
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
                 
                  <div className="Ravenclaw">
                  <h1>Ravenclaw (Non Tech)</h1>
                  <br />
                  </div>
                  <div
  className="paper"
  style={{
    backgroundImage: `url(${non1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>SHERLOCK HOLMES</h3>
  <a href="https://forms.gle/t2y48ffCXdYWteip7

">
  <button  style={{ backgroundColor: "rgb(28, 28, 108)", color: "white" }}>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${non2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>MAKATRONS</h3>
  <a href="https://forms.gle/6nzrGDV75RdeyRkT7

">
  <button  style={{ backgroundColor: "rgb(28, 28, 108)", color: "white" }}>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${non3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>HOGWARTS QUEST</h3>
  <a href="https://forms.gle/f1vMNQaukLwxcaVH9

">
  <button  style={{ backgroundColor: "rgb(28, 28, 108))", color: "white" }}>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${tech3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>HOGWORDS</h3>
  <a href="https://forms.gle/ScLBmti7B7z1nTo88

">
  <button  style={{ backgroundColor: "rgb(28, 28, 108)", color: "white" }}>Register</button>

  </a>
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
                  <div
  className="paper"
  style={{
    backgroundImage: `url(${n3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>BATTERY TECHNOLOGY</h3>
  <a href="https://forms.gle/PtFAGZxqNgcEoG7J9

">
  <button  style={{ backgroundColor: "rgb(6, 92, 6)", color: "white" }}>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${n2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>DRONE TECHNOLOGY </h3>
  <a href="https://forms.gle/JZSCXxxNRi5SRZ8H6

">
  <button  style={{ backgroundColor: "rgb(6, 92, 6)", color: "white" }}>Register</button>

  </a>
  </div>
<div
  className="paper"
  style={{
    backgroundImage: `url(${n1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h3>PAPER PRESENTATION</h3>
  <center>
  <a href="https://forms.gle/MGQUxUUbJJLLAvKa6

">
  <button  style={{ backgroundColor: "rgb(6, 92, 6)", color: "white" }}>Register</button>

  </a>
  </center>
  </div>
                </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                  <div className="absolute bottom-5 left-0 w-full absolute-bottom">

                      <br /><br /><br /><br /><br /><br /><br />
                 <br /><br /><b><br /></b>
                 <div className="h1">
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  &nbsp;
                 <h1>ATTENTION STUDENTS .....</h1>
       <img style={{width:"550px"}} src={h2} alt="" />
       </div>
              <div className="image">
              
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