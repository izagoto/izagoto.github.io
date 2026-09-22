import React from 'react';

const groups = [
  ['Languages', ['Python', 'Go', 'PHP', 'JavaScript', 'SQL']],
  ['Backend', ['FastAPI', 'Laravel', 'Express.js', 'REST APIs', 'WebSockets', 'API Integration']],
  ['Frontend', ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS']],
  ['Databases', ['PostgreSQL', 'MySQL', 'SQLite', 'Redis']],
  ['Security & Forensics', ['Digital Forensics', 'Static Analysis', 'Mobile Security', 'Wireless Security', 'OSINT', 'Malware Analysis']],
  ['Data & Automation', ['ETL', 'Data Processing', 'Data Modeling', 'Data Transformation', 'Workflow Automation', 'Web Scraping', 'Web Crawling']],
  ['Infrastructure', ['Docker', 'Linux', 'Ubuntu', 'Nginx', 'Git', 'Postman', 'ADB']],
  ['Tools', ['UIAutomator2', 'MobSF', 'hashcat', 'Electron']],
];

const Skills = () => (
  <section id="skills" className="border-b border-white/10 py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-14 max-w-3xl">
        <p className="section-kicker">04 / Skills</p>
        <h2 className="section-title">Technical toolkit</h2>
        <p className="mt-5 text-base leading-7 text-slate-400">A curated view of the technologies I use across software engineering, data processing, infrastructure, and security research.</p>
      </div>

      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-white">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {(items as string[]).map((item) => <span key={item} className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-400">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
