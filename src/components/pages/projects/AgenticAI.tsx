import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { Button } from "../../ui/button";
import Carousel from "../../ui/carousel";

const AgenticAI = () => {
    const navigate = useNavigate();

    // AI Community images for the carousel
    const aiImages = [
        "/AI/obse.svg",
        "/AI/patial.svg"
    ];

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
                {/* Back to Home button removed */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="section-card-bg rounded-2xl shadow-lg p-6" style={{ boxShadow: '0 0 40px 0 #430A48, 0 0 80px 0 #430A48' }}>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                            <img
                                src="/AI/ai_logo.svg"
                                alt="Agentic AI Logo"
                                className="w-32 h-32 object-contain rounded-full"
                                style={{ backgroundColor: 'white' }}
                            />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-3">Agentic AI Community</h1>
                                <p className="text-muted-foreground text-base mb-3">
                                    Machine Learning Thesis Project
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Machine Learning
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        AI Agents
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Research
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Project Carousel */}
                        <div className="mb-8">
                            <Carousel
                                images={aiImages}
                                altText="Agentic AI Community Screenshot"
                                className="h-96"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="md:col-span-2">
                                <h2 className="text-xl font-semibold mb-4">About the Project</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    This was part of my Master Thesis, where I modelled and implemented a community of agents
                                    that could collaborate with each other to achieve a certain goal. This was centered around
                                    Machine Learning and the ways in which information can be shaped and revealed in optimal
                                    ways to a controlled collective of agents.
                                </p>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    The research focused on developing intelligent agent systems that can work together
                                    effectively, exploring how information sharing and collaboration can be optimized
                                    in multi-agent environments.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Multi-agent collaboration
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Information optimization
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Machine learning algorithms
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Goal-oriented behavior
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                {[
                                    { name: "Scikit-learn", icon: "/assets/python.svg" },
                                    { name: "Python", icon: "/assets/python.svg" },
                                    { name: "Jupyter Notebook", icon: "/assets/jupyter.svg" },
                                    { name: "Mesa", icon: "/assets/mesa_logo.png" },
                                    { name: "Gymnasium/OpenAI Gym", icon: "/assets/gymnasium.svg" }
                                ].map((tech) => (
                                    <div key={tech.name} className="flex flex-col items-center p-3 bg-white rounded-lg hover:bg-purple-200 transition-colors">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-7 h-7 mb-1"
                                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                        />
                                        <span className="text-xs font-medium text-center text-muted">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex items-center gap-2" asChild>
                                <a href="/public/FYP_report_cp620_01866599_compressed.pdf" target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={18} />
                                    View Thesis
                                </a>
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2" asChild>
                                <a href="https://github.com/cpatsalidis/Imperial-FYP-2024" target="_blank" rel="noopener noreferrer">
                                    <Github size={18} />
                                    View Source Code
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default AgenticAI; 