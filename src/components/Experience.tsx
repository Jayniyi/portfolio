import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Building } from "lucide-react";

const experienceData = [
  {
    role: "Web Developer (Self-Taught)",
    company: "720 Degree Innovation Hub",
    period: "During University",
    description: "Served as the committe manager at 720, overseeing operations and applying my skills in a leadership role.",
    type: "Leadership",
    current: false
  },
  {
    role: "Web Developer (Internship)",
    company: "720 Degree Innovation Hub",
    period: "2022 - 2023",
    description: "Enhanced my web development skills during my university years, working with the team and learning from hands-on experience.",
    type: "Development",
    current: false
  },
  {
    role: "UI/UX Designer",
    company: "720 Degree Innovation Hub",
    period: "Before University",
    description: "Started my career in UI/UX design, building a strong foundation before pursuing higher education.",
    type: "Design",
    current: false
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-tech-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            My Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey from design to development and leadership
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {experienceData.map((exp, index) => (
            <Card 
              key={index}
              className="group bg-card hover:bg-gradient-glow border-border hover:border-cyber-primary transition-all duration-500 hover:shadow-elevated animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-cyber-primary mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                          {exp.type}
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;