import React, { useEffect, useState } from 'react';
import hero1 from "../assets/image2/hero1.jpeg";
import hero2 from "../assets/image2/hero2.avif";
import hero3 from "../assets/image2/hero3.jpeg";
const images = [
  hero1,
  hero2,
  hero3
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
     
      {/* Previous and Next buttons (optional) */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={() =>
            setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
          }
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={() =>
            setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
          }
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          Next
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
