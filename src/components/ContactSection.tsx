import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's get in touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For business inquiries or just to say hello, feel free to reach out.
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {formStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Alert
                variant="default"
                className="border-green-500 bg-green-50 dark:bg-green-950/30"
              >
                <CheckCircle className="h-4 w-4 text-green-500" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your message has been sent successfully. I'll get back to you
                  soon.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {formStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  There was a problem sending your message. Please try again
                  later.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-lg p-6 md:p-8 border border-border"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your.email@example.com"
                            type="email"
                            {...field}
                            className="bg-background/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What would you like to discuss?"
                          className="min-h-[150px] bg-background/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden group"
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <motion.span
                        animate={isSubmitting ? { x: [0, 10, 0] } : {}}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-primary-foreground opacity-20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">
              Prefer email? Reach me directly at{" "}
              <a
                href="mailto:nanangprasetya.2000@gmail.com"
                className="text-primary hover:underline transition-all"
              >
                nanangprasetya.2000@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
