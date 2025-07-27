import { GraduationCap, Award, Code, Target } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "Krishna University",
      degree: "B.Tech Computer Science & Engineering",
      duration: "2022 - 2026",
      grade: "Percentage: 85%",
      icon: GraduationCap,
      color: "from-neon-blue to-neon-cyan"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "Intermediate - MPC",
      duration: "2020 - 2022", 
      grade: "Percentage: 87%",
      icon: Award,
      color: "from-neon-violet to-neon-pink"
    }
  ];

  const highlights = [
    { icon: Code, label: "Backend Specialist", value: "Python, Django" },
    { icon: Target, label: "Problem Solver", value: "Innovative Solutions" },
    { icon: Award, label: "Award Winner", value: "Multiple Competitions" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating 
            impactful solutions that bridge the gap between complex problems and elegant code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - ID Card */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover-lift group">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-violet/30 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/profile.png`} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Derangula Rohith</h3>
                  <p className="text-primary font-semibold">Full Stack Developer</p>
                  <p className="text-muted-foreground">Backend specialist</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Specialization</span>
                  <span className="text-foreground font-medium">Backend Development</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Focus Area</span>
                  <span className="text-foreground font-medium">Web Development</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-foreground font-medium">Full Stack Projects</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-green-400 font-medium flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Available for Opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="glass-card p-4 hover-lift group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{highlight.label}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Educational Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-violet to-neon-pink"></div>
              
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative mb-12 ml-16 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-11 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content Card */}
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20`}>
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-primary bg-primary/20 px-3 py-1 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
                    <p className="text-primary font-semibold mb-2">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-neon-pink/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default AboutSection;