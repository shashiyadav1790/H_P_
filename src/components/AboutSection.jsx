import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left Image */}
        <div data-aos="fade-right" className="w-full h-full">
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1350&q=80"
              alt="About PixelCraft Studios"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About PixelCraft Studios
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <span className="font-semibold text-indigo-600">PixelCraft Studios</span>,
            we don’t just take pictures — we tell stories through our lens.
            From candid moments to artistic portraits, we specialize in capturing
            emotions that last a lifetime.
          </p>
          <p className="text-gray-600 mb-4">
            Our team brings together passion and creativity to create visual experiences
            for weddings, wildlife adventures, street scenes, and personal moments.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>✨ Creative wedding and pre-wedding shoots</li>
            <li>🌿 Wildlife & nature photography</li>
            <li>🌆 Urban & street life moments</li>
            <li>🎨 Professional portraits & editing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
