import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import { url } from "inspector";

const About = () => {
    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("/assets/about_page_bakcground.jpg")' }}>
            <Navbar />
            {/* Background image with overlay */}

            <main className="relative z-10 flex flex-col items-center justify-center ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20 bg-purple-100/90 dark:bg-black/90 rounded-lg shadow-lg flex flex-col items-center relative"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-700 dark:text-purple-300 text-center">The Full Story</h1>
                    <div className="px-4 text-[#430A48] dark:text-purple-200 text-lg md:text-xl space-y-8">
                        <p>
                            Hello, and welcome to my portfolio! I am an Electrical and Electronic Engineering graduate from Imperial College London. During my time there, I found my passion in the world of machine learning and software engineering. I come from the island of Cyprus, having the motivation to make the most of my experiences abroad.
                        </p>
                        <p>
                            I am a driven individual that continuously tries to learn and grow. I welcome any challenge with enthusiasm, and always strive to push myself beyond my limits to achieve my goals. I firmly believe that hard work and dedication are the keys to excel in any field. In addition to my academic achievements, I have a deep passion for sports, particularly tennis and swimming. I find joy in the physicality and grit involved. Maintaining an active lifestyle not only contributes to physical excellence but also enhances mental agility and overall well-being.
                        </p>
                        <p>
                            By combining my interest in software development and physical fitness, I strive to cultivate a well-rounded personality. It is therefore my aspiration to contribute to the development of cutting-edge technologies, and make a positive impact on society.
                        </p>
                        <p>
                            Thank you for taking the time to explore my portfolio. I am looking forward to connecting with like-minded individuals and organizations who share my ideas.
                        </p>
                    </div>
                    <a
                        href="/contact"
                        className="mt-10 inline-block px-6 py-2 rounded-full bg-purple-400 text-black font-semibold shadow hover:bg-purple-300 transition-colors dark:bg-purple-700 dark:text-white dark:hover:bg-purple-500"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </main>
        </div>
    );
};

export default About; 