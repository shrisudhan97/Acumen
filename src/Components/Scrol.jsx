import React, { useState, useEffect, useRef } from "react";
import leftArrow from "../assets/scroll_prev.svg";
import rightArrow from "../assets/scroll_next.svg";
import bottom from "../assets/horizons_bridge.png";
import stars from "../assets/stars.png";
import "../styles/scroll.css";

const importAll = (r) => {
  return r.keys()
    .map((fileName) => ({
      name: fileName.replace("./", "").split('.')[0], // Get file name without extension
      image: r(fileName),
    }))
    .sort((a, b) => {
      // Regular alphabetic sorting
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      // If names are alphabetically the same, compare as numbers (if applicable)
      const numA = parseInt(nameA.replace(/\D/g, ""), 10);
      const numB = parseInt(nameB.replace(/\D/g, ""), 10);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB; // Sort numerically if both have numbers
      }
      return nameA.localeCompare(nameB); // Otherwise, alphabetically
    })
    .map((item) => item.image);
};

const memberImages = importAll(
  require.context("../assets/Members", false, /\.(jpg|jpeg|png|webp)$/i)
);



const combinedMembers = [
  { name: "CIBI KRISHNA V", post: "Secretary", roll: "21ECR037", section: "IV - A" },
  { name: "NAVEEN BHARATHI P", post: "Chairman", roll: "21ECR127", section: "IV - C" },
  { name: "NIKITA N", post: "Treasurer", roll: "21ECR132", section: "IV - C" },
  { name: "SARAVANA KUMAR P", post: "Vice Chairman", roll: "21ECR183", section: "IV - D" },
  { name: "DEENA SHERIN S", post: "Additional Secretary", roll: "21ECR040", section: "IV - A" },
  { name: "JINISHA M", post: "Treasurer", roll: "21ECR092", section: "IV - B" },
  { name: "GNANA VENKATESH G", post: "Additional Secretary", roll: "21ECR062", section: "IV - B" },
  { name: "ARAVINDAN A", post: "Secretary", roll: "21ECR018", section: "IV - A" },
  { name: "JEEVAGAN N", post: "Additional Secretary", roll: "21ECR085", section: "IV - B" },
  { name: "RAGUNATH R S", post: "Additional Secretary", roll: "21ECR156", section: "IV - C" },
  { name: "KAVYA SHREE V N", post: "Additional Secretary", roll: "21ECR109", section: "IV - B" },
  { name: "NIJITHRA G K", post: "Additional Secretary", roll: "21ECR131", section: "IV - C" },
  { name: "NISHANTH S", post: "Additional Secretary", roll: "21ECR135", section: "IV - C" },
  { name: "ANANYA K S", post: "Additional Secretary", roll: "21ECR015", section: "IV - A" },
  { name: "SAKTHIMURUGAN R", post: "Additional Secretary", roll: "21ECR173", section: "IV - C" },
  { name: "KAVIYA V", post: "Additional Secretary", roll: "21ECR106", section: "IV - B" },
  { name: "PRETHIKAA D", post: "Joint Secretary", roll: "22ECR142", section: "III - C" },
  { name: "SHRI SUDHAN B", post: "Joint Secretary", roll: "22ECR175", section: "III - C" },
  { name: "YOGESH T N", post: "Joint Secretary", roll: "22ECR246", section: "III - D" },
  { name: "JANANI R", post: "Joint Secretary", roll: "22ECR070", section: "III - B" },
  { name: "BOOBATHI RAJA K M", post: "Executive Member", roll: "22ECR034", section: "III - A" },
  { name: "ALAGU DIVYA SHREE M", post: "Executive Member", roll: "22ECR018", section: "III - A" },
  { name: "DHARSHAN S", post: "Executive Member", roll: "22ECR046", section: "III - A" },
  { name: "ELANGO S", post: "Executive Member", roll: "22ECR053", section: "III - A" },
  { name: "KAVYASHRI J M", post: "Executive Member", roll: "22ECR081", section: "III - B" },
  { name: "KAVIPRASHAAD L", post: "Executive Member", roll: "22ECR078", section: "III - B" },
  { name: "LOKESHWARAN K", post: "Executive Member", roll: "22ECR095", section: "III - B" },
  { name: "MOHANA PRIYA", post: "Executive Member", roll: "22ECR104", section: "III - B" },
  { name: "SABARIVELAN S", post: "Executive Member", roll: "22ECR157", section: "III - C" },
  { name: "SRINISHA S", post: "Executive Member", roll: "22ECR186", section: "III - C" },
  { name: "SANDHYA D", post: "Executive Member", roll: "22ECR160", section: "III - C" },
  { name: "SUBIKSHA S", post: "Executive Member", roll: "22ECR195", section: "III - D" },
  { name: "YAZHINI B", post: "Executive Member", roll: "22ECR242", section: "III - D" },
  { name: "VETRI SELVAN K", post: "Executive Member", roll: "22ECR227", section: "III - D" },
  { name: "YOGITH SURIYA M", post: "Executive Member", roll: "22ECL268", section: "III - D" },
  { name: "VISHALINI K S", post: "Executive Member", roll: "22ECR237", section: "III - D" },
  { name: "AKILAN M", post: "Office Bearer", roll: "23ECR011", section: "II - A" },
  { name: "AKSHAVIKAA P V", post: "Office Bearer", roll: "23ECR012", section: "II - A" },
  { name: "HARINI M", post: "Office Bearer", roll: "23ECR071", section: "II - B" },
  { name: "KARTHIKEYAN G", post: "Office Bearer", roll: "23ECR096", section: "II - B" },
  { name: "SAKTHI C", post: "Office Bearer", roll: "23ECR202", section: "II - D" },
  { name: "PRABANJARI V S", post: "Office Bearer", roll: "23ECR155", section: "II - C" },
  { name: "SANDEEP M", post: "Office Bearer", roll: "23ECR185", section: "II - C" },
  { name: "SELVA BRINDHA K", post: "Office Bearer", roll: "23ECR199", section: "II - D" },
  { name: "Dr.N.Kasthuri", post: "HOD of ECE", roll: "Faculty", section: "Faculty" },
  { name: "Dr. A.Arulmurugan", post: "Faculty advisor ECEA", roll: "Faculty", section: "Faculty" },
  { name: "Dr.K.Kavin Kumar", post: "Faculty advisor ISF", roll: "Faculty", section: "Faculty" },
  { name: "G.DEEPA", post: "Faculty advisor ECEA", roll: "Faculty", section: "Faculty" },
  { name: "R.Ramyea", post: "Faculty advisor ISF", roll: "Faculty", section: "Faculty" },
  { name: "B.T.ANNAPOORANI", post: "Faculty advisor ECEA", roll: "Faculty", section: "Faculty" },
];


