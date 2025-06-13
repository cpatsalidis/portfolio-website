import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground mb-6">
                            I'm a UI/UX Designer and Software Developer with over 2 years of experience
                            in creating beautiful and functional digital experiences. I specialize in
                            designing and developing user-centered solutions that solve real problems.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            My journey in tech started with a passion for creating things that people
                            love to use. I believe in the power of good design to make technology
                            more accessible and enjoyable for everyone.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills & Expertise</h2>
                        <ul className="list-disc list-inside text-muted-foreground mb-6">
                            <li>UI/UX Design</li>
                            <li>Frontend Development</li>
                            <li>Mobile App Development</li>
                            <li>Responsive Web Design</li>
                            <li>User Research</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default About; 