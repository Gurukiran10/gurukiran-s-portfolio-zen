import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Code, Mail, Github, Linkedin, Phone } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Gurukiran S</h3>
            <p className="text-primary-foreground/80 max-w-md mx-auto">
              AI & ML Student • Full-Stack Developer • Innovator
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <div className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Github className="h-5 w-5" />
            </div>
            <div className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Linkedin className="h-5 w-5" />
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-primary-foreground/20 pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-primary-foreground/60 text-sm mb-4 sm:mb-0">
                © {currentYear} Gurukiran S. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-primary-foreground/60 text-sm">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-accent" />
                <span>and</span>
                <Code className="h-4 w-4 text-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute bottom-6 right-6"
      >
        <Button
          onClick={scrollToTop}
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl focus-ring"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
    </footer>
  );
};