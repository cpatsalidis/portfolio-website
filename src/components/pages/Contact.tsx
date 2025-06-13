import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../Navbar";
import { Button } from "../ui/button";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        Have a project in mind or want to discuss potential opportunities?
                        I'd love to hear from you. Feel free to reach out through any of
                        the following channels.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Email</h3>
                                <p className="text-muted-foreground">
                                    <a
                                        href="mailto:nanangprasetya.2000@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        cpatsalidis00@outlook.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                                <p className="text-muted-foreground">
                                    <a
                                        href="tel:+1234567890"
                                        className="hover:text-primary transition-colors"
                                    >
                                        +44 7756608387
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Location</h3>
                                <p className="text-muted-foreground">
                                    Nicosia, Cyprus
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-8">
                        <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 rounded-md bg-background border border-input"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 rounded-md bg-background border border-input"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md bg-background border border-input"
                                    placeholder="Your message"
                                />
                            </div>
                            <Button className="w-full md:w-auto">Send Message</Button>
                        </form>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Contact; 