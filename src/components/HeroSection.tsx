import { Button } from "@/components/ui/button";
import { Download, MessageCircle, User } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/Gurukiran_S_Resume.pdf";
    link.download = "Gurukiran_S_Resume.pdf";
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-background"></div>
      <div className="absolute inset-0 hero-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6 text-primary-foreground"
            >
              Gurukiran S
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed"
            >
              AI & ML Student • Full-Stack Developer • Innovator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={downloadResume}
                className="btn-hero px-8 py-6 text-lg font-semibold focus-ring"
                aria-label="Download Resume"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 focus-ring"
                aria-label="Let's Connect"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-foreground/20 to-accent/20 flex items-center justify-center backdrop-blur-sm border border-primary-foreground/20">
                  <User className="w-32 h-32 text-primary-foreground/40" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse-subtle"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-foreground/40 rounded-full animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-4 text-primary-foreground/60 text-sm"
              >
                Update Photo
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary-foreground/40 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};