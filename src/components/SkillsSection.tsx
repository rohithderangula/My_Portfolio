import { Code, Database, Globe, Shield, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-neon-blue to-neon-cyan",
      skills: [
        { name: "Java", level: 90, description: "Enterprise applications, NPTEL certified" },
        { name: "Python", level: 95, description: "Backend development, Django framework" },
        { name: "PHP", level: 85, description: "Web development, Karmi Mitra platform" },
        { name: "JavaScript", level: 80, description: "Frontend & backend development" }
      ]
    },
    {
      title: "Frontend Technologies", 
      icon: Globe,
      gradient: "from-neon-violet to-neon-pink",
      skills: [
        { name: "HTML5", level: 90, description: "Semantic markup, accessibility" },
        { name: "CSS3", level: 85, description: "Responsive design, animations" },
        { name: "React", level: 75, description: "Component-based development" },
        { name: "Bootstrap", level: 80, description: "Rapid UI development" }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      gradient: "from-green-400 to-blue-500",
      skills: [
        { name: "MySQL", level: 90, description: "Database design, optimization" },
        { name: "SQL", level: 88, description: "Complex queries, data analysis" },
        { name: "Django", level: 85, description: "REST APIs, authentication" },
        { name: "Node.js", level: 70, description: "Server-side JavaScript" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      skills: [
        { name: "Attack Surface", level: 80, description: "BluHawk module development" },
        { name: "Security Protocols", level: 75, description: "Backend security implementation" },
        { name: "Vulnerability Assessment", level: 70, description: "Security analysis tools" },
        { name: "Data Protection", level: 85, description: "Encryption, secure storage" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90, description: "Version control, collaboration" },
        { name: "VS Code", level: 95, description: "Development environment" },
        { name: "Postman", level: 85, description: "API testing, documentation" },
        { name: "Linux", level: 75, description: "Server management, CLI" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      gradient: "from-cyan-400 to-blue-600",
      skills: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking, debugging" },
        { name: "Team Collaboration", level: 90, description: "Agile methodologies" },
        { name: "Communication", level: 85, description: "Technical documentation" },
        { name: "Learning Agility", level: 92, description: "Adapting to new technologies" }
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience, continuous learning, 
            and passion for creating robust, secure, and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="glass-card p-8 hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                        <div 
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Skill Description */}
                      <p className="text-xs text-muted-foreground opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Languages Mastered", value: "4+", icon: Code },
            { label: "Frameworks Used", value: "6+", icon: Globe },
            { label: "Years Learning", value: "4+", icon: Brain },
            { label: "Projects Built", value: "10+", icon: Wrench }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card p-6 hover-lift group">
              <div className="inline-flex p-4 rounded-full bg-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-neon-violet/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default SkillsSection;