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
    url: 'https://linkedin.com/in/your-profile',
    icon: Linkedin
  },
  {
    platform: 'instagram' as const,
    url: 'https://instagram.com/your-profile',
    icon: Instagram
  },
  {
    platform: 'dribbble' as const,
    url: 'https://dribbble.com/your-profile',
    icon: Dribbble
  },
  {
    platform: 'github' as const,
    url: 'https://github.com/your-profile',
    icon: Github
  }
];

// Simulate loading projects data
const loadProjects = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return projects;
};

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
      <Navbar />

      {/* Decorative Blobs */}
      <div className="hidden md:block absolute top-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
        <div className="mx-auto w-[600px] max-w-full h-[600px] bg-primary/10 rounded-full blur-3xl absolute top-0 left-0 right-0"></div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
        <div className="mx-auto w-[400px] max-w-full h-[400px] bg-[#3646f5]/10 rounded-full blur-2xl absolute bottom-0 left-0 right-0"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-8 md:pt-32 pb-32 md:pb-56 relative z-10 bg-background md:pl-[60px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-24 md:gap-32">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
                alt="Profile picture of Nanang Prasetya"
                className="w-20 h-20 rounded-full bg-primary/20 p-1"
              />
              <h2 className="ml-4 text-xl font-medium">
                Hi, I'm Nanang Prasetya
              </h2>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              UI/UX Designer and <br />
              Software Development
            </h1>

            <p className="text-muted-foreground mb-8 max-w-lg">
              I'm from Indonesia and I have been working (Freelance) as a
              Software Development especially in the UI/UX Designer and
              Development for more than 2 year at
              <a
                href="https://panemu.com"
                className="underline ml-1 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panemu Indonesia
              </a>{" "}
              company.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-full px-8"
                onClick={() => window.location.href = '#contact'}
              >
                SAY HELLO
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 flex items-center gap-2"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
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
            <div className="relative w-full flex justify-center">
              <div className="absolute -z-10 w-full h-full bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <img
                src="/assets/img-fly.png"
                alt="Origami bird illustration"
                className="max-w-[90vw] md:max-w-[500px] w-full h-auto object-contain mx-auto rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 text-center">
                <p className="text-xl font-medium">Turn your ideas</p>
                <p className="text-xl">
                  into{" "}
                  <span className="text-primary font-medium">reality.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full h-8 md:h-16 bg-gradient-to-b from-background to-muted/40" />

      {/* Applications and Tools Section */}
      <section className="py-32 md:py-56 bg-muted/40 relative z-10">
        <div className="container mx-auto px-4">
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
                  className="bg-background rounded-lg p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_0_rgba(54,70,245,0.25)] hover:ring-2 hover:ring-primary/30"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        className="w-8 h-8"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="ml-4 text-xl font-medium">{tool.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="w-full h-8 md:h-16 bg-gradient-to-b from-muted/40 to-background" />

      {/* Projects Section */}
      <section className="py-32 md:py-56 relative z-10 bg-background">
        <div className="container mx-auto px-4">
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
      </section>
      {/* Divider */}
      <div className="w-full h-8 md:h-16 bg-gradient-to-b from-background to-muted/40" />

      {/* Contact Section */}
      <section className="py-32 md:py-56 bg-muted/40 relative z-10">
        <ContactSection />
      </section>
      {/* Decorative SVG Wave at the bottom */}
      <div className="w-full overflow-x-hidden absolute left-0 bottom-0 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 md:h-48">
          <path fill="#3646f5" fillOpacity="0.08" d="M0,224L60,202.7C120,181,240,139,360,154.7C480,171,600,245,720,261.3C840,277,960,235,1080,197.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
