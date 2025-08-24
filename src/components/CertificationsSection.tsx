import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Cloud, Brain, Code, Globe, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Career Launchpad — Generative AI Track",
    issuer: "Google Cloud",
    year: "2025",
    icon: <Brain className="h-6 w-6" />,
    category: "AI/ML",
    highlight: true
  },
  {
    title: "Getting Started with Enterprise-Grade AI",
    issuer: "IBM",
    year: "2024",
    icon: <Cloud className="h-6 w-6" />,
    category: "AI/ML",
    highlight: false
  },
  {
    title: "Career Edge: Young Professional",
    issuer: "TCS iON",
    year: "2024", 
    icon: <Award className="h-6 w-6" />,
    category: "Professional",
    highlight: false
  },
  {
    title: "Python Programming",
    issuer: "EZ Trainings and Technology",
    year: "2024",
    icon: <Code className="h-6 w-6" />,
    category: "Programming",
    highlight: false
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2025",
    icon: <Globe className="h-6 w-6" />,
    category: "Web Development",
    highlight: true
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Card className={`card-gradient card-hover h-full ${
                cert.highlight ? 'ring-2 ring-accent/20' : ''
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-full ${
                      cert.highlight 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {cert.icon}
                    </div>
                    <Badge 
                      variant={cert.highlight ? 'default' : 'secondary'}
                      className={cert.highlight ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {cert.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold mb-3 leading-tight">
                    {cert.title}
                  </CardTitle>
                  
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-medium">
                      {cert.issuer}
                    </p>
                    
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="card-gradient max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Commitment to Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                These certifications represent my dedication to staying current with 
                industry trends and technologies. From AI and machine learning to 
                full-stack development, I continuously expand my skill set to deliver 
                innovative solutions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};