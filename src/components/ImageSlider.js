import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "https://via.placeholder.com/800x600?text=Image1",
    "https://via.placeholder.com/800x600?text=Image2",
    "https://via.placeholder.com/800x600?text=Image3",
    "https://via.placeholder.com/800x600?text=Image1",
    "https://via.placeholder.com/800x600?text=Image2",
    "https://via.placeholder.com/800x600?text=Image3",
    "https://via.placeholder.com/800x600?text=Image1",
    "https://via.placeholder.com/800x600?text=Image2",
    "https://via.placeholder.com/800x600?text=Image3",
    // Add more image URLs as needed
  ];

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          backgroundColor:"white"
        }}
        onClick={onClick}
        aria-label="previous"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "40px", color: "gray",transform: "scaleX(-1)" }} />
      </IconButton>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translate(50%, -50%)",
          zIndex: 1,
          backgroundColor:"white"
        }}
        onClick={onClick}
        aria-label="next"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "40px", color: "gray"}} />
      </IconButton>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="p-2">
            <img
              src={imageUrl}
              className="w-full h-64 object-cover rounded"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

// import React, { useState, useEffect } from "react";
// import "./Slideshow.css"; // Create a separate CSS file and import it here

// const Slideshow = () => {
//   const [slideIndex, setSlideIndex] = useState(1);

//   useEffect(() => {
//     showSlides(slideIndex);
//   }, [slideIndex]);

//   const plusSlides = (n) => {
//     setSlideIndex(slideIndex + n);
//   };

//   const currentSlide = (n) => {
//     setSlideIndex(n);
//   };

//   const showSlides = (n) => {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");

//     if (n > slides.length) {
//       setSlideIndex(1);
//     }
//     if (n < 1) {
//       setSlideIndex(slides.length);
//     }

//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//   };

//   return (
//     <div className="slideshow-container">
//       <div className="mySlides fade">
//         <div className="numbertext">1 / 3</div>
//         <img src="img_nature_wide.jpg" style={{ width: "100%" }} alt="Slide 1" />
//         <div className="text">Caption Text</div>
//       </div>

//       <div className="mySlides fade">
//         <div className="numbertext">2 / 3</div>
//         <img src="img_snow_wide.jpg" style={{ width: "100%" }} alt="Slide 2" />
//         <div className="text">Caption Two</div>
//       </div>

//       <div className="mySlides fade">
//         <div className="numbertext">3 / 3</div>
//         <img src="img_mountains_wide.jpg" style={{ width: "100%" }} alt="Slide 3" />
//         <div className="text">Caption Three</div>
//       </div>

//       <a className="prev" onClick={() => plusSlides(-1)}>
//         ❮
//       </a>
//       <a className="next" onClick={() => plusSlides(1)}>
//         ❯
//       </a>

//       <div style={{ textAlign: "center" }}>
//         <span className="dot" onClick={() => currentSlide(1)}></span>
//         <span className="dot" onClick={() => currentSlide(2)}></span>
//         <span className="dot" onClick={() => currentSlide(3)}></span>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
