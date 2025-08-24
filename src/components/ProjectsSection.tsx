import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AirSync — Real-Time Distance-Constrained Dual Drone Coordination",
    status: "In Progress",
    description: "Python-based system to synchronize two drones while maintaining safe inter-drone distance; control algorithms and safety mechanisms to avoid collisions.",
    longDescription: "Advanced drone coordination system implementing real-time communication protocols, GPS-based positioning, and machine learning algorithms for predictive collision avoidance. Features autonomous flight path optimization and emergency response protocols.",
    tags: ["Python", "Computer Vision", "Machine Learning", "IoT", "Real-time Systems"]
  },
  {
    title: "Patient Queue & Appointment System",
    status: "Completed",
    description: "Full-stack app with secure auth, dynamic queues, automated scheduling, and integrated feedback/query modules for smooth multi-user workflows.",
    longDescription: "Comprehensive healthcare management platform built with modern web technologies. Implements role-based authentication, real-time queue updates, automated notification systems, and comprehensive analytics dashboard for healthcare providers.",
    tags: ["Full-Stack", "Authentication", "Real-time", "Database Design", "API Development"]
  },
  {
    title: "E-Commerce Platform",
    status: "Completed", 
    description: "Modular web app with authentication, product catalog, cart management, and a reliable backend designed for scalability and debuggability.",
    longDescription: "Enterprise-grade e-commerce solution featuring microservices architecture, advanced search capabilities, payment gateway integration, inventory management, and comprehensive admin panel with analytics and reporting features.",
    tags: ["E-Commerce", "Microservices", "Payment Integration", "Scalable Architecture", "Admin Panel"]
  }
];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
              <Card className="card-gradient card-hover h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl font-semibold leading-tight">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant={project.status === "In Progress" ? "default" : "secondary"}
                      className={project.status === "In Progress" ? "bg-accent text-accent-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.2) + (tagIndex * 0.05) + 0.4
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      onClick={() => toggleProject(index)}
                      className="w-full focus-ring"
                    >
                      {expandedProject === index ? (
                        <>
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
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