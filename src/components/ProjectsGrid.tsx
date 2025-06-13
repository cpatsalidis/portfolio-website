import React, { useRef } from "react";
import { Project } from "../types";

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = React.memo(({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `perspective(900px) scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = "0 0 32px 0 rgba(54,70,245,0.18), 0 2px 16px 0 rgba(0,0,0,0.10)";
    card.style.transition = "transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s";
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) scale(1) rotateX(0deg) rotateY(0deg)";
    card.style.boxShadow = "0 2px 16px 0 rgba(0,0,0,0.10)";
    card.style.transition = "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s";
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#0a0a1a] rounded-2xl shadow-lg flex flex-col overflow-hidden border border-[#232336] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_rgba(54,70,245,0.18)] hover:ring-2 hover:ring-primary/30 mx-auto w-full h-full"
      style={{ willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-60 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#18182a] text-xs font-semibold text-white shadow">
            {project.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-0 pb-8 -mt-8 relative z-10">
        {/* Circular Logo */}
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#0a0a1a] mb-4">
          <img
            src={project.logo}
            alt={project.title + ' logo'}
            className="w-10 h-10 object-contain"
          />
        </div>
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
        {/* Description */}
        <p className="text-[#b0b0c3] text-center mb-4 text-base">{project.description}</p>
        {/* Tech Icons */}
        <div className="flex flex-row items-center justify-center gap-3 mb-6">
          {project.techIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt="tech"
              className="w-7 h-7 rounded-full bg-white p-1 shadow"
            />
          ))}
        </div>
        {/* Study Case Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-8 py-2 rounded-full bg-[#3646f5] text-white font-bold tracking-wide text-sm shadow hover:bg-[#2233c7] transition-colors"
        >
          {project.buttonLabel}
        </a>
      </div>
    </div>
  );
});

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects = [] }) => {
  if (!Array.isArray(projects) || projects.length === 0) {
    return <div className="text-center text-white py-12">No projects to display.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
