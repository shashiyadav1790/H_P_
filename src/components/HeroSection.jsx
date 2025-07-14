import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./HeroSection.css"; //Import CSS here

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Capturing Moments", "Crafting Stories"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
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
