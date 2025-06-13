import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import ProjectsGrid from "../ProjectsGrid";
import { projects } from "../../data/mockData";
import { useLocation } from "react-router-dom";

const Work = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.replace('#', ''));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 pt-24 pb-12"
            >
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Work</h1>
                    <p className="text-foreground/80">
                        Here are some of my recent projects. Each one represents a unique challenge
                        and learning experience.
                    </p>
                </div>

                <ProjectsGrid projects={projects} />
            </motion.main>
        </div>
    );
};

export default Work; 