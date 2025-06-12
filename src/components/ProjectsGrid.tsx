import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  link: string;
}

interface ProjectsGridProps {
  projects?: Project[];
  className?: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Tuku Ternak",
    description:
      "Animal husbandry e-commerce platform that empowers breeders and MSMEs.",
    imageUrl:
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
    category: "marketplace",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "2",
    title: "Event ID",
    description:
      "Ticketing Management Service supporting event organizers with distribution and analytics.",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "ticketing",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: "3",
    title: "Medica",
    description:
      "Web design for commercial and residential room disinfection services.",
    imageUrl:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
    category: "health",
    technologies: ["HTML/CSS", "JavaScript", "WordPress"],
    link: "#",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "Personal portfolio website with light/dark mode and responsive design.",
    imageUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    category: "personal",
    technologies: ["React", "Vite", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "5",
    title: "Task Manager",
    description: "Productivity application for managing tasks and projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    category: "productivity",
    technologies: ["React", "Redux", "Express"],
    link: "#",
  },
  {
    id: "6",
    title: "Weather App",
    description:
      "Real-time weather forecasting application with location detection.",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    category: "utility",
    technologies: ["React Native", "OpenWeather API"],
    link: "#",
  },
];

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects = defaultProjects,
  className = "",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique categories from projects
    const uniqueCategories = [
      "all",
      ...new Set(projects.map((project) => project.category)),
    ];
    setCategories(uniqueCategories);

    // Filter projects based on selected category
    if (selectedCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory),
      );
    }
  }, [selectedCategory, projects]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my recent work across various categories. Each project
          showcases different skills and technologies.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={selectedCategory} className="mt-0">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="h-full overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="capitalize">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectsGrid;
