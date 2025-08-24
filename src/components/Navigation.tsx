import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      sections.unshift("hero");

      for (const section of sections.reverse()) {
        const element = section === "hero" ? 
          document.getElementById("hero") : 
          document.getElementById(section);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-sticky" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection("#hero")}
          >
            Gurukiran S
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`relative focus-ring ${
                  activeSection === item.href.substring(1)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <DarkModeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`justify-start focus-ring ${
                    activeSection === item.href.substring(1)
                      ? "text-accent bg-accent/10"
                      : "text-foreground"
                  }`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};