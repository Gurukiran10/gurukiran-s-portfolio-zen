import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "SQL", "C", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Core Competencies", 
    icon: <Brain className="h-6 w-6" />,
    skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms (DSA)"]
  },
  {
    title: "Professional Skills",
    icon: <Users className="h-6 w-6" />,
    skills: ["Analytical Thinking", "Problem-Solving", "Team Collaboration"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient card-hover h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 text-accent">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.2) + (skillIndex * 0.1) + 0.4,
                          type: "spring",
                          stiffness: 400
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className="px-3 py-1 text-sm hover:bg-primary/10 hover:border-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};