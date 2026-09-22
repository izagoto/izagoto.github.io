import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 bg-[#020b17]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(148,163,184,0.12),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(71,85,105,0.12),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-20 pt-28 lg:px-8">
        <div className="max-w-5xl pt-14">
          <p className="hero-fade-up mb-6 font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500 sm:text-xs">
            Software Engineer · Bekasi, Indonesia
          </p>

          <h1 className="hero-fade-up hero-fade-up-delay flex items-end gap-3 text-[4.2rem] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[5.8rem] lg:text-[8.5rem]">
            <span className="block">Imanuel Zagoto</span>
            <span className="mb-5 inline-block h-4 w-4 rounded-full border border-white/40 bg-white/90 shadow-[0_0_18px_rgba(255,255,255,0.8)] sm:h-5 sm:w-5" />
          </h1>

          <div className="hero-fade-up-delay mt-4 text-2xl font-medium tracking-[-0.04em] text-slate-300 sm:text-3xl lg:text-4xl">
            Backend &amp; Full-Stack Developer
          </div>

          <p className="hero-fade-up-delay-2 mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:text-xl">
            I build backend systems, full-stack applications, automation
            solutions, and security-focused tools using Python, Go, PHP, and
            modern web technologies.
          </p>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 right-6 hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-slate-600 transition hover:text-slate-300 lg:flex"
        >
          Scroll to explore <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
