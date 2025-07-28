import { Building2, Code2, Shield, Database, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Blue Cloud Softech Solutions Ltd",
      role: "Backend Development Intern",
      type: "On-site",
      duration: "Recent",
      description: "Developed robust backend systems using Python and Django, focusing on cybersecurity applications including the BluHawk Attack Surface module.",
      technologies: ["Python", "Django", "Cybersecurity", "BluHawk"],
      icon: Shield,
      gradient: "from-neon-blue to-neon-cyan",
      achievements: [
        "Built secure backend architecture",
        "Implemented attack surface monitoring",
        "Enhanced system security protocols"
      ]
    },
    {
      company: "IIDT Blackbucks",
      role: "Full Stack Developer",
      type: "Remote",
      duration: "Recent",
      description: "Engineered a comprehensive web-based calculator with advanced CRUD operations and session management, delivering seamless user experience.",
      technologies: ["Python", "MySQL", "JavaScript", "Web Development"],
      icon: Code2,
      gradient: "from-neon-violet to-neon-pink",
      achievements: [
        "Full CRUD functionality implementation",
        "Advanced session management",
        "Optimized database queries"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions through hands-on experience in backend development 
            and cybersecurity, with a focus on creating secure, scalable applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-violet to-neon-pink opacity-50"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:ml-auto lg:text-left'} lg:w-1/2`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline Dot
              <div className={`absolute top-8 ${index % 2 === 0 ? 'lg:right-[-2rem]' : 'lg:left-[-2rem]'} left-1/2 lg:left-auto transform -translate-x-1/2 lg:transform-none w-8 h-8 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10`}>
                <exp.icon className="h-4 w-4 text-white" />
              </div> */}

              {/* Experience Card */}
              <div className="glass-card p-8 hover-lift group relative overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                        <Building2 className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="bg-primary/20 px-3 py-1 rounded-full">{exp.type}</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-left text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6 text-left">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Technologies */}
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-capsule text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Code2, label: "Projects", value: "3", color: "text-neon-blue" },
            { icon: Database, label: "Backend Systems", value: "3", color: "text-neon-violet" },
            { icon: Globe, label: "Web Applications", value: "3", color: "text-neon-cyan" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center hover-lift group">
              <div className={`inline-flex p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-40 right-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-neon-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default ExperienceSection;