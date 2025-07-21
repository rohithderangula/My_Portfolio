import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Programming in Java",
      provider: "NPTEL",
      date: "2024",
      description: "Comprehensive Java programming course covering OOP concepts, data structures, and enterprise development.",
      skills: ["Java", "OOP", "Data Structures", "Enterprise Development"],
      credentialId: "NPTEL24CS105S666200130",
      verifyLink: "https://drive.google.com/file/d/1onIHnNZfqCNveCRHggpuv9WdREkJvamu/view?usp=sharing",
      badgeColor: "from-blue-500 to-indigo-600",
      glowColor: "shadow-blue-500/50"
    },
    {
      title: "Java Programming",
      provider: "edX",
      date: "2023",
      description: "Advanced Java programming certification focusing on modern development practices and frameworks.",
      skills: ["Advanced Java", "Spring Framework", "Maven", "Testing"],
      credentialId: "edX-JAVA-2023",
      verifyLink: "#",
      badgeColor: "from-green-500 to-teal-600",
      glowColor: "shadow-green-500/50"
    }
  ];

  const achievements = [
    {
      title: "Tech Fest Winner",
      event: "VKR, VNB, AGK Engineering Colleges",
      project: "Karmi Mitra - Job Assistance Platform",
      award: "🥇 First Place",
      year: "2024",
      description: "Won first place for developing an innovative job assistance platform that connects job seekers with opportunities.",
      impact: "500+ student participants",
      category: "Competition",
      badgeColor: "from-yellow-400 to-orange-500"
    },
    {
      title: "Innovation Day Winner",
      event: "VR Siddhartha Engineering College",
      project: "Abhaya - People Safety App",
      award: "🥈 Second Place",
      year: "2024",
      description: "Secured second place for developing a comprehensive safety application with SOS and drone surveillance features.",
      impact: "300+ participants",
      category: "Innovation",
      badgeColor: "from-purple-500 to-pink-500"
    },
    {
      title: "University Chess Championship",
      event: "Krishna University",
      award: "🥈 Second Place",
      year: "2023",
      description: "Demonstrated strategic thinking and problem-solving skills in competitive chess tournament.",
      impact: "200+ participants",
      category: "Sports",
      badgeColor: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition of continuous learning, technical excellence, and innovative thinking 
            through certified programs and competitive achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.badgeColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Certificate Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.badgeColor} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">Issued</div>
                      <div className="flex items-center text-primary font-semibold">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <h4 className="text-xl font-bold text-foreground mb-2">{cert.title}</h4>
                  <div className={`text-lg font-semibold bg-gradient-to-r ${cert.badgeColor} bg-clip-text text-transparent mb-4`}>
                    {cert.provider}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Skills Covered
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="skill-capsule text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Details */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Credential ID: <span className="font-mono text-foreground">{cert.credentialId}</span>
                      </div>
                      <Button 
                        size="sm"
                        className={`bg-gradient-to-r ${cert.badgeColor} hover:opacity-90 transition-opacity text-white`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.badgeColor} opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Competition Achievements
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift group relative overflow-hidden text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.badgeColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Achievement Badge */}
                  <div className="mb-6">
                    <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${achievement.badgeColor} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Award Display */}
                  <div className="text-3xl mb-2">{achievement.award}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h4>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${achievement.badgeColor} bg-clip-text text-transparent mb-4`}>
                    {achievement.event}
                  </div>

                  {/* Project Name (if applicable) */}
                  {achievement.project && (
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Project</div>
                      <div className="text-sm font-semibold text-primary">{achievement.project}</div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact & Details */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-400" />
                        {achievement.impact}
                      </div>
                    </div>
                    <span className="text-xs bg-primary/20 px-2 py-1 rounded-full text-primary font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.badgeColor} opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Certifications", value: "2+", description: "Technical Certifications" },
              { label: "Awards Won", value: "3+", description: "Competition Awards" },
              { label: "Participants Beat", value: "1000+", description: "Total Competitions" },
              { label: "Recognition", value: "Multi-College", description: "Achievement Scope" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default CertificationsSection;