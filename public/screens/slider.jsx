// src/ImageSlider.js
import React, { useState } from 'react';
import firstimg from"../image/firstimg.jpg"
import second from"../image/2nd.jpg"
import thirrd from"../image/3rd.jpg"
import four from"../image/4th.jpg"
import five from"../image/5th.jpg"
import six from"../image/6th.jpg"
import seven from"../image/7th.jpg"

const slides = [
  { src: firstimg, caption: 'Our Changing World ' },
  { src: second, caption: 'Loss of sea ice: Kivalina, Alaska, USA' },
  { src: thirrd, caption: 'Dying trees: Lebanon' },
  { src: four, caption: 'Shrinking glacier: Pasterze, Austria' },
  { src: five, caption: 'Receding lake: Lake Chilwa, Malawi' },
  { src: six, caption: 'Drought & Heat  Endanger:USA' },
  { src: seven, caption: 'Drought: Chennai, India' }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentIndex ? 'fade show' : 'fade'}`}
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={slide.src} alt={`Slide ${index}`} />
            <div className="caption"><h1>
            {slide.caption}
            </h1></div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
      <button className="next" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
