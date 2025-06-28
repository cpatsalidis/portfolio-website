import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Dribbble } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import ProjectsGrid from "./ProjectsGrid";
import ContactSection from "./ContactSection";
import { projects, tools } from "../data/mockData";
import { fadeIn, staggerContainer, scaleIn } from "../lib/animations";
import { useScrollPosition } from "../lib/hooks/useScrollPosition";
import { LoadingSpinner } from "./ui/loading-spinner";
import { ErrorMessage } from "./ui/error-message";
import { useAsync } from "../lib/hooks/useAsync";
import { useInView } from "framer-motion";

const socialLinks = [
  {
    platform: 'linkedin' as const,
    url: 'https://www.linkedin.com/in/christos-patsalidis/',
    icon: Linkedin
  },
  {
    platform: 'github' as const,
    url: 'https://github.com/cpatsalidis',
    icon: Github
  }
];

// Simulate loading projects data
const loadProjects = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return projects;
};

// TechStack component
const techStack = [
  { name: 'GitHub', icon: '/assets/github.svg' },
  { name: 'HTML', icon: '/assets/html.svg' },
  { name: 'CSS', icon: '/assets/css.svg' },
  { name: 'Javascript', icon: '/assets/javascript.svg' },
  { name: 'Typescript', icon: '/assets/ts.svg' },
  { name: 'Python', icon: '/assets/python.svg' },
  { name: 'React', icon: '/assets/react.svg' },
  { name: 'Tailwind', icon: '/assets/tailwind.svg' },
  { name: 'Bootstrap', icon: '/assets/bootstrap.svg' },
  { name: 'Node.js', icon: '/assets/nodejs.svg' },
  { name: 'Express', icon: '/assets/express.svg' },
  { name: 'MongoDB', icon: '/assets/mongodb.svg' },
];

function TechStack() {
  return (
    <div className="mt-20 w-full flex flex-col items-center py-8">
      <div className="flex flex-wrap flex-dire justify-center gap-6" style={{ backgroundColor: 'rgb(51, 12, 47)', padding: '50px' }}>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="z-10 flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black text-lg font-medium shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_16px_0_#E5E5E5]"
          >
            {tech.name === 'Express' ? (
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 transition-transform duration-200 hover:scale-110" style={{ color: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? '#030203' : '#000' }} />
            ) : (
              <img src={tech.icon} alt={tech.name} className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
            )}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  const scrollY = useScrollPosition();
  const { data: projectsData, loading: projectsLoading, error: projectsError, execute: loadProjectsData } = useAsync<typeof projects>();
  const heroRef = React.useRef(null);
  const toolsRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  React.useEffect(() => {
    loadProjectsData(loadProjects());
  }, [loadProjectsData]);

  if (projectsError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ErrorMessage message={projectsError.message} className="max-w-md" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <img src="/assets/purple-line.svg" alt="decorative purple line" className="fixed inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" style={{ filter: 'hue-rotate(70deg) saturate(2)', opacity: 0.2 }} />
      <Navbar />

      {/* Decorative Blobs */}
      <div className="hidden md:block absolute top-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
        <div className="mx-auto w-[600px] max-w-full h-[600px] bg-primary/10 rounded-full blur-3xl absolute top-0 left-0 right-0"></div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
        <div className="mx-auto w-[400px] max-w-full h-[400px] bg-[#3646f5]/10 rounded-full blur-2xl absolute bottom-0 left-0 right-0"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center min-h-screen w-full px-4 md:px-12 pt-8 md:pt-0 pb-16 md:pb-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:gap-32 w-full max-w-7xl">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <img
                src="assets/personal_photo.jpg"
                alt="Profile picture of Christos Patsalidis"
                className="w-28 h-28 rounded-full bg-purple-700 dark:bg-white p-1"
              />
              <h2 className="ml-4 text-xl font-medium">
                Hi, I'm Christos Patsalidis
              </h2>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-purple-800 dark:text-purple-400 font-extrabold">Software
                <span className="text-3xl md:text-4xl lg:text-5xl text-foreground dark:text-white">/ <br /> Web Developer</span><br /></span>
            </h1>

            <p className="text-muted-foreground mb-8 max-w-lg">
              I'm from Cyprus and I am an Electrical Engineering graduate from
              <a
                href="https://www.imperial.ac.uk/"
                className="underline ml-1 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imperial College London
              </a>{" "}
              , whose passion for digital technology and design led me to pursue a career in software development.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-full px-8 fancy-btn"
                onClick={() => window.location.href = '#contact'}
              >
                SAY HELLO
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 flex items-center gap-2 fancy-btn text-foreground border-foreground dark:text-white dark:border-white"
                asChild
              >
                <a
                  href="/public/Christos_Patsalidis_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  My CV
                </a>
              </Button>


              {socialLinks.map(({ platform, url, icon: Icon }) => (
                <a
                  key={platform}
                  href={url}
                  aria-label={`Visit my ${platform} profile`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}

            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <div className="relative w-full flex justify-center" style={{ overflow: 'visible' }}>
              <div className="absolute -z-10 w-[600px] h-[500px] bg-[#a259f7]/20 rounded-full blur-3xl pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="/assets/img-fly.png"
                alt="Origami bird illustration"
                className="max-w-[90vw] md:max-w-[800px] w-full h-auto object-contain mx-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Applications and Tools Section */}
      <section className="py-32 md:py-56 bg-muted/40/80 relative z-10">
        <div className="section-card-bg container mx-auto max-w-4xl px-8 py-12 md:py-20 rounded-2xl shadow-lg" style={{ boxShadow: '0 0 20px 0 #430A48, 0 0 80px 0 #430A48' }}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Applications and Tools
          </motion.h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {tools.map((tool, index) => {
              return (
                <div
                  key={index}
                  className="bg-[rgba(43,10,41,0.85)] border border-[#a259f7] rounded-2xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_16px_0_#a259f7] hover:border-[#e084e2] flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/100 flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        className="w-8 h-8"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="ml-4 text-2xl font-extrabold text-[#F4E1F2] mb-2">{tool.name}</h3>
                  </div>
                  <p className="text-base text-[#e5d6e8] font-medium">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 md:py-56 relative z-10">
        <div className="section-card-bg container mx-auto max-w-5xl px-4 py-12 md:py-20 rounded-2xl shadow-lg relative overflow-hidden" style={{ boxShadow: '0 0 20px 0 #430A48, 0 0 80px 0 #430A48' }}>
          <div className="relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Projects
            </motion.h2>

            {projectsLoading ? (
              <div className="flex justify-center items-center min-h-[400px]">
                <LoadingSpinner size="lg" />
              </div>
            ) : projectsData ? (
              <ProjectsGrid projects={projectsData} />
            ) : null}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 md:py-56 bg-muted/40/80 relative z-10">
        <div className="section-card-bg container mx-auto max-w-5xl px-4 py-12 md:py-20 rounded-2xl shadow-lg" style={{ boxShadow: '0 0 40px 0 #430A48, 0 0 80px 0 #430A48' }}>
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
