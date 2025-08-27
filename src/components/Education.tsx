import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    level: "Bachelor's in Computer Science",
    institution: "Hallmark University",
    period: "2021 - 2025 (completed)",
    description: "Graduated with a Bachelor's in Computer Science and performed well, ranking among the top students. During my time in school, I built a series of web projects, honing my skills in web development.",
    icon: GraduationCap,
    highlight: true
  },
  {
    level: "Senior Secondary School",
    institution: "Federal Science and Technical College (FSTC)",
    period: "2019-2021",
    description: "Studied Computer Craft in CSS, completed NECO, NABTEB, and WAEC exams, building my technical skills.",
    icon: GraduationCap,
    highlight: false
  },
  {
    level: "Junior Secondary School",
    institution: "Premier College, Ijebu Ode",
    period: "2015-2018",
    description: "Finished my junior secondary education here, laying the foundation for my academic journey.",
    icon: GraduationCap,
    highlight: false
  }
];

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-tech-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            My Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey from foundation to specialization in Computer Science
          </p>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card 
                key={index} 
                className={`group transition-all duration-500 hover:shadow-elevated ${
                  edu.highlight ? 'bg-gradient-glow border-cyber-primary shadow-cyber' : 'bg-card'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        edu.highlight ? 'bg-gradient-cyber' : 'bg-secondary'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-8 w-8 ${
                          edu.highlight ? 'text-primary-foreground' : 'text-cyber-primary'
                        }`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {edu.level}
                          </h3>
                          <div className="flex items-center text-cyber-primary mb-2">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="font-medium">{edu.institution}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;