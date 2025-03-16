import React from "react";
import "./home.css";
import construction from "./../../assets/construction.png";

const Home = () => {
  return (
    <main className="home px-5">
      <div className="flex  justify-center items-center h-full section1-container ">
        <div className="w-[60%] h-full  flex justify-center items-center flex-col gap-y-4  main-headers-container ">

          <div className=" w-full">
            <h1 className="text-white heading font-extrabold whitespace-nowrap title">
              DreamSpace realtors
            </h1>
          </div>

          <div className=" w-[100%] slogan-container ">
            <span>
              <h3 className="text-white poppins-regular text-4xl font-semibold slogan">
                We stand,
              </h3>
            </span>
            <span>
              <h3 className="text-[#00FF3C] poppins-regular font-semibold text-4xl slogan">
                towards your dream.
              </h3>
            </span>
          </div>
        </div>

        <div className="w-[40%] h-full main-image-container">
          <img
            src={construction}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;

{
  /* <div className="relative top-12 left-[-80px]">
          

          
        </div>
        <div>
          <img src={construction} alt="construction" />
        </div> */
}
