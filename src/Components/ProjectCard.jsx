"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, imageUrl, projectUrl }) => {
  return (
    <div className="bg-white/10 rounded-2xl overflow-hidden border border-transparent hover:border-gradient-to-r from-pink-500 to-yellow-400 
    transition-all duration-500 shadow-[0_0_20px_5px_rgba(236,72,153,0.5)]">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent ">
          {title}
        </h3>

        <p className="text-white/80 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-white/20 px-4 py-3 rounded-full text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-white hover:text-pink-400 cursor-pointer" size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
