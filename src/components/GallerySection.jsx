import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
 
import wedding1 from "../assets/gallery/weeding.jpg";
import wedding2 from "../assets/gallery/weeding1.jpg";
import portrait1 from "../assets/gallery/portrait1.jpg";
import portrait2 from "../assets/gallery/portrait.jpg";
import wildlife1 from "../assets/gallery/wild1.jpg";
import wildlife2 from "../assets/gallery/wild.jpg";
import street1 from "../assets/gallery/street1.jpg";
import street2 from "../assets/gallery/street.jpg";




// 📸 Saare image links me fixed size add kiya gaya hai for reliable loading
const allImages = [
  { src: wedding1, category: "Wedding", label: "Bride & Groom" },
  { src: wedding2, category: "Wedding", label: "Wedding Ceremony" },
  { src: portrait1, category: "Portrait", label: "Woman in Studio" },
  { src: portrait2, category: "Portrait", label: "Girl with Camera" },
  { src: wildlife1, category: "Wildlife", label: "Bird in Flight" },
  { src: wildlife2, category: "Wildlife", label: "Eagle Close-up" },
  { src: street1, category: "Street", label: "City Street" },
  { src: street2, category: "Street", label: "Street Lights" },
];


const categories = ["All", "Wedding", "Wildlife", "Street", "Portrait"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-100" id="gallery">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Gallery</h2>
        <p className="text-gray-600 mt-2">Explore our favorite shots</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black shadow"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
        {filteredImages.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-sm cursor-pointer aspect-[4/3]"
            onClick={() => {
              const realIndex = allImages.findIndex(
                (original) => original.src === img.src
              );
              setIndex(realIndex);
              setOpen(true);
            }}
          >
            <img
              loading="lazy"
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <span className="text-white text-sm font-medium">{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
        slides={allImages.map((img) => ({
          src: img.src,
          title: img.label,
        }))}
      />
    </section>
  );
}
