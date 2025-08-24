import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  "AI/ML",
  "Python", 
  "Full-Stack",
  "DSA",
  "Problem-Solving"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gradient">
            About Me
          </h2>
          
          <Card className="card-gradient card-hover mb-8">
            <CardContent className="p-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-muted-foreground mb-8"
              >
                I am an enthusiastic Artificial Intelligence and Machine Learning 
                undergraduate passionate about solving real-world problems through 
                programming, innovation, and collaboration. With strengths in Python, 
                full-stack development, and data structures, I focus on building 
                reliable, user-centered solutions and contributing meaningfully to team goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {highlight}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};