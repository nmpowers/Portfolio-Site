import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {Bio} from './components/Bio';

import imgLeader from '../assets/Leader.png';
import imgResearcher from '../assets/Researcher.png';
import imgEngineer from '../assets/Engineer.png';
import imgRunner from '../assets/Runner.png';
import imgHiker from '../assets/Hiker.png';
import imgInnovator from '../assets/Innovator.png';
import imgSpirited from '../assets/Spirited.png';
import imgOrg from '../assets/Organizer.png';

export default function App() {
  const heroSlides = [
    { image: imgLeader, label: "...a Leader" },
    { image: imgResearcher, label: "...a Researcher" },
    { image: imgEngineer, label: "... an Engineer" },
    { image: imgRunner, label: "...a Runner" },
    { image: imgHiker, label: "...a Hiker" },
    { image: imgInnovator, label: "...an Innovator" },
    { image: imgOrg, label: "...an Organizer" },
    { image: imgSpirited, label: "...Spirited" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero slides={heroSlides} />
      <Bio />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
