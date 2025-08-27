import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-5 w-5 text-cyber-primary animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code className="h-5 w-5 text-cyber-secondary" />
            <span className="text-muted-foreground">and lots of</span>
            <Coffee className="h-5 w-5 text-accent" />
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
              Frontend Developer
            </h3>
            <p className="text-muted-foreground">
              Transforming ideas into digital reality
            </p>
          </div>
          
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;