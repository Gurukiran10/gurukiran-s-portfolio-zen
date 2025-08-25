import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Career Launchpad – Generative AI Track",
    issuer: "Google Cloud",
    year: "2025",
    certificate: "https://drive.google.com/file/d/1ABC123/view"
  },
  {
    title: "IBM – Getting Started with Enterprise-Grade AI",
    issuer: "IBM",
    year: "2024",
    certificate: "https://drive.google.com/file/d/1DEF456/view"
  },
  {
    title: "TCS iON – Career Edge: Young Professional",
    issuer: "TCS iON",
    year: "2024",
    certificate: "https://drive.google.com/file/d/1GHI789/view"
  },
  {
    title: "EZ Trainings – Python",
    issuer: "EZ Trainings and Technology",
    year: "2024",
    certificate: null
  },
  {
    title: "Udemy – Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2025",
    certificate: "https://drive.google.com/file/d/1JKL012/view"
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
              <Card className="card-gradient hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      <Award className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    {cert.certificate ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(cert.certificate!, '_blank')}
                        className="text-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                    ) : (
                      <span className="text-sm text-muted-foreground italic">
                        Certificate not provided, add when available
                      </span>
                    )}
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