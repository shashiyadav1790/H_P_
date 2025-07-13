import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Candid and cinematic wedding stories that capture raw emotions and unforgettable moments.',
      icon: '💍',
    },
    {
      title: 'Wildlife & Nature',
      description: 'Explore the beauty of nature with our expert wildlife and landscape photography.',
      icon: '🌿',
    },
    {
      title: 'Street & Urban',
      description: 'Dynamic street photography that brings the life and soul of the city into focus.',
      icon: '🌆',
    },
    {
      title: 'Portrait & Studio',
      description: 'Professional portraits with creative lighting and editing for standout personal branding.',
      icon: '🎨',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p className="text-gray-600 text-lg mb-12" data-aos="fade-up">
          We offer a wide range of photography services tailored to your story.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
