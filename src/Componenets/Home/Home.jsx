import React from "react";
import "./home.css";
import construction from "./../../assets/construction.png";
import Footer from "./Footer";
import Slider from "./Slider" 
import aboutImage from "./../../assets/aboutImage.jpg"
import { FaWhatsapp } from 'react-icons/fa';

const Home = ({ mode }) => {
  return (
    <main
      className={`home  transition-all duration-300 ${
        mode === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className=" px-5 flex justify-center items-center h-full section1-container">
        <div className="w-[60%] h-full flex justify-center items-center flex-col gap-y-4 main-headers-container">
          <div className="w-full">
            <h1
              className={`heading font-extrabold whitespace-nowrap title transition-all duration-300 
              ${mode === "light" ? "text-black" : "text-white"}`}
            >
              DreamSpace realtors
            </h1>
          </div>

          <div className="w-[100%] slogan-container">
            <span>
              <h3
                className={`poppins-regular text-4xl font-semibold slogan transition-all duration-300 
                ${mode === "light" ? "text-black" : "text-white"}`}
              >
                We stand,
              </h3>
            </span>
            <span>
              <h3
                className={`poppins-regular font-semibold text-4xl slogan ${
                  mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                } `}
              >
                towards your dream.
              </h3>
            </span>
          </div>
        </div>

        <div className="w-[40%] h-full main-image-container">
          <img
            src={construction}
            alt="Construction"
            className={`w-full h-full object-contain transition-all duration-300 `}
          />
        </div>
      </div>

      <div
        className={`w-full h-[2px]  mx-auto transition-all duration-300 
        ${mode === "light" ? "bg-gray-300" : "bg-gray-500"}`}
      ></div>

      <div
        className={`p-5 About w-full h-[50vh] transition-all duration-300 gap-x-3 ${
          mode === "light" ? "bg-white" : "bg-black"
        } flex`}
        id="11"
      >
        <div className="w-[40%] h-full  about-image">
          <img
            src={aboutImage}
            alt="Construction"
            className={`w-full h-full object-contain transition-all duration-300 `}
          />
        </div>
        <div className="w-[60%] h-full  about-container">
          <div className="w-full h-[30%]  flex justify-center items-center">
            <h3
              className={`poppins-regular font-semibold text-4xl slogan h-[30%]   mt-3 ${
                mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
              }  `}
            >
              About DreamSpace
            </h3>
          </div>
          <div className="w-full h-[70%] ">
            <p
              className={` ${
                mode === "light" ? "text-black" : "text-white"
              } text-justify poppins-regular`}
            >
             At DreamSpace Realtors, we turn your dreams into reality by offering premium land deals and top-notch construction services. With a strong commitment to quality and customer satisfaction, we have successfully helped 20+ happy clients find their perfect property and build their dream spaces.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[2px]  mx-auto transition-all duration-300 
        ${mode === "light" ? "bg-gray-300" : "bg-gray-500"}`}
      ></div>

      

      <div
        className={`w-full transition-all duration-300 py-10 ${
          mode === "light" ? "bg-white" : "bg-black"
        }`}
      >
        {/* Header */}
        <div id="services" className="w-full flex justify-center items-center px-5 mb-10">
          <h3
            className={`poppins-regular font-semibold text-4xl ${
              mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
            }`}
          >
            Our Services
          </h3>
        </div>

        {/* Services Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10">
          {/* Service Card 1 */}
          <div
            className={`flex flex-col justify-center items-start p-6 rounded-2xl shadow-lg border border-gray-200 
      ${mode === "light" ? "bg-white text-black" : "bg-black text-white"} 
      hover:scale-[1.05] transition-transform duration-300 cursor-pointer`}
          >
            <h3
              className={`font-semibold text-2xl mb-3 ${
                mode === "light" ? "text-black" : "text-white"
              }`}
            >
              Building Construction
            </h3>
            <ul className="text-lg space-y-2">
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Engineering Planning
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Interior Designing
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Construction
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Exterior Design
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Structural Work
              </li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div
            className={`flex flex-col justify-center items-start p-6 rounded-2xl shadow-lg border border-gray-200 
      ${mode === "light" ? "bg-white text-black" : "bg-black text-white"} 
      hover:scale-[1.05] transition-transform duration-300 cursor-pointer`}
          >
            <h3
              className={`font-semibold text-2xl mb-3 ${
                mode === "light" ? "text-black" : "text-white"
              }`}
            >
              Architecture & Design
            </h3>
            <ul className="text-lg space-y-2">
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Conceptual Designing
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                3D Visualization
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Project Management
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Site Analysis
              </li>
              <li className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
                  }`}
                >
                  •
                </span>{" "}
                Space Planning
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[2px]  mx-auto transition-all duration-300 
        ${mode === "light" ? "bg-gray-300" : "bg-gray-500"}`}
      ></div>

      
      <div className={`w-full h-[600px] ${mode === "light" ? "bg-white" : "bg-black"} flex justify-center items-center px-5 flex-col`}>
      <h3
              className={`poppins-regular font-semibold text-4xl slogan  w-full  h-[10%]   mt-3 ${
                mode === "light" ? "text-[#6A00FF]" : "text-[#00FF3C]"
              } capitalize  flex justify-center items-center`}
            >
              our work
            </h3>
          <Slider/>
      </div>

      <div className={`w-full h-[300px] ${mode === "light" ? "bg-white" : "bg-black"} flex justify-center items-center text-white px-5 `} id="contact">
          <div className="w-[400px] h-[150px] rounded-2xl bg-[#6A00FF]">
              <div className="w-full h-[30%] flex justify-center items-center  poppins-regular font-extrabold text-4xl relative top-2">
                Got Any Query?
              </div>
                <a href="https://wa.me/9380606225" target="_blank" className="w-full h-[60%] flex justify-center items-center">
              <div className="w-full h-[60%] flex justify-center items-center ">
                <div className="w-[300px] h-[50px] bg-[#00e535] rounded poppins-regular flex justify-center items-center gap-x-1.5 cursor-pointer">

                <FaWhatsapp size={24}/>
                  <h3 className="font-semibold">whatsapp us</h3>

                </div>
              </div>
                </a>
          </div>
      </div>

      


     
      <Footer/>
    </main>
  );
};

export default Home;