// Ensure correct pairing of members with images
const members = combinedMembers.map((member, i) => ({
  id: i,
  image: memberImages[i], // Assign correct image
  name: member.name,
  post: member.post,
}));

// Duplicate members for infinite scrolling
const infiniteMembers = [...members, ...members, ...members];

const Scrol = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevSlide = () => {
    if (!carouselRef.current || isAnimating) return;
    setIsAnimating(true);

    const lastChild = carouselRef.current.lastElementChild;
    const slideWidth = lastChild.offsetWidth + 
      parseInt(window.getComputedStyle(lastChild).marginRight);

    // Move last child to the front
    carouselRef.current.style.transition = "none";
    carouselRef.current.insertBefore(lastChild, carouselRef.current.firstElementChild);
    carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
      if (!carouselRef.current) return;
      carouselRef.current.style.transition = "transform 0.8s ease-in-out";
      carouselRef.current.style.transform = "translateX(0)";

      carouselRef.current.addEventListener("transitionend", () => setIsAnimating(false), { once: true });
    });
  };

  const handleNextSlide = () => {
    if (!carouselRef.current || isAnimating) return;
    setIsAnimating(true);

    const firstChild = carouselRef.current.firstElementChild;
    const slideWidth = firstChild.offsetWidth +
      parseInt(window.getComputedStyle(firstChild).marginRight);

    carouselRef.current.style.transition = "transform 0.8s ease-out";
    carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;

    carouselRef.current.addEventListener("transitionend", () => {
      if (!carouselRef.current) return;
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = "translateX(0)";
      carouselRef.current.appendChild(firstChild);
      setIsAnimating(false);
    }, { once: true });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isAnimating) {
        handleNextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, isAnimating]);

  return (
    <div className="relative bg-gradient-to-b from-[rgb(24,21,13)] via-[rgb(46,34,58)] to-[rgb(55,41,68)] pt-20 px-4 md:px-24 lg:px-44">
      <h1 className="text-3xl md:text-5xl font-bold text-red-500 font-harry text-center" style={{color:"darkviolet"}} >
        Our Team
      </h1>

      <div className="absolute inset-0 bg-cover bg-center my-12 z-0">
        <img src={stars} alt="Stars background" className="w-full h-full object-cover opacity-50" />
      </div>

      {/* Left Arrow Button */}
      <button onClick={handlePrevSlide} className="absolute left-2 top-96 md:left-10 z-20 p-2">
        <img src={leftArrow} alt="Previous" className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
  <div
    ref={carouselRef}
    className="flex items-center h-full"
    id="carousel"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    {infiniteMembers.map((member, index) => (
      <div key={`${member.name}-${index}`} className="relative flex-shrink-0 carousel-item transform transition-transform hover:scale-105">
        <div className="relative overflow-hidden rounded-xl shadow-2xl carousel-image-container">
          <img src={member.image} alt={`Member ${member.name}`} className="h-full w-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-11 left-0 w-full text-center text-white font-bold carousel-name">{member.name}</div>
          <div className="absolute bottom-5 left-0 w-full text-center text-white font-bold carousel-post">{member.post}</div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Right Arrow Button */}
      <button onClick={handleNextSlide} className="absolute right-2 top-96 md:right-10 z-20 p-2 hover:scale-110 transition-transform">
        <img src={rightArrow} alt="Next" className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Decorative Bottom Image */}
      <img src={bottom} alt="Decorative bridge" className="absolute w-full h-auto pb-4 scale-150 bottom-0 left-0 z-0" loading="lazy" />
    </div>
  );
};

export default Scrol;
