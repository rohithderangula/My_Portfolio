import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'Backend Specialist', 
    'Cybersecurity Intern',
    'Tech Innovator',
    'Problem Solver'
  ];

  useEffect(() => {
    const role = roles[currentRole];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= role.length) {
        setTypedText(role.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRole]);

  const ParticleBackground = () => (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image */}
            <div className="mt-20 mb-4 relative">
              <div className="w-40 h-40 mx-auto rounded-full glass-card p-1 shadow-[0_0_20px_hsl(var(--neon-violet)/0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[hsl(var(--neon-violet)/0.3)]">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/profile.png`} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Glowing floating dot */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[hsl(var(--neon-violet))] rounded-full border-4 border-background animate-float shadow-[0_0_20px_hsl(var(--neon-violet)/0.6)]"></div>
            </div>

          {/* Name and Title */}
          <h3 className="text-5xl  md:text-7xl font-bold mb-4 gradient-text">
            Derangula Rohith
          </h3>
          
          <div className="text-2xl md:text-3xl  h-16 flex items-center justify-center">
            <span className="text-muted-foreground">I'm a </span>
            <span className="ml-2 text-primary font-semibold typing-cursor min-w-[300px] text-left">
              {typedText}
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-7 max-w-2xl mx-auto leading-relaxed">
            Award-winning Computer Science & Engineering student passionate about backend development, 
            cybersecurity, and creating innovative solutions that make a difference in the digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
            
            {/* Download Resume Button */}
            <a 
              href="https://drive.google.com/file/d/1nAmhgmD8hWvkFECAWqQMUPg3lmeEk885/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="glass-card hover-glow px-8 py-6 text-lg font-semibold group relative overflow-hidden"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </a>

            {/* View Projects Button */}
            <a href="#experience">
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card hover-lift px-8 py-6 text-lg border-primary/50 hover:border-primary"
              >
                View Projects
              </Button>
            </a>
          </div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-20">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/rohithderangula' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rohith-derangula-729708285/' },
              { icon: Mail, label: 'Email', href: 'mailto:derangularohith@gmail.com' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="glass-card p-4 rounded-full hover-lift hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-primary animate-pulse" />
        </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;