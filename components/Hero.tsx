'use client';
import { useEffect, useState } from 'react';

const roles = [
  'Full Stack Engineer',
  'React Developer',
  'TypeScript Enthusiast',
  'Node.js Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative">
        <p className="font-mono text-accent text-sm mb-4 opacity-0-init animate-fade-up">
          <span className="text-muted">{'// '}</span>hello, world
        </p>

        <h1 className="font-sans font-800 text-6xl md:text-8xl leading-none mb-4 opacity-0-init animate-fade-up animate-delay-100">
          Sami
          <br />
          <span className="text-accent">Ahvenniemi</span>
        </h1>

        <div className="flex items-center gap-2 mb-8 opacity-0-init animate-fade-up animate-delay-200">
          <span className="font-mono text-muted text-sm">$</span>
          <span className="font-mono text-text text-lg md:text-xl">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p className="font-sans text-muted text-lg max-w-xl leading-relaxed mb-10 opacity-0-init animate-fade-up animate-delay-300">
          Building fast, scalable web applications with modern JavaScript. Based in Finland. MSc
          from Aalto University.
        </p>

        <div className="flex gap-4 opacity-0-init animate-fade-up animate-delay-400">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-bg font-mono text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            view projects →
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border text-muted font-mono text-sm hover:border-accent hover:text-accent transition-colors"
          >
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
