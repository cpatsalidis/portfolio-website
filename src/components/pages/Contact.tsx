import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../Navbar";
import { Button } from "../ui/button";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            if (!formRef.current) {
                throw new Error('Form reference not found');
            }

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current
            );

            if (result.status === 200) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                formRef.current.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <img src="/assets/purple-line.svg" alt="decorative purple line" className="fixed inset-0 w-full h-full object-cover object-center z-0 pointer-events-none" style={{ filter: 'hue-rotate(70deg) saturate(2)', opacity: 0.2 }} />
            <Navbar />

            {/* Decorative Blobs */}
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
                    className="max-w-4xl mx-auto"
                >
                    <div className="section-card-bg rounded-2xl shadow-lg p-8" style={{ boxShadow: '0 0 40px 0 #430A48, 0 0 80px 0 #430A48' }}>
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
                                            href="mailto:cpatsalidis00@outlook.com"
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
                                            href="tel:+447756608387"
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

                        <div className="bg-[rgba(43,10,41,0.85)] border border-[#a259f7] rounded-2xl p-8 shadow-md">
                            <h2 className="text-2xl font-semibold mb-6 text-white">Send a Message</h2>
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2 text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 rounded-md bg-background border border-input text-foreground"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2 text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 rounded-md bg-background border border-input text-foreground"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2 text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-md bg-background border border-input text-foreground"
                                        placeholder="Your message"
                                    />
                                </div>
                                {submitStatus.type && (
                                    <div className={`p-4 rounded-md ${submitStatus.type === 'success'
                                        ? 'bg-green-500/20 text-green-200'
                                        : 'bg-red-500/20 text-red-200'
                                        }`}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto bg-purple-700 hover:text-purple-700 hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-105 dark:text-white dark:hover:text-purple-700 font-semibold"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Contact; 