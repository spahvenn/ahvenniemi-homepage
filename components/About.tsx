const yearsOfExperience = Math.floor(
  (new Date('2013-06-01').getTime() - Date.now()) / -(1000 * 60 * 60 * 24 * 365.25)
);

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'GraphQL',
  'Docker',
  'Git',
  'Testing',
  'CI/CD',
  'Agile',
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">01 / about</p>
          <h2 className="font-sans font-700 text-4xl md:text-5xl mb-6 leading-tight">
            Crafting digital
            <br />
            <span className="text-accent">experiences</span>
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Full stack software engineer with a passion for clean code, great UX, and solving
              complex problems with elegant solutions.
            </p>
            <p>
              MSc in Computer Science & Engineering from Aalto University (2015). Started as a full
              stack PHP developer, now focused on modern JavaScript — React, TypeScript, and
              Node.js.
            </p>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-muted mb-6 tracking-widest uppercase">
            {'// tech stack examples'}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 border border-border text-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 p-6 border border-border bg-surface">
            <p className="font-mono text-xs text-muted mb-1">experience</p>
            <p className="font-sans text-2xl font-600 text-text">{yearsOfExperience}+ years</p>
            <div className="w-full h-px bg-border my-4" />
            <p className="font-mono text-xs text-muted mb-1">education</p>
            <p className="font-sans text-sm text-text">MSc · Aalto University</p>
            <p className="font-mono text-xs text-muted mt-1">
              Computer Science &amp; Engineering · 2015
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
