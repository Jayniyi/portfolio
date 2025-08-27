import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-tech-surface to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's collaborate and build something amazing together.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <Card className="bg-card border-border animate-slide-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-cyber-primary"><a href="mailto:obasanjoseph9@gmail.com">obasanjoseph9@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-cyber-primary">Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground"><a href="tel:09116063649">09116063649</a>
                    </p>
                    <p className="text-cyber-primary">Available on request</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Jayniyi" 
                    className="p-3 rounded-lg bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
                  >
                    <Github className="h-5 w-5 group-hover:text-primary-foreground" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/obasan-joseph-3695bb37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                    className="p-3 rounded-lg bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:text-primary-foreground" />
                  </a>
                  <a 
                    href="mailto:obasanjoseph9@gmail.com" 
                    className="p-3 rounded-lg bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          {/* <Card className="bg-card border-border animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent transition-all duration-300"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-cyber hover:shadow-cyber transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;