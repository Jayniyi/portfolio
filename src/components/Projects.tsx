import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Plus } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-tech-surface" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
            Projects & Demos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and technical skills
          </p>
        </div>

        {/* Projects as flex cards with images */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Example Project Card 1 */}
          <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
            <CardHeader>
              <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                <img src="/tictactoe.png" alt="Tic Tac Toe" className="object-cover h-full w-full" />
              </div>
              <CardTitle className="text-cyber-primary">Tic Tac Toe Game</CardTitle>
              <CardDescription>
                Fun browser game built with React.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Css</Badge>
              <Badge variant="secondary">Game</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                 <a href="https://github.com/Jayniyi/x-and-o"> GitHub</a>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                 <a href="https://ttic-tacc-toe.netlify.app/">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Example Project Card 2 */}
          <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
            <CardHeader>
              <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                <img src="/kudaclone.png" alt="Kuda Clone" className="object-cover h-full w-full" />
              </div>
              <CardTitle className="text-cyber-primary">Kuda Clone</CardTitle>
              <CardDescription>
                Extension for counting, built for productivity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Html</Badge>
                <Badge variant="secondary">Css</Badge>
                <Badge variant="secondary">Bulma</Badge>
                <Badge variant="secondary">Finance</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  <a href="https://github.com/Jayniyi/kuda-clone">Kuda Clone</a>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="https://lucky-lebkuchen-e9fd1a.netlify.app/">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Example Project Card 3 */}
          <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
            <CardHeader>
              <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                <img src="/jayfoodz.png" alt="Jayniy Food Website" className="object-cover h-full w-full" />
              </div>
              <CardTitle className="text-cyber-primary">Jayniy Food Website</CardTitle>
              <CardDescription>
                Modern food ordering platform with beautiful UI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Html</Badge>
                 <Badge variant="secondary">Css</Badge>
                  <Badge variant="secondary">Javasscript</Badge>
                <Badge variant="secondary">Food</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  <a href="https://github.com/Jayniyi/JayFoodz-food-restaurant-">Git Hub</a>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                 <a href="https://jayniyi.github.io/JayFoodz-food-restaurant-/">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Student Engagement Platform Card */}
          {/* <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
            <CardHeader>
              <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                <img src="/student.png" alt="Student Engagement Platform" className="object-cover h-full w-full" />
              </div>
              <CardTitle className="text-cyber-primary">Student Engagement Platform</CardTitle>
              <CardDescription>
                Platform for students to vote, view newsletters, lodge complaints, and see real-time voting results.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Vue</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Realtime</Badge>
                <Badge variant="secondary">Voting</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  <a href="#">GitHub</a>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="studentengagementplatfrom.netlify.app">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card> */}
          {/* Barbing Website Card */}
          <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
            <CardHeader>
              <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                <img src="/blade.png" alt="Barbing Website" className="object-cover h-full w-full" />
              </div>
              <CardTitle className="text-cyber-primary">Barbing Website</CardTitle>
              <CardDescription>
                Modern website for a barbing salon, showcasing services and booking options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Tailwind</Badge>
                <Badge variant="secondary">Booking</Badge>
                <Badge variant="secondary">Salon</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  <a href="https://github.com/Jayniyi/BLADECRAFT">GitHub</a>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="https://bladecraft.netlify.app/about">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
            {/* Example Project Card 6 */}
            {/* <Card className="bg-tech-dark border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-300 group w-[320px]">
              <CardHeader>
                <div className="flex items-center justify-center h-32 bg-secondary/50 rounded-lg mb-4 overflow-hidden group-hover:bg-cyber-primary/10 transition-colors">
                  <img src="/blade.png" alt="Project Six" className="object-cover h-full w-full" />
                </div>
                <CardTitle className="text-cyber-primary">Project Six</CardTitle>
                <CardDescription>
                  Short description of the sixth project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Html</Badge>
                  <Badge variant="secondary">Css</Badge>
                  <Badge variant="secondary">Bootrap</Badge>
                  <Badge variant="secondary">Beauty</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    <a href="https://github.com/Jayniyi/BLADECRAFT">GitHub</a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <a href="https://bladecraft.netlify.app/about">Live Demo</a>
                  </Button>
                </div>
              </CardContent>
            </Card> */}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;