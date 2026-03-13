'use client';

const emailParts = ['spahvenn', 'gmail', 'com'];

export default function EmailLink() {
  const email = `${emailParts[0]}@${emailParts[1]}.${emailParts[2]}`;
  return (
    <a
      href={`mailto:${email}`}
      className="group p-5 border border-border hover:border-accent transition-all duration-200"
    >
      <p className="font-mono text-xs text-muted mb-2 group-hover:text-accent/60 transition-colors">
        Email
      </p>
      <p className="font-mono text-sm text-text group-hover:text-accent transition-colors">
        {email} ↗
      </p>
    </a>
  );
}
