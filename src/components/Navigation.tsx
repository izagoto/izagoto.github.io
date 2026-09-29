import React, { useState, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
      event.preventDefault();
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    },
    [],
  );

  const scrollToTop = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#/"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-violet-200"
        >
          &lt;Dev/&gt;
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.target}
              href={`#/${link.target}`}
              onClick={(e) => scrollTo(e, link.target)}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/CV-IMANUEL-ZAGOTO.pdf"
          download="CV-IMANUEL-ZAGOTO.pdf"
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10 md:inline-flex"
        >
          Resume <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.target}
                href={`#/${link.target}`}
                onClick={(e) => scrollTo(e, link.target)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

