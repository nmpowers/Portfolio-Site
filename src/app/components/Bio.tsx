import { ImageWithFallback } from './figma/ImageWithFallback';
import {User, Code, Lightbulb, MapPin, Box, Move3D, TabletSmartphone} from 'lucide-react';
import headshot from '../../assets/headshot1.jpeg'

export function Bio() {
    return (
        <section id="bio" className="py-20 px-4 bg-gradient-to-b from-primary/20 to-muted">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Headshot */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl transform translate-y-4"></div>

                            <ImageWithFallback
                                src={ headshot }
                                alt="Nathaniel Powers"
                                className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
                            />

                            {/* icon badge */}
                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-primary text-primary-foreground p-3 md:p-4 rounded-full shadow-lg z-20 border-2 border-background">
                                <User size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            About Me
                        </h2>

                        <div className="flex items-center gap-2 text-primary font-medium mb-8 text-lg">
                            <MapPin size={20} />
                            <span>Worcester, MA</span>
                        </div>

                        <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
                            <p>
                                Hello! My name is Nathaniel Powers, and I am a current senior at Worcester Polytechnic Institute studying a double major in Computer Science and Mechanical Engineering. <br/><br/>
                                I am projected to graduate this May (2026) with high distinction, and I am searching for opportunities focused on building innovative user experiences, 3D tools, and sustainable engineering applications. <br/><br/>
                                I have been fortunate to work on some exciting projects and teams as a leader, a developer, and a teammate. You can find out more about them below ⬇️

                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-sm">
                                <Code size={18} className="text-primary" />
                                Full-Stack Development
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-sm">
                                <Lightbulb size={18} className="text-primary" />
                                Creative Design / Innovation
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-sm">
                                <TabletSmartphone size={18} className="text-primary" />
                                User Experience / Interface
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-sm">
                                <Box size={18} className="text-primary" />
                                3D Graphics & Virtual Reality
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium shadow-sm">
                                <Move3D size={18} className="text-primary" />
                                Engineering Tools
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
