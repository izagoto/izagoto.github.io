import React from "react";
import { Code2, Database, ShieldCheck } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Software Engineering",
    text: "Backend services, full-stack web applications, APIs, automation workflows, and internal systems.",
  },
  {
    icon: Database,
    title: "Data & Automation",
    text: "Data processing, ETL, web crawling, structured storage, monitoring pipelines, and workflow automation.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Forensics",
    text: "Cybersecurity research and digital forensics involving artifact extraction, analysis, correlation, and evidence handling.",
  },
];

const About = () => (
  <section
    id="about"
    className="border-b border-white/10 bg-[#020b17] py-24 sm:py-28"
  >
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-6 text-[0.7rem] font-medium tracking-[0.35em] text-slate-400 uppercase">
            01 / About
          </p>
          <h2 className="max-w-[540px] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-100 sm:text-5xl lg:text-[4.1rem]">
            Engineering practical systems for real problems.
          </h2>
        </div>

        <div className="pt-2">
          <p className="text-[1.04rem] leading-[1.8] text-slate-300 sm:text-[1.2rem]">
            Software Engineer with 4+ years of experience in backend and
            full-stack development, specializing in Python, Go, PHP, JavaScript,
            REST APIs, and database-driven applications.
          </p>
          <p className="mt-6 text-[1.02rem] leading-[1.8] text-slate-400">
            My work spans backend systems, internal applications, automation
            solutions, monitoring systems, and data processing pipelines. I also
            conduct cybersecurity research and digital forensics, with hands-on
            experience in data parsing, artifact extraction, metadata analysis,
            evidence extraction, log analysis, data correlation, and automation.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {focusAreas.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition hover:-translate-y-1 hover:border-white/20 sm:p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-transparent text-slate-200">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-[1.1rem] font-semibold text-white">
              {title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-7 text-slate-400">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
