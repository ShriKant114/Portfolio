// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/illustrations/g.jpg";
import neuralNetworkIcon from '../assets/icon/neural-network.png';

const About = () => {
  return (
    <>
      {/* Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <section className="relative">
        {/* Top Shadow */}
        <div className="absolute top-0 left-0 w-full h-4
                        bg-gradient-to-b from-black/20 dark:from-white/20
                        pointer-events-none z-10">
        </div>

        <div
          id="about"
          className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between
                     px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 gap-8 lg:gap-12
                     md:ml-20 lg:ml-24 2xl:ml-32"
        >
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 flex flex-col mt-5 lg:mt-25 items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#e7008a] via-purple-500 to-blue-600 text-transparent bg-clip-text">
              Hi, I'm
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4">
              SHRIKANT
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 lg:mt-6">
              <span className="block mb-2">I'm a Full-Stack Web Developer</span>
              <span className="block mb-2">& exploring the world of</span>
              <span className="flex lg:justify-start justify-center items-center">
                AI
                <img
                  src={neuralNetworkIcon}
                  alt="Neural Network"
                  className="w-7 h-7 ml-2"
                />
              </span>
            </p>
          </div>

          {/* Right Side: Larger Circle with floating + hover zoom */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-20 lg:mt-20">
            <div className="w-64 sm:w-72 md:w-80 lg:w-96 2xl:w-[34rem] h-64 sm:h-72 md:h-80 lg:h-96 2xl:h-[34rem]
                  rounded-full overflow-hidden border-white dark:border-gray-600 shadow-2xl
                  flex items-center justify-center animate-float transition-transform duration-500 hover:scale-110">
              <img
                src={aboutImg}
                alt="Shrikant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
