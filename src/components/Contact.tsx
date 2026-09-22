import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="bg-[#020b17] py-20 sm:py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-[7rem]">
        Get in Touch
      </h2>

      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400 sm:text-xl">
        I&apos;m interested in software engineering opportunities, especially
        backend and full-stack development, automation, and security-focused
        engineering work. My portfolio focuses on backend systems and full-stack
        development for practical, real-world solutions.
      </p>

      <div className="mt-12 space-y-5 sm:mt-16">
        <a
          href="mailto:imanzgt735@gmail.com"
          className="group flex items-center gap-5 text-3xl font-light tracking-[-0.04em] text-slate-200 transition hover:text-white sm:text-4xl"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 shadow-inner shadow-white/5">
            <Mail className="h-7 w-7" />
          </span>
          <span>imanzgt735@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/imanuel-zagoto"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-5 text-3xl font-light tracking-[-0.04em] text-slate-200 transition hover:text-white sm:text-4xl"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 shadow-inner shadow-white/5">
            <Linkedin className="h-7 w-7" />
          </span>
          <span>linkedin.com/in/imanuel-zagoto</span>
        </a>

        <a
          href="https://github.com/izagoto/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-5 text-3xl font-light tracking-[-0.04em] text-slate-200 transition hover:text-white sm:text-4xl"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 shadow-inner shadow-white/5">
            <Github className="h-7 w-7" />
          </span>
          <span>github.com/izagoto</span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
