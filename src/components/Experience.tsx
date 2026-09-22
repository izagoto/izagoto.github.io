import React from 'react';

const experiences = [
  {
    role: 'Cybersecurity Researcher',
    company: 'PT Solusi Intek Indonesia',
    location: 'Bekasi, Indonesia',
    period: 'Nov 2025 — Present',
    summary: 'Contribute to cybersecurity tooling and digital forensics R&D to support investigations and internal operations, focusing on research methodology, data integrity, and technical implementation.',
    bullets: [
      'Developed a digital forensics research platform for asynchronous Android and iOS acquisition, including contacts, SMS, WhatsApp, call logs, and media.',
      'Developed a digital forensics case management platform supporting Chain of Custody, contact and social media correlation, communication analysis, and APK analysis.',
      'Developed an operational forensics and intelligence platform for multi-source communication analysis, case and task management, integrity-verified evidence tracking, and entity correlation.',
      'Built a multi-GPU distributed password-cracking system using Go and hashcat, with a real-time dashboard and agent orchestration.',
      'Conducted controlled OSINT and Bluetooth/BLE security research involving account verification, metadata collection, passive monitoring, device scanning, signal analysis, and RSSI-based location estimation.',
      'Developed a mobile application static analysis platform for APK/IPA files, including permission checks, malware analysis, and automated PDF reporting.',
      'Developed a cybersecurity asset inventory system supporting asset tracking, photo-based evidence, approval workflows, and asset ownership management.',
    ],
    technologies: 'Python, Go, FastAPI, React, TypeScript, MobSF, PostgreSQL, Redis, ADB, UIAutomator2, hashcat, Docker, Linux',
  },
  {
    role: 'Software Engineer',
    company: 'PT Solusi Intek Indonesia',
    location: 'Bekasi, Indonesia',
    period: 'Oct 2022 — Oct 2025',
    summary: 'Developed and maintained backend systems, full-stack web applications, and automation solutions supporting monitoring systems, media intelligence, and business operations.',
    bullets: [
      'Developed a Go-based backend for a wireless monitoring command center supporting target tracking, device telemetry, and remote machine control.',
      'Built a media intelligence pipeline for online media crawling, NLP-based analysis, and structured data storage for trend monitoring.',
      'Developed multi-device WhatsApp and Telegram automation using ADB, UIAutomator2, Telethon, Accessibility Service, and OTP reader integrations.',
      'Developed internal operations applications using Laravel for work document management, including funding requests and work orders.',
      'Developed an e-procurement system supporting purchase requisitions, multi-level approval workflows, vendor management, purchase orders, delivery tracking, budget control, audit trails, and PDF/Excel reporting.',
    ],
    technologies: 'Go, Python, PHP, Laravel, React, TypeScript, PostgreSQL, MySQL, Redis, REST APIs, WebSocket, ADB, Docker, Linux, Git',
  },
];

const Experience = () => (
  <section id="experience" className="border-b border-white/10 py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-14 max-w-3xl">
        <p className="section-kicker">02 / Experience</p>
        <h2 className="section-title">Professional experience</h2>
        <p className="mt-5 text-base leading-7 text-slate-400">A combination of software engineering and security-focused R&amp;D across backend systems, automation, monitoring, and digital forensics.</p>
      </div>

      <div className="space-y-12">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.period}`} className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[220px_1fr]">
            <div>
              <p className="text-sm font-medium text-white">{experience.period}</p>
              <p className="mt-2 text-sm text-slate-500">{experience.location}</p>
            </div>
            <div>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{experience.company}</p>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">{experience.summary}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {experience.bullets.map((bullet) => <li key={bullet} className="relative pl-5 before:absolute before:left-0 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-500">{bullet}</li>)}
              </ul>
              <p className="mt-6 border-t border-white/5 pt-4 text-xs leading-6 text-slate-500"><span className="text-slate-300">Technologies:</span> {experience.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
