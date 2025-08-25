import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. AIML",
    institution: "BITM",
    period: "2022–2026",
    grade: "CGPA: 8.17",
    type: "undergraduate",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    degree: "Pre-University",
    institution: "Mahesh PU College", 
    period: "2021–2022",
    grade: "83.5%",
    type: "higher-secondary",
    icon: <Award className="h-6 w-6" />
  },
  {
    degree: "Secondary",
    institution: "Govt PU College",
    period: "2020",
    grade: "81.44%",
    type: "secondary",
    icon: <Award className="h-6 w-6" />
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in technology and innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
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
                  <div className={`absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-background z-10 hidden md:block ${
                    edu.type === 'undergraduate' ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                  
                  <Card className={`card-gradient card-hover md:ml-20 ${
                    edu.type === 'undergraduate' ? 'ring-2 ring-accent/20' : ''
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-3 rounded-full ${
                          edu.type === 'undergraduate' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold">
                              {edu.degree}
                            </h3>
                            <Badge 
                              variant={edu.type === 'undergraduate' ? 'default' : 'secondary'}
                              className={edu.type === 'undergraduate' ? 'bg-accent text-accent-foreground' : ''}
                            >
                              {edu.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-foreground">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};