import { Briefcase, GraduationCap, Calendar, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { useState } from 'react';
import resume from '../../assets/nathaniel-powers-software-engineering-resume.pdf';

interface SubItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  isLast?: boolean;
  icon: React.ElementType;
  subItems?: SubItemProps[];
}

function ExpandableDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = description.split(' ');
  const isLongDescription = words.length > 10;

  const displayDescription = isExpanded || !isLongDescription
      ? description
      : words.slice(0, 10).join(' ') + '...';

  return (
      <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {displayDescription}
        {isLongDescription && (
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-primary hover:text-primary/80 font-medium inline-flex items-center focus:outline-none"
            >
              {isExpanded ? (
                  <>
                    See less <ChevronUp size={16} className="ml-1" />
                  </>
              ) : (
                  <>
                    See more <ChevronDown size={16} className="ml-1" />
                  </>
              )}
            </button>
        )}
      </div>
  );
}

function TimelineItem({ title, organization, period, description, isLast, icon: Icon, subItems }: TimelineItemProps) {
  return (
      <div className="flex gap-4 md:gap-6 pb-12 relative">
        {/* Timeline connector */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10">
            <Icon className="text-primary-foreground" size={20} />
          </div>
          {!isLast && <div className="w-0.5 h-full bg-border absolute top-10 md:top-12 bottom-0 left-5 md:left-6 -ml-[1px]" />}
        </div>

        {/* Content */}
        <div className="flex-1 pb-2">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-base md:text-lg text-muted-foreground mb-2 font-medium">{organization}</p>
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Calendar size={14} />
            <span className="text-sm font-medium">{period}</span>
          </div>

          <ExpandableDescription description={description} />

          {/* Sub-timeline for sub-items */}
          {subItems && subItems.length > 0 && (
              <div className="mt-6 ml-2 md:ml-4 border-l-2 pl-6 space-y-8">
                {subItems.map((sub, index) => (
                    <div key={index} className="relative">
                      {/* Nested connector dot */}
                      <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-primary rounded-full border-2 border-background" />

                      <h4 className="text-lg font-semibold text-foreground mb-1">{sub.title}</h4>
                      <p className="text-base md:text-sm text-muted-foreground mb-2 font-medium">{sub.organization}</p>
                      <div className="flex items-center gap-2 text-muted-foreground/70 mb-2">
                        <Calendar size={14} />
                        <span className="text-sm font-medium">{sub.period}</span>
                      </div>
                      <ExpandableDescription description={sub.description} />
                    </div>
                ))}
              </div>
          )}
        </div>
      </div>
  );
}

export function Timeline() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      organization: 'General Dynamics Electric Boat',
      period: 'Jun 2025 - Aug 2025',
      description: 'I began the development of an automated internal tool for templating registry dependencies and optimizing developer build-time,' +
          ' supported the smooth migration of a multi-server codebase to a newer Linux version, and ' +
          ' and learned how to develop trusted ' +
          'testing units that span across multiple languages and git modules.',
    },
    {
      title: 'WindWinRI Advisory Board Member',
      organization: 'North Kingstown (RI) Chamber of Commerce Inc.',
      period: 'May 2023 - Present',
      description: 'I advise Rhode Island representatives on ' +
          'the development of education programs regarding renewable energy. Additionally, I work to inspire and advocate for students and local public representatives to get involved in renewables & sustainability. ' +
          'Relevant insights include: the WindWinRI Renewable Energy certification pathway, the WPI Green Team, and Renewable Energy research in Australia.',
    },
  ];

  const academics = [
    {
      title: 'B.S. Computer Science & Mechanical Engineering',
      organization: 'Worcester Polytechnic Institute',
      period: 'Aug 2022 - May 2026',
      description: 'Projected to graduate with high distinction and minor in Architectural Engineering.' +
          ' Relevant Coursework: Software Engineering, Operating Systems, Computer Graphics, Mobile Design, Machine Learning, Algorithms, Engineering Experimentation, Advanced Design, Object-Oriented Design, Systems Programming ',
      subItems: [
        {
          title: 'President',
          organization: 'WPI Student Government Association',
          period: 'Jan 2025 - Dec 2025',
          description: 'I led an executive branch, cabinet, and 60+ student senators representing 5000+ undergraduates to enhance and organize student life at WPI.' +
              ' During my term, I directed the review and re-writing of ALL internal governing documents and procedures for the organization, to improve the consistency of +$2 Million in funding decisions to other student groups and services.',
        },
        {
          title: 'Internal Governance Chair',
          organization: 'Phi Kappa Theta Fraternity, MA Lambda',
          period: 'Jan 2025 - Dec 2025',
          description: 'As acting Parliamentarian and Secretary for all business meetings, I developed an automated Azure workflow to streamline the creation of meeting agendas and reports, in addition to being the ' +
              'final interpreter of all bylaws, procedures, and actions taken by the organization.',
        },
        {
          title: 'Programs (Events) Chair',
          organization: 'WPI Student Alumni Society',
          period: 'Jan 2024 - Dec 2024',
          description: 'I hosted multiple engaging traditions on WPI\'s campus every term, some of which I revived from more than +4 years of hiatus. These events ' +
              'were held to bolster a sense of community and culture amongst the WPI student population, some of which being integral to the identity of WPI and its student body',
        },
        {
          title: 'Public Relations Chair',
          organization: 'WPI Green Team',
          period: 'Mar 2023 - Dec 2024',
          description: 'I developed fun and informative graphics, advocating to students the values of sustainability, action, and justice. These graphics advertised ' +
              'the Green Team\'s events, services, and initiatives. I also had the opportunity to develop the theme for that year\'s Climate Action Fair, for which I generated' +
              ' engaging posters and logos for use on social media',
        },
      ]
    },
  ];

  return (
      <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-muted to-background relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 hidden md:block">
            <a
                href={ resume }
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium shadow-sm hover:shadow-md"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="md:hidden flex justify-center mb-8">
            <a
                href={ resume }
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium shadow-sm"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Timeline</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Some details about where I am and things I've done!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience / Service Column */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-foreground flex items-center gap-3">
                <Briefcase className="text-primary" />
                Experience / Service
              </h3>
              <div className="mt-8">
                {experiences.map((exp, index) => (
                    <TimelineItem
                        key={index}
                        {...exp}
                        icon={Briefcase}
                        isLast={index === experiences.length - 1}
                    />
                ))}
              </div>
            </div>

            {/* Academic Column */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-foreground flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Academic
              </h3>
              <div className="mt-8">
                {academics.map((academic, index) => (
                    <TimelineItem
                        key={index}
                        {...academic}
                        icon={GraduationCap}
                        isLast={index === academics.length - 1}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
