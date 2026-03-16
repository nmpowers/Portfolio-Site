import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

import genAISplash from '../../assets/projects/GenAI-Splash-Img.png';
import graphicViewerSplash from '../../assets/projects/Graphic-Viewer-Img.png'
import ecolincERPSplash from '../../assets/projects/Ecolinc-ERP-Img.png';
import flightDetectionSplash from '../../assets/projects/Flight-detection-img.png';
import windDAQSplash from '../../assets/projects/Wind-Splash-img.png';
import studio1Splash from '../../assets/projects/Studio1-Splash-Img.png';
import studio3Splash from '../../assets/projects/Studio3-Splash-Img.png';
import studio4Splash from '../../assets/projects/Studio4-Splash-Img.png';
import portfolioSplash from '../../assets/projects/portfolio-splash.png';
interface ProjectStatus {
  type: 'Live' | 'Completed' | 'In Progress';
}

interface ProjectData {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string;
  galleryImages?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  paperUrl?: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live': return 'bg-green-500';
    case 'Completed': return 'bg-gray-500';
    case 'In Progress': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

function ProjectCard({ project, onClick }: { project: ProjectData, onClick: () => void }) {
  return (
      <div
          className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-1"
          onClick={onClick}
      >
        {/* Project Image */}
        <div className="h-58 bg-primary relative overflow-hidden flex-shrink-0">
          {project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          ) : (
              <div className="w-full h-full flex items-center justify-center text-primary-foreground text-2xl">
                {project.title.charAt(0)}
              </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-3 gap-2">
            <h3 className="text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full whitespace-nowrap">
              <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(project.status.type)}`}
              />
              {project.status.type}
            </div>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-secondary border border-border text-secondary-foreground rounded-full text-sm font-medium"
                >
              {tech}
            </span>
            ))}
          </div>

          {/* Links (Prevent opening dialog when clicking links directly) */}
          <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
            {project.paperUrl && (
                <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:opacity-70 transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  <span>Full Paper</span>
                </a>
            )}
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:opacity-70 transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
            )}
            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
            )}
          </div>
        </div>
      </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openProject = (project: ProjectData) => {
    setSelectedProject(project);
    setActiveImage(project.imageUrl || null);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(null);
  };

  const projects: ProjectData[] = [
    {
      title: 'GenAI/AR Design Tool for AREN Education (ARchAI)',
      description: 'A extended reality design tool harnessing 3D Generation AI models for Architectural Engineering students to use for collaborative conceptual design.',
      fullDescription: 'This extended reality tool is being developed as part of an NSF funded research project and my senior Major Qualifying Project at Worcester Polytechnic Institute. The project intends to assess the outcomes, collaboration, and attitudes of Architectural Engineering students when using a tool that combines AR and Generative AI. ' +
          'The design tool is built within Unity, and uses a custom 2D-to-3D AI pipeline to allow students in AR to turn their ideas into 3D models in less than a minute. Students can utilize this pipeline alongside other design features (3D massing, markup tools, etc) within the app to collaboratively work on their concepts.\n\n' +
          'Our app\'s restful 2D-to-3D AI pipeline is built off two main models. The first of which allows students to use a text prompt to generate 2D images using OpenAI\'s DALL-E 3 endpoint. The second model enables 3D generation using Meta\'s SAM 3D library, by taking in a masked (or segmented) image, and generating a highly accurate 3D model using Gaussian Splats. These two models are combined into one environment using docker and hosted on a custom FastAPI reachable via an online Cloudflare tunnel.' +
          '\n\nOur team has already deployed the tool into at least one classroom setting, and is currently working on improving the features of the app based on student experience and feedback for future iterations.',
      technologies: ['AI', 'AR/VR', 'Unity', 'Engineering', 'Docker'],
      status: { type: 'In Progress' },
      imageUrl: genAISplash,
      githubUrl: 'https://github.com/nmpowers/sam-3d-api',
    },
    {
      title: '3D Splat and Mesh Graphics Viewer',
      description: 'An interactive WebGL viewer for rendering 3D models generated by generative AI models as both a splat and mesh.',
      fullDescription: 'Developed as the final project for my Computer Graphics course at WPI, this interactive WebGL 3D graphics viewer is intended to enable rendering of both splat (.ply) and mesh (.glb) models. \n\n' +
          'Most 3D generative AI models use Gaussian Splats to create a 3D model from a 2D image. My other project (ARchAI) uses Meta\'s SAM 3D library, which is natively capable of outputting a corresponding splat and mesh object for every input. This demanded an easy way to view these models for testing purposes before final implementation into Unity scenes.\n\n ' +
          'There are existing web-viewers that allow for splats to be projected next to their corresponding mesh object, but to streamline viewing and cutout the tedious drag-and-drop needed to use third-party viewers, I built my own viewer program. This viewer is the core to my testing of custom 2D-to-3D pipelines, enabling an html interface for both generating 3D geometry and viewing it in one click.' +
          '  ',
      technologies: ['WebGL', 'HTML', 'Javascript', 'Graphics'],
      status: { type: 'Live' },
      imageUrl: graphicViewerSplash,
      liveUrl: 'https://nmpowers.github.io/3D-Splat-And-Mesh-Viewer/',
      githubUrl: 'https://github.com/nmpowers/3D-Splat-And-Mesh-Viewer',
    },
    {
      title: 'Flight Detection App',
      description: 'An android app for detecting the takeoff of an airplane, using physical acceleration and GPS sensors.',
      fullDescription: 'The Flight Detection App is an Android application made to automatically detect whether a user has just taken off in an airplane based on their smartphone\'s physical sensors. The app utilizes accelerometer data to determine whether the movement of the device is representative of the unique acceleration for an airplane takeoff, while simultaneously checking if the user is within ' +
          'proximity of an airport through GPS data. If both of these conditions are true, a takeoff is confirmed and indicated to the user via the dashboard screen and a post notification. \n\n' +
          'The app\'s purpose is to improve the overall travel experience for the user. So, after a flight or takeoff is detected, the app checks whether airplane mode has been turned on, and if not it prompts the user to turn it on. The app also turns the system brightness down automatically to reduce battery usage for the flight duration.\n\n' +
          'The application detects takeoff roll and liftoff in an airplane using the consistent acceleration patterns of an airplane, which were proven to be ~98% accurate within a paper \'flyDetect: An Android Application for Flight Detection\'. \n\nThese patterns are surprisingly simple yet powerful, as they just check for acceleration sustained within a specific range for some given amount of time. For example, acceleration of 9.95 to 10.42 m/s² for at least 17 seconds indicates takeoff roll. The backend also checks for a sustained amount of noise, and if high variance is maintained for long enough, the data is classified as physical activity or some other type of noise.',
      technologies: ['Android', 'Kotlin', 'UI', 'Sensors'],
      status: { type: 'Completed' },
      imageUrl: flightDetectionSplash,
      githubUrl: 'https://github.com/nmpowers/Flight-Detection-App',
    },
    {
      title: 'Educational Resource Portfolio (ERP) Site for Ecolinc Science Centre',
      description: 'A simple easy-to-use website for educators to browse educational resources compiled for the development of renewable energy lesson plans.',
      fullDescription: 'As part of my Interactive Qualifying Project (IQP) for WPI, I conducted research with three other students for the Ecolinc Science Centre in Bacchus Marsh, Australia. Ecolinc intended to teach more renewable energy focused lessons to students across K-12 to support the State of Victoria\'s net-zero emission goals and rising renewables market.' +
          '\n\nAfter assessing the renewables industry within Australia and globally, our team set out to develop connections to various stakeholders in the energy market (such as Orsted), and build a website holding a portfolio of educational resources for the Ecolinc staff to use in their creation of future lesson plans.' +
          '\n\nThe culmination of this effort resulted in what we coined an \'Educational Resource Portfolio (ERP)\', which holds resources our team found helpful to teaching about renewable energies, in addition to identifying other existing ERPs and documenting their usefulness and location online. We provided the final version of the website to Ecolinc\'s IT staff to be setup on their local network. \n\n A copy of our final iteration can be found in the Live Demo link above.',
      technologies: ['HTML', 'Javascript', 'Renewable Energy', 'Education'],
      status: { type: 'Live' },
      imageUrl: ecolincERPSplash,
      liveUrl: 'https://nmpowers.github.io/Ecolinc-ERP/',
      githubUrl: 'https://github.com/nmpowers/Ecolinc-ERP',
      paperUrl: 'https://digital.wpi.edu/concern/student_works/jh343x79q'
    },
    {
      title: 'Wind Tunnel DAQ & Component Design Overhaul',
      description: 'Complete motor and drivetrain replacement, data acquisition (DAQ) system audit, and testing equipment manufacturing for WPI\'s Learning Lab Wind Tunnel.',
      fullDescription: 'In collaboration with three other Mechanical Engineering students and the WPI Mechanical Engineering Learning Lab, we refurbished a bench-top wind tunnel for sustainable use in classroom demonstrations and experiments.\n\n' +
          'The existing wind tunnel components were found to consistently \'burnout\' or automatically shutoff after ~10 minutes of maximum RPM runtime (~30 m/s wind speed). This failure rendered the wind tunnel unsuitable for classroom demonstrations in courses such as fluid mechanics, which used the tunnel for teaching Bernoulli\'s Law and measuring wind speed.' +
          '\n\nOur team investigated the root of the problem and accordingly replaced the motor and its variable-frequency driver, in addition to validating the tunnel\'s data acquisition software using known pressure readings, and designing new testing tools for experiments with different types of airfoils/specimens.\n\n' +
          'The culmination of this refurbishment was documented in our research paper, and a comprehensive set of Standard Operating Procedure (SOP) Manuals and Quick Guides for using the wind tunnel sustainably and safely.',
      technologies: ['Design', '3D Printing', 'Data Acquisition', 'Mechanics'],
      status: { type: 'Completed' },
      imageUrl: windDAQSplash,
      paperUrl: 'https://drive.google.com/drive/folders/1hKHoNo_vzzanQTuLubaQPOKsP2j6EARH?usp=sharing'
    },
    {
      title: 'Portfolio Site',
      description: 'This portfolio site! A static site designed in Figma, developed in Typescript, and built with React, Vite, Shadcn components, and Tailwind CSS.',
      fullDescription: 'For better representation of some of my projects and personality, this portfolio site was designed to be simple and understandable, while still being comprehensive of my recent interests/work.\n\n' +
          'This site was built originally using Figma and Shadcn components for more efficient component placement and styling, with later tweaks for further customization. The site is static and intended to be hosted via Github pages, as I do not anticipate a need to update the site more than once weekly. More in-depth backend implementations using a Firebase or other database may come in future iterations.\n\n' +
          'The mono-page site is aimed at prospective recruiters or collaborators, but may also be helpful as a general hub for sharing my passions with others! The projects mentioned on this page will therefore highlight projects focused on my current goals, but ALL projects added on a rolling basis may be viewed using various filter methods in the Projects section.',
      technologies: ['Typescript', 'Figma', 'Tailwind CSS', 'React'],
      status: { type: 'Live' },
      imageUrl: portfolioSplash,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Ai Weiwei Studio Residence',
      description: 'A mock studio residence for artist Ai Weiwei in Worcester, MA, with the space necessary to accommodate the artist\'s sculpting materials, and inspiration from their existing work.',
      fullDescription: '',
      technologies: ['Design', 'Architectural Studio', 'Cubism', 'SketchUp', 'AutoCAD'],
      status: { type: 'Completed' },
      imageUrl: studio1Splash,
    },
    {
      title: '\"Achilles\" Emotion Museum: A Structural Study',
      description: 'A “structurally improbable” museum aiming to actively strengthen community engagement while conveying an implicit emotion to the visitor.',
      fullDescription: 'Mission Statement: "This “structurally improbable” museum aims to fill a gap in the Worcester attraction scene, providing interactive installations, shared reflection areas, and social gathering spaces that actively strengthen community engagement while conveying an implicit emotion to the visitor."\n\n' +
          'This architectural piece was completed for WPI\'s Architectural Design Studio III, which focuses on the structural components of complex structures. Additionally, the studio focuses on the way a building\'s massing can suggest emotion or feeling for the people within it. This combination made for a challenging limitation for my team of three.\n\n' +
          'Original sketches and theme for the project, and all subsequent graphics, floor plans, sections, and final poster by me.',
      technologies: ['Structural Analysis', 'Design', 'Architecture', 'Revit'],
      status: { type: 'Completed'},
      imageUrl: studio3Splash,
    },
    {
      title: 'Shenandoah Library Renovation: Community Continuum',
      description: 'A Shenandoah Branch Library renovation mixing net-zero emission strategies with an add-on for additional community space, while maintaining local cultural style.',
      fullDescription: 'Mission Statement: "The Shenandoah Branch Library is being renovated through an add-on rather than a demolition, a choice that preserves its historic presence while advancing sustainable, carbon, and energy strategies. As a community cornerstone since 1966 within Shenandoah Park, the library reflects the neighborhood’s 1920s architectural character, and our Community Continuum Revamp extends this role by ensuring the library evolves without losing its identity. The concept of community continuum emphasizes continuity across time, honoring the past while adapting to future needs, by blending period-inspired aesthetics with contemporary features. Key elements—such as a dome observatory ceiling with stack ventilation, a terrace that enhances airflow, and a second-floor terrace balancing collaborative and quiet spaces—strengthen the building’s ties the park and the community it serves, ensuring the library remains an active, intergenerational hub within Shenandoah."\n\n' +
          'This architectural piece was completed for WPI\'s Architectural Design Studio IV, which focuses on achieving net-zero emissions in a renovated library somewhere in the United States. Additionally, the renovation needs to be significant regarding the style and the utility of the library. This enabled our team of four to explore existing styles in the neighborhood, and work with existing sites and plans from previous projects in the areas.\n\n' +
          'Original sketches and theme for the project, all section views, floor plans, HVAC layout/diagrams, and final poster by me.',
      technologies: ['Net-Zero', 'Sustainability', 'Revit', 'HVAC'],
      status: { type: 'Completed'},
      imageUrl: studio4Splash,
    }
  ];

  return (
      <section id="projects" className="py-20 px-4 to-blue-100 from-background bg-gradient-to-b relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Projects</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Some of the things I've been up to lately. Click any project to learn more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>

        {/* Dialog Overlay */}
        {selectedProject && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setSelectedProject(null)}
            >
              {/* Dialog Content Container */}
              <div
                  className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Header */}
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4 flex justify-between items-center z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(selectedProject.status.type)}`} />
                      {selectedProject.status.type}
                    </div>
                  </div>
                  <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
                      aria-label="Close dialog"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 md:p-8">
                  {/* Main Hero Image */}
                  <div className="w-full h-64 md:h-[400px] rounded-xl overflow-hidden bg-muted mb-8 shadow-sm">
                    {selectedProject.imageUrl ? (
                        <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-contain" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foregroundtext-6xl">
                          {selectedProject.title.charAt(0)}
                        </div>
                    )}
                  </div>

                  {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Project Gallery</h3>
                        <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                          {selectedProject.galleryImages.map((img, idx) => (
                              <button
                                  key={idx}
                                  onClick={() => setActiveImage(img)}
                                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden snap-start border-2 transition-all ${activeImage === img ? 'border-primary shadow-md scale-105' : 'border-transparent hover:opacity-80'}`}
                              >
                                <img src={img} alt={`${selectedProject.title} gallery image ${idx + 1}`} className="w-full h-full object-cover" />
                              </button>
                          ))}
                        </div>
                      </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Descriptions */}
                    <div className="lg:col-span-2">
                      <div className="prose max-w-none">
                        <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                          About the Project
                        </h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Meta Info & Links */}
                    <div className="space-y-8">
                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                              <span
                                  key={index}
                                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold border border-primary/20"
                              >
                            {tech}
                          </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-3 pt-4 border-t border-border">
                        {selectedProject.paperUrl && (
                            <a
                                href={selectedProject.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors font-semibold shadow-sm"
                            >
                              <ExternalLink size={20} />
                              <span>Read the Full Paper</span>
                            </a>
                        )}
                        {selectedProject.liveUrl && (
                            <a
                                href={selectedProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl hover:bg-accent/90 transition-colors font-semibold shadow-sm"
                            >
                              <ExternalLink size={20} />
                              <span>View Live Demo</span>
                            </a>
                        )}
                        {selectedProject.githubUrl && (
                            <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl hover:bg-secondary/80 transition-colors font-semibold shadow-sm"
                            >
                              <Github size={20} />
                              <span>View Source Code</span>
                            </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </section>
  );
}