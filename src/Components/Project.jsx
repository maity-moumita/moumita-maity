"use client";

import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="py-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#f23557] to-[#ede862] bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        <ProjectCard
          title="Portfolio Website"
          description="A sleek personal portfolio showcasing my skills and projects."
          techStack={["React", "Next.js", "TailwindCSS"]}
          imageUrl="/Portfolio.png"
          projectUrl="https://your-project-link.com"
        />

        <ProjectCard
          title="Alert Angel"
          description="A women safety web application"
          techStack={["Next.js", "MERN", "Tailwind"]}
          imageUrl="/AlertAngel.png"
          projectUrl="https://your-project-link.com"
        />
      </div>
    </div>
  );
};

export default Projects;
