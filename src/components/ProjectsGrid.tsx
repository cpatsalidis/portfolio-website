import React, { useRef } from "react";
import { Project } from "../types";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

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
    card.style.boxShadow = "0 0 32px 0 #430A48, 0 2px 16px 0 rgba(0,0,0,0.10)";
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
      id={`project-${project.id}`}
      className="p-2 bg-transparent rounded-2xl shadow-lg flex flex-col overflow-hidden border border-[#232336] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_#430A48] hover:ring-2 hover:ring-[hsl(0,0%,90%)] mx-auto w-full h-full"
      style={{ willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-60 flex-shrink-0 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top rounded-[20px]"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-6 py-2 rounded-full bg-white dark:bg-purple-900 text-xs font-semibold text-purple-900 dark:text-white shadow-lg shadow-purple-900/70 border border-purple-900">
            {project.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-center px-6 pt-0 pb-8 -mt-8 relative z-10">
        {/* Circular Logo */}
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#0a0a1a] mb-4">
          <img
            src={project.logo}
            alt={project.title + ' logo'}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Title */}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2 text-center">{project.title}</h3>
        {/* Description */}
        <p className="text-black dark:text-[#b0b0c3] text-center mb-4 text-base">{project.description}</p>
        {/* Tech Icons */}
        <div className="flex flex-row items-center justify-center gap-3 mb-6">
          {project.techIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt="tech"
              className="w-9 h-9 rounded-full bg-white p-1 shadow"
            />
          ))}
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <Link
            to={project.link}
            className="px-8 py-2 rounded-full bg-purple-500 text-white font-bold tracking-wide text-sm shadow hover:bg-purple-400 transition-colors"
          >
            {project.buttonLabel}
          </Link>
          {/* View Thesis button for Agentic AI project */}
          {project.title === "Agentic AI Community" && (
            <a
              href="/FYP_report_cp620_01866599_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-purple-600 font-bold tracking-wide text-xs shadow hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <ExternalLink size={14} />
              View Thesis
            </a>
          )}

          {/* View Thesis button for Campground project */}
          {project.title === "CampGround Site" && (
            <a
              href="https://github.com/cpatsalidis/camp_app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-purple-600 font-bold tracking-wide text-xs shadow hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <ExternalLink size={14} />
              View on GitHub
            </a>
          )}

          {/* View Thesis button for Portfolio project */}
          {project.title === "My very own Portfolio" && (
            <a
              href="https://github.com/cpatsalidis/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-purple-600 font-bold tracking-wide text-xs shadow hover:bg-purple-500 hover:text-white transition-colors flex items-center gap-1"
            >
              <ExternalLink size={14} />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects = [] }) => {
  if (!Array.isArray(projects) || projects.length === 0) {
    return <div className="text-center text-white py-12">No projects to display.</div>;
  }
  return (
    <div className="flex flex-col gap-8 w-full">
      {projects.map((project, idx) => (
        <AnimatedProjectTile key={project.id} align={idx % 2 === 0 ? 'left' : 'right'}>
          <div className="w-full max-w-xl px-8 py-8 md:px-12 md:py-10">
            <ProjectCard project={project} />
          </div>
        </AnimatedProjectTile>
      ))}
    </div>
  );
};

// Animated tile wrapper
const AnimatedProjectTile: React.FC<{ align: 'left' | 'right'; children: React.ReactNode }> = ({ align, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      className={`flex w-full ${align === 'left' ? 'justify-start' : 'justify-end'}`}
      initial={{
        opacity: 0,
        x: align === 'left' ? -80 : 80,
      }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default ProjectsGrid;
