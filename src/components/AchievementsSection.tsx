import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users } from "lucide-react";

const achievements = [
  {
    title: "IIT Madras Hackathon",
    description: "Participant",
    icon: <Trophy className="h-8 w-8" />,
    category: "Competition",
    highlight: true
  },
  {
    title: "BITM Intra-College TechFest 2025",
    description: "Participant", 
    icon: <Users className="h-8 w-8" />,
    category: "Event",
    highlight: false
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and participation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 120
              }}
              viewport={{ once: true }}
            >
              <Card className={`card-gradient card-hover h-full ${
                achievement.highlight ? 'ring-2 ring-accent/20' : ''
              }`}>
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                      achievement.highlight 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {achievement.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  
                  <Badge 
                    variant={achievement.highlight ? 'default' : 'secondary'}
                    className={achievement.highlight ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            These experiences have shaped my approach to problem-solving and 
            collaborative development, providing valuable exposure to competitive 
            programming and technical innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};