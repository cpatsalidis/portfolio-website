import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { Button } from "../../ui/button";

const EventId = () => {
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
            <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <a
                        href="/"
                        className="absolute top-6 left-6 px-4 py-2 rounded-full bg-purple-400 text-white font-semibold shadow hover:bg-purple-500 transition-colors dark:bg-white/90 dark:text-[#430A48] dark:hover:bg-white"
                        style={{ zIndex: 10 }}
                    >
                        ← Back to Home
                    </a>
                    <div className="section-card-bg rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 0 40px 0 #430A48, 0 0 80px 0 #430A48' }}>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                            <img
                                src="/assets/event_logo_color.png"
                                alt="Event Id Logo"
                                className="w-24 h-24 object-contain"
                            />
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Id</h1>
                                <p className="text-muted-foreground text-lg mb-4">
                                    Ticketing Management Service (TMS)
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Ticketing
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Event Analysis
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        UI/UX Design
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <img
                                src="/assets/event-id.png"
                                alt="Event Id Project"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="md:col-span-2">
                                <h2 className="text-2xl font-semibold mb-6">About the Project</h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Event Id is a Ticketing Management Service (TMS) that supports event organizers from ticket distribution and management to providing event analysis reports. The platform streamlines event operations and enhances the attendee experience.
                                </p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    The project offers a robust solution for managing events, tickets, and analytics, making it easier for organizers to focus on delivering successful events.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Ticket distribution & management
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Real-time analytics
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Attendee management
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Secure payment processing
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                                {[
                                    { name: "Figma", icon: "/assets/figma.svg" },
                                    { name: "Whimsical", icon: "/assets/whimsical.svg" },
                                    { name: "InVision", icon: "/assets/invision.svg" }
                                ].map((tech) => (
                                    <div key={tech.name} className="flex flex-col items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-8 h-8 mb-2"
                                        />
                                        <span className="text-sm font-medium text-center">{tech.name}</span>
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

export default EventId; 