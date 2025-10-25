// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ image, alt, title, description, tags, liveLink, githubLink }) => {
  return (
    <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] rounded-xl p-5 border border-gray-300 glow-card shadow-lg">
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h2 className="mt-4 font-bold text-[25px] md:text-[25px]">{title}</h2>

      {/* Description */}
      <p className="mt-2 text-[20px] md:text-[20px]">{description}</p>

      {/* Tags + Icons */}
      <div className="mt-6 flex justify-between items-center flex-wrap gap-3">
        {/* Tags */}
        <div className="text-sm text--text-color">{tags}</div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          {/* Live Link */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 194.818 194.818"
                className="h-6 w-6"
                fill="currentColor"
              >
                <g>
                  <path d="M185.818 2.161h-57.04c-4.971 0-9 4.029-9 9s4.029 9 9 9h35.312l-86.3 86.3a9 9 0 006.364 15.364 8.975 8.975 0 006.364-2.636l86.3-86.3v35.313c0 4.971 4.029 9 9 9s9-4.029 9-9v-57.04a9 9 0 00-9-9.001z"></path>
                  <path d="M149 77.201a9 9 0 00-9 9v88.456H18v-122h93.778c4.971 0 9-4.029 9-9s-4.029-9-9-9H9a9 9 0 00-9 9v140a9 9 0 009 9h140a9 9 0 009-9V86.201a9 9 0 00-9-9z"></path>
                </g>
              </svg>
            </a>
          )}

          {/* GitHub Link */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.284 3.438 9.773 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.776.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.49 11.49 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.625-5.479 5.921.43.37.823 1.103.823 2.222v3.293c0 .32.192.694.801.576C20.565 22.065 24 17.577 24 12.297 24 5.67 18.627.297 12 .297z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
