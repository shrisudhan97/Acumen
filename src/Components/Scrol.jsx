// import React, { useState, useEffect, useRef } from "react";
// import image0 from "../assets/Members/download.jpeg";
// import image1 from "../assets/Members/download (1).jpeg";
// import image2 from "../assets/Members/images.jpeg";
// import image3 from "../assets/Members/images (1).jpeg";
// import image4 from "../assets/Members/images (2).jpg";
// import image5 from "../assets/Members/images001.jpg";
// import leftArrow from "../assets/scroll_prev.svg";
// import rightArrow from "../assets/scroll_next.svg";
// import bottom from "../assets/horizons_bridge.png";


// const Scrol = () => {
//   const images = [image0, image1, image2, image3, image4, image5];
//   const carouselRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   // Clone images to create the infinite scroll illusion
//   const infiniteImages = [...images, ...images, ...images];

//   const handleNextSlide = () => {
//     if (carouselRef.current) {
//       const slideWidth = carouselRef.current.children[0].offsetWidth;
//       carouselRef.current.style.transition = "transform 0.5s linear";
//       carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;
//       setTimeout(() => {
//         carouselRef.current.style.transition = "none";
//         carouselRef.current.appendChild(carouselRef.current.children[0]);
//         // Move first image to the end
//         carouselRef.current.style.transform = "translateX(0)";
//       }, 500); // Match this duration with your CSS transition
//     }
//   };

//   const handlePrevSlide = () => {
//     if (carouselRef.current) {
//       const lastImage = carouselRef.current.children[
//         carouselRef.current.children.length - 1
//       ];
//       const slideWidth = lastImage.offsetWidth;
//       carouselRef.current.style.transition = "none";
//       carouselRef.current.insertBefore(
//         lastImage,
//         carouselRef.current.children[0]
//       );
//       // Move last image to the front
//       carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;
//       setTimeout(() => {
//         carouselRef.current.style.transition = "transform 0.5s linear";
//         carouselRef.current.style.transform = "translateX(0)";
//       }, 0);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         handleNextSlide();
//       }
//     }, 3000); // Adjust auto-scroll speed here
//     return () => clearInterval(interval);
//   }, [isPaused]);

//   return (
//     <div
//       className="text-white relative bg-gradient-to-b from-[rgb(24,21,13)] via-[rgb(46,34,58)] to-[rgb(55,41,68)] pt-40 px-40"
//     >
//       <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrevSlide}
//           className="absolute left-4 z-10 p-2 bg-transparent"
//         >
//           <img
//             src={leftArrow}
//             alt="Previous"
//             className="h-8 w-8 object-contain"
//           />
//         </button>
//         {/* Carousel */}
//         <div
//           ref={carouselRef}
//           className="flex items-center gap-x-10"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           style={{
//             width: `${infiniteImages.length * 33.33}%`, // Adjust width based on visible images
//             transform: "translateX(0)",
//           }}
//         >
//           {infiniteImages.map((src, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-1/6 h-full flex items-center justify-center"
//             >
//               <img
//                 src={src}
//                 alt={`Image ${index}`}
//                 className="rounded-xl h-72 w-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//         {/* Next Button */}
//         <button
//           onClick={handleNextSlide}
//           className="absolute right-4 z-10 p-2 bg-transparent"
//         >
//           <img
//             src={rightArrow}
//             alt="Next"
//             className="h-8 w-8 object-contain"
//           />
//         </button>
//       </div>
//       <div className="bottom-0 inset-0 z-10 left-0 w-full overflow-hidden">
//         <img
//           src={bottom}
//           alt="Bottom Image"
//           className="scale-150"
//         />
//       </div>
//     </div>
//   );
// };

// export default Scrol;




import React, { useState, useEffect, useRef } from "react";
import image0 from "../assets/Members/download.jpeg";
import image1 from "../assets/Members/download (1).jpeg";
import image2 from "../assets/Members/images.jpeg";
import image3 from "../assets/Members/images (1).jpeg";
import image4 from "../assets/Members/images (2).jpg";
import image5 from "../assets/Members/images001.jpg";
import leftArrow from "../assets/scroll_prev.svg";
import rightArrow from "../assets/scroll_next.svg";
import bottom from "../assets/horizons_bridge.png";
import stars from "../assets/stars.png"

const Scrol = () => {
  const images = [image0, image1, image2, image3, image4, image5];
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const infiniteImages = [...images, ...images, ...images];

  const handleNextSlide = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.style.transition = "transform 0.5s linear";
      carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;
      setTimeout(() => {
        carouselRef.current.style.transition = "none";
        carouselRef.current.appendChild(carouselRef.current.children[0]);
        carouselRef.current.style.transform = "translateX(0)";
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const lastImage = carouselRef.current.children[
        carouselRef.current.children.length - 1
      ];
      const slideWidth = lastImage.offsetWidth;
      carouselRef.current.style.transition = "none";
      carouselRef.current.insertBefore(
        lastImage,
        carouselRef.current.children[0]
      );
      carouselRef.current.style.transform = `translateX(-${slideWidth}px)`;
      setTimeout(() => {
        carouselRef.current.style.transition = "transform 0.5s linear";
        carouselRef.current.style.transform = "translateX(0)";
      }, 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <div className="text-white relative bg-gradient-to-b from-[rgb(24,21,13)] via-[rgb(46,34,58)] to-[rgb(55,41,68)] pt-40 px-44">
        <div className="mb-8">
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-[var(--red)] font-harry flex justify-center">
            About Us
          </h1>
        </div>
      <div className="absolute inset-0 bg-cover bg-center my-12 z-0" >
        <img src={stars} alt="Bottom Image" className="w-full object-contain scale-150 z-0" />
      </div>
        <div>
          <button
            onClick={handlePrevSlide}
            className="absolute left-20 top-80 p-2 bg-transparent"
          >
            <img
              src={leftArrow}
              alt="Previous"
              className="h-8 w-8 object-contain"
            />
          </button>
        </div>
        <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex items-center gap-x-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `${infiniteImages.length * 33.33}%`,
              transform: "translateX(0)",
            }}
          >
            {infiniteImages.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/6 h-full flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="rounded-xl h-72 w-full object-cover"
                  
                  />
                
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={handleNextSlide}
            className="absolute right-28 top-80 p-2 bg-transparent"
          >
            <img
              src={rightArrow}
              alt="Next"
              className="h-8 w-8 object-contain"
            />
          </button>
        </div>
      </div>
      <div className="bottom-0 bg-[rgb(55,41,68)] inset-0 pb-3 left-0 w-full overflow-hidden">
        <img src={bottom} alt="Bottom Image" className="scale-150" />
      </div>
    </>
  );
};

export default Scrol;
