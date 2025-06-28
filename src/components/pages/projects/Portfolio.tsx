import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { Button } from "../../ui/button";

const Portfolio = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <img src="/assets/purple-line.svg" alt="decorative purple line" className="fixed inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" style={{ filter: 'hue-rotate(70deg) saturate(2)', opacity: 0.2 }} />
            <Navbar />
            <div className="hidden md:block absolute top-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
                <div className="mx-auto w-[600px] max-w-full h-[600px] bg-primary/10 rounded-full blur-3xl absolute top-0 left-0 right-0"></div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 right-0 z-0 w-full overflow-x-hidden pointer-events-none">
                <div className="mx-auto w-[400px] max-w-full h-[400px] bg-[#3646f5]/10 rounded-full blur-2xl absolute bottom-0 left-0 right-0"></div>
            </div>
            <main className="container mx-auto px-4 pt-20 pb-12 relative z-10">
                {/* Back to Home button - positioned outside animation */}
                <a
                    href="/"
                    className="absolute top-6 left-6 px-4 py-2 rounded-full bg-purple-400 text-white font-semibold shadow hover:bg-purple-500 transition-colors dark:bg-white/90 dark:text-[#430A48] dark:hover:bg-white"
                    style={{ zIndex: 10 }}
                >
                    ← Back to Home
                </a>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="section-card-bg rounded-2xl shadow-lg p-6" style={{ boxShadow: '0 0 40px 0 #430A48, 0 0 80px 0 #430A48' }}>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                            <img
                                src="/assets/logo-bsc.png"
                                alt="Portfolio Logo"
                                className="w-20 h-20 object-contain"
                            />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-3">My very own Portfolio</h1>
                                <p className="text-muted-foreground text-base mb-3">
                                    Personal Developer Portfolio Website
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Personal Project
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        UI/UX Design
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        React
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8">
                            <img
                                src="/assets/img-fly.png"
                                alt="Portfolio Project"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="md:col-span-2">
                                <h2 className="text-xl font-semibold mb-4">About the Project</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    This portfolio has been built from scratch, to not only showcase some of my projects,
                                    but also my skills and abilities as a developer. This was a way of venturing deeper
                                    into design best practices/patterns and UI/UX design, and to also provide an insight
                                    to my professional and lean style of web development.
                                </p>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    The portfolio demonstrates modern web development techniques, responsive design principles,
                                    and showcases my technical expertise through a clean, professional interface.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Project showcase
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Responsive design
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Dark/light theme
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Contact integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                                {[
                                    { name: "React", icon: "/assets/react.svg" },
                                    { name: "GraphQL", icon: "/assets/graphql.svg" },
                                    { name: "AWS", icon: "/assets/aws.svg" }
                                ].map((tech) => (
                                    <div key={tech.name} className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-purple-200 transition-colors">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-7 h-7 mb-1"
                                        />
                                        <span className="text-xs font-medium text-center text-muted">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex items-center gap-2">
                                <ExternalLink size={18} />
                                View Live Demo
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Github size={18} />
                                View Source Code
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Portfolio; 