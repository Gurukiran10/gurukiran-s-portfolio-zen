import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <title>Gurukiran S - AI & ML Student | Full-Stack Developer | Portfolio</title>
      <meta 
        name="description" 
        content="Gurukiran S - Artificial Intelligence & Machine Learning student and Full-Stack Developer. Explore my projects, skills, and experience in AI/ML, Python, and web development." 
      />
      <meta property="og:title" content="Gurukiran S - AI & ML Developer Portfolio" />
      <meta 
        property="og:description" 
        content="AI & ML Student, Full-Stack Developer & Innovator. Building reliable, user-centered solutions with Python, JavaScript, and modern web technologies." 
      />
      <meta property="og:type" content="website" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
