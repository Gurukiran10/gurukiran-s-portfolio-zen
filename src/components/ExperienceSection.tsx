import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Academic Projects",
    description: "Practical experience through end-to-end builds and teamwork",
    icon: <GraduationCap className="h-6 w-6" />,
    type: "academic"
  },
  {
    title: "IIT Madras Hackathon",
    description: "Hackathon Participation",
    icon: <Trophy className="h-6 w-6" />,
    type: "competition"
  },
  {
    title: "BITM Intra-College TechFest 2025", 
    description: "Hackathon Participation",
    icon: <Trophy className="h-6 w-6" />,
    type: "competition"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through academic projects and competitive programming
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden md:block"></div>
                  
                  <Card className="card-gradient card-hover md:ml-20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 text-accent">
                          {experience.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="card-gradient">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Open to Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently seeking professional opportunities to apply my skills in 
                  AI/ML and full-stack development while contributing to innovative projects 
                  and collaborative team environments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};