import {Download, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
          <span className="text-xl font-semibold text-foreground">
            Nathaniel Powers Portfolio
          </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 mr-4">
              <button
                  onClick={() => scrollToSection("hero")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button
                  onClick={() => scrollToSection("timeline")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Timeline
              </button>
              <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>

            <a
                href="/resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              <Download size={16} />
              Resume
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  aria-label="Download Resume"
              >
                <Download size={20} />
              </a>
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-muted-foreground hover:text-foreground"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
              >
                Home
              </button>
              <button
                  onClick={() => scrollToSection("timeline")}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
              >
                Timeline
              </button>
              <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
              >
                Projects
              </button>
              <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
      )}
    </nav>
  );
}