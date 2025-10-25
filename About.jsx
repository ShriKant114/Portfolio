// src/components/About.jsx
import React from "react";
import aboutImg from "../assets/illustrations/g.jpg";

const About = () => {
  return (
    <>
      {/* Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

      <section
        id="about"
        className="hero-1 px-5 sm:px-10 lg:px-20 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between mt-10"
      >
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r mt-10 from-[#e7008a] via-purple-500 to-blue-600 text-transparent bg-clip-text">
            Hi, I'm
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4">
            Shrikant
          </h2>
          <p className="w-full text-base sm:text-lg md:text-2xl mt-10">
            I'm a Computer Engineering student and a Full-Stack Web Developer,
            exploring the world of AI/ML.
          </p>
        </div>

        {/* Circle with floating + hover zoom */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-20 lg:ml-40 lg:mb-0">
          <div
            className="w-96 h-96 rounded-full overflow-hidden border-white dark:border-gray-600 shadow-2xl 
                       flex items-center justify-center animate-float transition-transform duration-500 hover:scale-110"
          >
            <img
              src={aboutImg}
              alt="Shrikant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
