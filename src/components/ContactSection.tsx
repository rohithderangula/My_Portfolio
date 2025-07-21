import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xblkdvzv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      alert('Error: ' + (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Rohithderangula11@gmail.com",
      href: "mailto:rohithderangula11@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      href: "#",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: MessageCircle,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      handle: "@rohith-derangula",
      href: "https://github.com/rohithderangula",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Derangula Rohith",
      href: "https://www.linkedin.com/in/rohith-derangula-729708285/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Mail,
      label: "Email",
      handle: "Rohithderangula11@gmail.com",
      href: "mailto:rohithderangula11@gmail.com",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects? Have a question about my work? 
            I'm always open to discussing new opportunities and exciting challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about creating innovative solutions and always excited to connect 
                with fellow developers, potential collaborators, and tech enthusiasts.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {contact.label}
                      </div>
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="glass-card p-4 hover-lift group flex items-center space-x-4 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${social.gradient} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{social.label}</div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glass-strong border-white/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="glass-strong border-white/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="glass-strong border-white/20 focus:border-primary transition-colors"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    className="glass-strong border-white/20 focus:border-primary transition-colors min-h-[120px] resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full glass-card hover-glow bg-gradient-to-r from-neon-blue to-neon-violet hover:opacity-90 transition-opacity group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </>
                  )}
                </Button>

                {/* Form Footer */}
                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to connecting with you!
                </p>
              </form>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover-glow border-primary/50 hover:border-primary group"
                asChild
              >
                <a href="mailto:rohithderangula11@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Quick Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover-glow border-primary/50 hover:border-primary group"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn Connect
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default ContactSection;