import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { Button } from "../../ui/button";
import Carousel from "../../ui/carousel";

const GraphAPI = () => {
    const navigate = useNavigate();

    // Graph API images for the carousel
    const graphApiImages = [
        "/graphAPI/leaflet_1.png",
        "/graphAPI/leaflet_2.png",
        "/graphAPI/flowchart.png",
        "/graphAPI/gpt_sdk.png",
        "/graphAPI/swiftetc.png"
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
                                src="/graphAPI/graph_api_logo.svg"
                                alt="Graph API Logo"
                                className="w-32 h-32 object-contain"
                            />
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-3">Graph API</h1>
                                <p className="text-muted-foreground text-base mb-3">
                                    Health Data Visualization Platform
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Data Visualization
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Mobile Development
                                    </span>
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        Health Tech
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8">
                            <Carousel
                                images={graphApiImages}
                                altText="Graph API Screenshot"
                                className="h-96"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="md:col-span-2">
                                <h2 className="text-xl font-semibold mb-4">About the Project</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    People generate an abundance of health data through many different wearable devices.
                                    All these different devices have their own way of storing and forwarding this data. If someone wanted to access health data from a user, they would have to integrate all the different data sources.

                                    Terra helps by unifying the available data sources into one API, making it more trivial for developers to build health solutions.
                                </p>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    The graphing and visualisation of health data is common practice in the health and fitness industry. It can, however, be a very time and resource consuming project to undertake.

                                    This is why we've built our own Graph API, so that the whole process could be done in the Terra backend and ultimately eliminate any additional complications for the customer. A user can simply request a graph of specific data and have it delivered swiftly to their product.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Health data visualization
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Customizable graph formats
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Cross-platform compatibility
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                        Real-time data tracking
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                                {[
                                    { name: "HTML", icon: "/assets/html.svg" },
                                    { name: "JavaScript", icon: "/assets/javascript.svg" },
                                    { name: "CSS", icon: "/assets/css.svg" },
                                    { name: "React Native", icon: "/assets/react.svg" },
                                    { name: "Swift", icon: "/assets/swift.svg" },
                                    { name: "OpenAI (GPT-3)", icon: "/assets/openai.svg" },
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
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default GraphAPI; 