import React, { useState, useEffect } from 'react';
import picture1 from '../../assets/684c15e16a95323e27cde0fc_M5-hero.webp';
import picture2 from "../../assets/audihomepg.webp";
import picture3 from '../../assets/6818bd8285fbcbd12eecb29f_BMW20Series-Thumbnail-001.webp';
import picture4 from '../../assets/68512293b41bc96d2d53985b_alec-th.avif';
import './Home.css';

function Home() {
  const slides = [picture1, picture2, picture3, picture4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={index === current ? "active" : ""}
          />
        ))}
      </div>

      <div className="dashes">
        {slides.map((_, index) => (
          <div
            key={index}
            className={index === current ? "dash active" : "dash"}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
