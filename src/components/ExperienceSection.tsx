import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Trophy, Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Academic Projects",
    organization: "BITM",
    period: "2022 - Present",
    description: "Practical experience through end-to-end builds and teamwork",
    type: "education" as const
  },
  {
    title: "IIT Madras Hackathon",
    organization: "IIT Madras",
    period: "2024",
    description: "Participated in competitive programming and innovation challenges",
    type: "achievement" as const,
    certificate: "https://drive.google.com/file/d/1ABC123/view"
  },
  {
    title: "BITM Intra-College TechFest 2025",
    organization: "BITM",
    period: "2025",
    description: "Active participation in technical competitions and workshops",
    type: "achievement" as const
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
                  
                  <div className="p-6 rounded-lg bg-gradient-to-br from-background to-muted/30 border border-border/50 md:ml-20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-accent font-medium">{experience.organization}</p>
                        <p className="text-sm text-muted-foreground">{experience.period}</p>
                      </div>
                      <div className={`p-2 rounded-full ${
                        experience.type === 'education' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                      }`}>
                        {experience.type === 'education' ? (
                          <GraduationCap className="h-5 w-5" />
                        ) : (
                          <Trophy className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    {'certificate' in experience && experience.certificate && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(experience.certificate, '_blank')}
                        className="text-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </div>
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