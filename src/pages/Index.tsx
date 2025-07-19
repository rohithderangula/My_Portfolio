import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="achievements">
          <CertificationsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="glass-card border-t border-white/20 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center text-sm font-bold text-white">
              DR
            </div>
            <span className="text-lg font-bold gradient-text">Derangula Rohith</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Full Stack Developer • Cybersecurity Enthusiast • Tech Innovator
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Derangula Rohith. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
