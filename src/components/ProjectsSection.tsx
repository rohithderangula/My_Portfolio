import { Shield, Users, Award, ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Abhaya - People Safety App",
      description: "Revolutionary safety application featuring SOS emergency alerts, real-time location tracking, voice activation, and advanced drone surveillance for comprehensive personal security.",
      image: `${import.meta.env.BASE_URL}assets/abhaya.png`, // Updated path
      technologies: ["PHP", "HTML", "css", "JavaScript", "MySQL", "Bootstrap", "GPS API"],
      features: [
        "One-touch SOS emergency alert system",
        "Real-time GPS location tracking",
        "Voice-activated distress calls",
        "Drone surveillance integration",
        "Emergency contact notification"
      ],
      awards: ["🥈 Innovation Day Winner - VR Siddhartha"],
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      glowColor: "shadow-red-500/50",
      demoLink: "#",
      githubLink: "https://github.com/rohithderangula/Be_Abhaya",
      status: "Featured Project"
    },
    {
      title: "Karmi Mitra - Job Assistance Platform",
      description: "Comprehensive job assistance platform connecting job seekers with opportunities, featuring advanced matching algorithms, skill assessment, and career guidance tools.",
      image: `${import.meta.env.BASE_URL}assets/karmi_mitra.png`, // Updated path 
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      features: [
        "Intelligent job matching algorithm",
        "Skill assessment and certification",
        "Resume builder and optimization",
        "Career guidance and mentorship",
        "Employer-candidate communication hub"
      ],
      awards: ["🥇 Tech Fest Winner - VKR, VNB & AGK college of Engineering"],
      icon: Users,
      gradient: "from-blue-500 to-purple-500",
      glowColor: "shadow-blue-500/50",
      demoLink: "#",
      githubLink: "https://github.com/rohithderangula/Karmi_Mitra",
      status: "Award Winner"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that demonstrate my passion for creating impactful 
            technology that solves real-world problems and enhances user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Card */}
              <div className="glass-card overflow-hidden hover-lift relative">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`p-8 rounded-full bg-gradient-to-r ${project.gradient} opacity-20`}>
                      <project.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {project.awards.map((award, awardIndex) => (
                          <span key={awardIndex} className="text-sm text-yellow-400 font-medium">
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="skill-capsule text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4 border-t border-white/10">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-opacity`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                    </a>
                    
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-white/20 hover:border-white/40">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/rohithderangula?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="glass-card hover-glow px-8 py-6 text-lg border-primary/50 hover:border-primary group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View All Projects on GitHub
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default ProjectsSection;