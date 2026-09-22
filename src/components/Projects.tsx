import React from "react";
import { LockKeyhole } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Digital Forensics Research Platform",
    type: "Professional Project",
    description:
      "A research platform for asynchronous Android and iOS acquisition covering contacts, SMS, WhatsApp, call logs, and media.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "ADB", "UIAutomator2"],
  },
  {
    number: "02",
    title: "Digital Forensics Case Management Platform",
    type: "Professional Project",
    description:
      "Case management workflow supporting Chain of Custody, contact and social media correlation, communication analysis, and APK analysis.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
  },
  {
    number: "03",
    title: "Distributed Password Cracking System",
    type: "Professional Project",
    description:
      "A multi-GPU distributed system for password-cracking workloads with agent orchestration and a real-time operational dashboard.",
    stack: ["Go", "hashcat", "React", "WebSocket", "Docker", "Linux"],
  },
  {
    number: "04",
    title: "Wireless Monitoring Command Center",
    type: "Professional Project",
    description:
      "A Go-based backend and monitoring system supporting target tracking, device telemetry, and remote machine control.",
    stack: ["Go", "WebSocket", "PostgreSQL", "Linux", "Docker"],
  },
  {
    number: "05",
    title: "E-Procurement System",
    type: "Professional Project",
    description:
      "Procurement workflow covering purchase requisitions, multi-level approvals, vendors, purchase orders, delivery tracking, budgets, audit trails, and reporting.",
    stack: ["PHP", "Laravel", "React", "MySQL", "Redis"],
  },
  {
    number: "06",
    title: "Media Intelligence Pipeline",
    type: "Professional Project",
    description:
      "A data pipeline for online media crawling, NLP-based analysis, and structured storage for monitoring and trend analysis.",
    stack: ["Python", "Web Crawling", "NLP", "PostgreSQL", "ETL"],
  },
];

const Projects = () => (
  <section
    id="projects"
    className="border-b border-white/10 bg-slate-950/40 py-24"
  >
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="section-kicker">03 / Projects</p>
          <h2 className="section-title">Selected engineering work</h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            A selection of systems that demonstrate backend engineering,
            full-stack development, automation, data processing, and
            security-focused implementation.
          </p>
        </div>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group bg-black p-7 transition hover:bg-slate-950 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-600">
                {project.number}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-600">
                <LockKeyhole className="h-3 w-3" /> {project.type}
              </span>
            </div>
            <h3 className="mt-12 text-xl font-semibold text-white transition group-hover:text-slate-200">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {project.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-600">
              <span>Professional project</span>
              <span>·</span>
              <span>Selected details shown due to confidentiality</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
