import React, { useState } from "react";
import "../styles/dev.css";
import * as Icon from "react-bootstrap-icons";
import stars from "../assets/stars.png";
import bottom from "../assets/horizons_village.png";

function Developers() {
  return (
    <div className="text-white relative bg-gradient-to-b from-topColor via-middleColor to-bottomColor">
      <div className="absolute bottom-32 bg-cover bg-center my-12" >
      <img src={stars} alt="Bottom Image"style={{ transform: "scale(2)", width: "100%", height: "auto" }} className="pb-20"/>
      </div>
  <h1 className="text-3xl md:text-5xl font-bold text-red-500 font-harry text-center pt-10"> 2025 </h1>

  <div className="max-w-[1240px] mx-auto flex flex-wrap justify-center gap-4">
  <div class="card w-[300px] flex flex-col items-center">
  <div class="img" className="flex justify-center">
      <img src={require("../assets/developers/boobathi.jpg")} className="h-32 object-cover object-top" />
    </div>

    <div class="infos pt-2">
      <div class="name">
        <h2>Boobathi Raja</h2>
        <h4>Developer & Designer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://www.instagram.com/_.boobathi._/">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/boobathirajakm/">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="https://x.com/kecblindspots">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/Boobathi-13">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>

  <div class="card w-[300px] flex flex-col items-center">
   <div class="img" className="flex justify-center">
      <img src={require("../assets/developers/sudhan.jpg")} className="h-32 object-cover object-top" />
    </div>
    <div class="infos pt-2">
      <div class="name">
        <h2>Shri Sudhan</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://www.instagram.com/shrisudhanb/">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/shrisudhan97/">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>

  <div class="card w-[300px] flex flex-col items-center">
  <div class="img" className="flex justify-center">
        <img src={require("../assets/developers/gowtham.jpg")} className="w-full h-full object-cover object-top"/>
     </div>

    <div class="infos pt-2">
      <div class="name">
        <h2>Gowtham</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://instagram.com/101_gowtham_010">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/gowtham-m-s-b28391259/">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/GrowthamProg/">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>
</div>


<h1 className="text-3xl md:text-5xl font-bold text-red-500 font-harry text-center pt-10"> 2024 </h1>
<div className="max-w-[1240px] mx-auto flex flex-wrap justify-center gap-4 pb-10">
  <div class="card w-[300px] flex flex-col items-center">
 <div class="img" className="flex justify-center">
      <img src={require("../assets/developers/naveen.jpg")} className="h-32 object-cover object-top" />
    </div>
    <div class="infos pt-2">
      <div class="name">
        <h2>Naveen Periasamy</h2>
        <h4>Developer & Designer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://instagram.com/_naveen_bharathi">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/naveen-bharathi-739423235/">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="https://twitter.com/Naveen03972024">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/Naveenelan">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>

  <div class="card w-[300px] flex flex-col items-center">
   <div class="img" className="flex justify-center">
      <img src={require("../assets/developers/sujit.jpg")} />
    </div>
    <div class="infos pt-2">
      <div class="name">
        <h2>Sujit Balasubramanian</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://instagram.com/sujit_balasubramanian">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sujit-balasubramanian">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="https://twitter.com/Sujitatmachine">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/sujitbalasubramanian">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>

  <div class="card w-[300px] flex flex-col items-center">
  <div class="img" className="flex justify-center">
        <img src={require("../assets/developers/veenas.jpg")} className="w-full h-full object-cover object-top"/>
     </div>
    <div class="infos pt-2">
      <div class="name">
        <h2>Veenas Kumar</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="socialmedia">
        <a target="_blank" href="https://instagram.com/_self_master_">
          <Icon.Instagram aria-hidden="true" id="instagram"></Icon.Instagram>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/veenas-kumar-54491a216/">
          <Icon.Linkedin id="linkedin"></Icon.Linkedin>
        </a>
        <a target="_blank" href="https://twitter.com/veenaskumar">
          <Icon.Twitter id="twitter"></Icon.Twitter>
        </a>
        <a target="_blank" href="https://github.com/veenaskumar">
          <Icon.Github id="github"></Icon.Github>
        </a>
      </div>
    </div>
  </div>
</div>
<div className="bottom-0 inset-0 left-0 w-full overflow-hidden">
  <img src={bottom} alt="Bottom Image" className="scale-150 pb-3" />
</div>
</div>
);
}

export default Developers;
