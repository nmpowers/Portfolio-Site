import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-blue-100 to-accent/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-4">Places to Find Me</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I am always looking for new passions and opportunities! You can find me at the links below
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href="mailto:nathanielpowers7704@gmail.com"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <Mail size={28} />
            </div>
            <span className="text-sm">Email</span>
          </a>
          
          <a
            href="https://github.com/nmpowers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-chart-1 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <Github size={28} />
            </div>
            <span className="text-sm">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/nathaniel-powers-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-chart-2 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <Linkedin size={28} />
            </div>
            <span className="text-sm">LinkedIn</span>
          </a>
          
          <a
            href="https://www.instagram.com/nathaniel.powers/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-purple-500 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-background shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
              <Instagram size={28} />
            </div>
            <span className="text-sm">Instagram</span>
          </a>
        </div>

        <p className="text-secondary-foreground text-sm">
          © 2026 Nathaniel M. Powers. All rights reserved.
        </p>
      </div>
    </section>
  );
}
