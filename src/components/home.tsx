import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Dribbble } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Navbar from "./Navbar";
import ProjectsGrid from "./ProjectsGrid";
import ContactSection from "./ContactSection";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mock data for projects
  const projects = [
    {
      id: "1",
      title: "Tuku Ternak",
      description:
        "Tuku Ternak is an application that is engaged in animal husbandry e-commerce (selling various livestock products) that applies business concepts and empowerment of breeders and MSMEs.",
      imageUrl:
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
      category: "marketplace",
      technologies: ["Figma", "Whimsical", "InVision", "Flutter", "Firebase"],
      link: "#",
    },
    {
      id: "2",
      title: "Event Id",
      description:
        "Event Id is a Ticketing Management Service (TMS) superior technology in supporting all event organizers from distribution & ticket management, to providing event analysis reports at the end of the event.",
      imageUrl:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      category: "ticketing",
      technologies: ["Figma", "Whimsical", "InVision"],
      link: "#",
    },
    {
      id: "3",
      title: "Medica",
      description:
        "Medica is the Web Design for Commercial and Residential Room Disinfection, Decontamination Services Eliminating 99.999% of bacteria, viruses, spores using international standard products.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "health",
      technologies: ["Figma", "Whimsical", "InVision"],
      link: "#",
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="flex items-center mb-6">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
                alt="Profile"
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
              <a href="#" className="underline ml-1">
                Panemu Indonesia
              </a>{" "}
              company.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8">SAY HELLO</Button>
              <Button
                variant="outline"
                className="rounded-full px-6 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Dribbble size={24} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80"
                alt="Decorative graphic"
                className="max-w-full h-auto rounded-lg"
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

      {/* Applications and Tools Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Applications and Tools
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                name: "Figma",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=figma",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
              {
                name: "Whimsical",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=whimsical",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
              {
                name: "Invision",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=invision",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
              {
                name: "Flutter",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=flutter",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
              {
                name: "VS Code",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=vscode",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
              {
                name: "Git",
                icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=git",
                description:
                  "My primary design tool right now. Saya memilih menggunakan figma karena dapat bekerja dengan Tim.",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-background rounded-lg p-6 shadow-sm"
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{tool.name}</h3>
                </div>
                <p className="text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-12">
            <Button variant="secondary" className="rounded-full px-8">
              Load More Applications and Tools
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's get in touch</h2>
              <p className="text-muted-foreground mb-6">
                For business inquiry please send email to
                nanangprasetya.2000@gmail.com
              </p>
              <Button className="rounded-full px-8">SAY HELLO</Button>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Dribbble size={24} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <Separator className="my-8" />

          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
