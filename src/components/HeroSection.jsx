import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const backgroundImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&w=1920&q=80",
];

export default function HeroSection() {
  const typedRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Capturing Moments", "Crafting Stories"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundImages[currentImageIndex]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
          PixelCraft Studios
        </h1>

        <span
          ref={typedRef}
          className="text-white text-lg md:text-3xl font-medium"
        />

        <p className="mt-6 text-gray-200 text-sm md:text-lg max-w-xl">
          We freeze time and turn your moments into everlasting memories.
        </p>
      </div>
    </section>
  );
}
