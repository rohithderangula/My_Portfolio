import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card backdrop-blur-lg border-b border-white/20 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center text-sm font-bold text-white">
                DR
              </div>
              <span className="text-xl font-bold gradient-text">Derangula Rohith</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:derangularohith@gmail.com', label: 'Email' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg glass-card hover-glow transition-all duration-300 group"
                  >
                    <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
              
              <Button
                size="sm"
                className="glass-card hover-glow bg-gradient-to-r from-neon-blue to-neon-violet hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-card hover-glow transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 glass-card border-l border-white/20 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            {/* Navigation Items */}
            <div className="space-y-4 mb-8">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left p-4 rounded-lg glass-card hover-glow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 mb-8">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Connect
              </div>
              {[
                { icon: Github, href: '#', label: 'GitHub Profile' },
                { icon: Linkedin, href: '#', label: 'LinkedIn Profile' },
                { icon: Mail, href: 'mailto:derangularohith@gmail.com', label: 'Send Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center space-x-3 p-3 rounded-lg glass-card hover-glow transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-primary transition-colors">{social.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="w-full glass-card hover-glow bg-gradient-to-r from-neon-blue to-neon-violet hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;