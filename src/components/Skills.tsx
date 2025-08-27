import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Database, 
  GitBranch, 
  Layers,
  Shield,
  Smartphone,
  Globe
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "bg-gradient-cyber"
  },
  {
    category: "Styling & Design",
    icon: Palette,
    skills: ["Tailwind CSS", "Bulma CSS", "CSS3", "Responsive Design"],
    color: "bg-gradient-to-r from-cyber-secondary to-accent"
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Firebase", "NoSQL", "API Integration"],
    color: "bg-gradient-to-r from-accent to-cyber-primary"
  },
  {
    category: "Development Tools",
    icon: GitBranch,
    skills: ["Git", "Version Control", "Collaboration"],
    color: "bg-gradient-to-r from-cyber-primary to-cyber-glow"
  },
  {
    category: "Specializations",
    icon: Shield,
    skills: ["Cybersecurity", "Full-Stack Development", "Problem Solving"],
    color: "bg-gradient-to-r from-cyber-glow to-cyber-secondary"
  },
  {
    category: "Soft Skills",
    icon: Layers,
    skills: ["Leadership", "Team Management", "Project Planning"],
    color: "bg-gradient-to-r from-secondary to-accent"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-tech-elevated">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group bg-card hover:bg-gradient-glow border-border hover:border-cyber-primary transition-all duration-500 hover:shadow-cyber animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center justify-between p-2 rounded-md bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                      >
                        <span className="text-secondary-foreground font-medium">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Featured Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Currently Expanding Into
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Cybersecurity", "Advanced React", "Cloud Computing", "DevOps"].map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-cyber rounded-full text-primary-foreground font-medium hover:shadow-cyber transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;