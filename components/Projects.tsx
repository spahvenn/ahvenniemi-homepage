type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Veterinarian web app company',
    description:
      'Veterinarian web app development. Frontend development with React and TypeScript, backend with Node.js, AWS Lambda and MySQL. Backend unit tests with Mocha and Chai.',
    tags: ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'Sequelize ORM', 'MySQL', 'Mocha'],
  },
  {
    title: 'Finnish logistics company',
    description:
      'Work on parcel tracking module UI utilizing frontend microservice architecture inside a larger application.',
    tags: ['React', 'TypeScript', 'MobX', 'Jest', 'Storybook', 'GraphQL', 'Webpack'],
  },
  {
    title: 'Finnish teleoperator',
    description:
      'Marketing content creation tool development with React and AngularJS. Small scale Node.js API development and testing.',
    tags: ['React', 'AngularJS', 'Node.js', 'Express.js', 'Contentful', 'Email on Acid'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">02 / projects</p>
      <h2 className="font-sans font-700 text-4xl md:text-5xl mb-16 leading-tight">
        Selected <span className="text-accent">work</span>
      </h2>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="group border border-border bg-surface p-8 hover:border-accent/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="font-mono text-xs text-muted mb-2 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sans font-600 text-2xl text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-6 max-w-2xl">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-accent/70 bg-accent-dim px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
