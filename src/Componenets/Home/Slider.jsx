import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "./../../assets/IMG-20250316-WA0001.jpg";
import img2 from "./../../assets/IMG-20250316-WA0013.jpg";
import img3 from "./../../assets/IMG-20250316-WA0039.jpg";


const images = [
  {
    url: img1
  },
  {
    url: img2
  },
  {
    url: img3
  },
];

export default function ImageSlider({mode}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg h-[500px] flex items-center justify-center`}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex].url}
            alt="slider image"
            className="w-full h-full object-cover object-center-bottom"
          />
         
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 cursor-pointer"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <ChevronRight size={32} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}