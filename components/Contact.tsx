import EmailLink from './EmailLink';

const socials = [
  { label: 'GitHub', handle: '@spahvenn', href: 'https://github.com/spahvenn/ahvenniemi-homepage' },
  { label: 'LinkedIn', handle: 'ahvenniemisami', href: 'https://linkedin.com/in/ahvenniemisami/' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="border border-border bg-surface p-12 md:p-16 relative overflow-hidden">
        {/* decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent/20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent/20" />

        <p className="font-mono text-accent text-xs mb-4 tracking-widest uppercase">03 / contact</p>
        <h2 className="font-sans font-700 text-4xl md:text-5xl mb-6 leading-tight">
          Let&apos;s build something
          <br />
          <span className="text-accent">together</span>
        </h2>
        <p className="text-muted max-w-lg leading-relaxed mb-12">
          Interested? Drop me a message to have a chat.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 border border-border hover:border-accent transition-all duration-200"
            >
              <p className="font-mono text-xs text-muted mb-2 group-hover:text-accent/60 transition-colors">
                {s.label}
              </p>
              <p className="font-mono text-sm text-text group-hover:text-accent transition-colors">
                {s.handle} ↗
              </p>
            </a>
          ))}
          <EmailLink />
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} · built with Next.js + Vercel
        </span>
        <span className="font-mono text-xs text-muted">Finland 🇫🇮</span>
      </div>
    </section>
  );
}
