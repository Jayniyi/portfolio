import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Instagram, Twitter } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark/80 via-tech-surface/60 to-tech-dark/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyber-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyber-glow rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/90 mb-6">
            Aspiring Cybersecurity Professional
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I'm a passionate developer from Nigeria, transforming complex problems into simple, 
          beautiful, and intuitive designs. Building websites that are functional, user-friendly, 
          and visually appealing with a personal touch.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="mailto:obasanjoseph9@gmail.com" style={{ textDecoration: 'none' }}>
              <Button size="lg" className="bg-gradient-cyber hover:shadow-cyber transition-all duration-300 group">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </a>
            <a href="/cv.html" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-primary-foreground transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Download/Print CV
              </Button>
            </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/Jayniyi" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
          >
            <Github className="h-6 w-6 group-hover:text-primary-foreground" />
          </a>
          <a 
            href="https://www.linkedin.com/in/obasan-joseph-3695bb37b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
          >
            <Linkedin className="h-6 w-6 group-hover:text-primary-foreground" />
          </a>
          <a 
            href="https://www.instagram.com/jayni_yi?igsh=MTQ0dGRocWV5anh4dw%3D%3D&utm_source=qr" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
          >
            <Instagram className="h-6 w-6 group-hover:text-primary-foreground" />
          </a>
          <a 
            href="https://x.com/cyb_dev_?s=21" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
          >
            <Twitter className="h-6 w-6 group-hover:text-primary-foreground" />
          </a>
          <a 
            href="mailto:obasanjoseph9@gmail.com" 
            className="p-3 rounded-full bg-secondary hover:bg-gradient-cyber transition-all duration-300 hover:shadow-glow group"
          >
            <Mail className="h-6 w-6 group-hover:text-primary-foreground" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-primary rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;