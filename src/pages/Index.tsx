import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const BackgroundEffects = () => {
  useEffect(() => {
    const cursorStar = document.createElement("div");
    cursorStar.className = "cursor-star";
    document.body.appendChild(cursorStar);

    const addTrail = (x: number, y: number) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);

      window.setTimeout(() => {
        trail.remove();
      }, 600);
    };

    const handlePointerMove = (event: PointerEvent) => {
      cursorStar.style.left = `${event.clientX}px`;
      cursorStar.style.top = `${event.clientY}px`;
      cursorStar.style.opacity = "1";

      addTrail(event.clientX, event.clientY);
    };

    const handlePointerDown = () => {
      cursorStar.classList.add("hover");
    };

    const handlePointerUp = () => {
      cursorStar.classList.remove("hover");
    };

    const handlePointerLeave = () => {
      cursorStar.style.opacity = "0";
    };

    const blockCopy = (event: Event) => {
      event.preventDefault();
    };

    const blockKeyboardCopy = (event: KeyboardEvent) => {
      const isCopyShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c";
      const isCutShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "x";

      if (isCopyShortcut || isCutShortcut) {
        event.preventDefault();
      }
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("contextmenu", blockCopy);
    document.addEventListener("selectstart", blockCopy);
    document.addEventListener("dragstart", blockCopy);
    document.addEventListener("keydown", blockKeyboardCopy);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("contextmenu", blockCopy);
      document.removeEventListener("selectstart", blockCopy);
      document.removeEventListener("dragstart", blockCopy);
      document.removeEventListener("keydown", blockKeyboardCopy);
      cursorStar.remove();
    };
  }, []);

  const particles = Array.from({ length: 24 }, (_, index) => ({
    id: index,
    rotateZ: `${(index + 1) * 18}deg`,
    rotateY: `${(index + 1) * 21}deg`,
    size: index % 3 === 0 ? "small" : index % 2 === 0 ? "medium" : "large",
  }));

  return (
    <>
      <div className="space-background" aria-hidden="true" />
      <div className="page-glow" aria-hidden="true" />
      <div className="particle-orb-container" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle-3d"
            style={{
              ["--rotate-z" as string]: particle.rotateZ,
              ["--rotate-y" as string]: particle.rotateY,
              width:
                particle.size === "small"
                  ? "2px"
                  : particle.size === "medium"
                    ? "3px"
                    : "4px",
              height:
                particle.size === "small"
                  ? "2px"
                  : particle.size === "medium"
                    ? "3px"
                    : "4px",
            }}
          />
        ))}
      </div>
    </>
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-slate-100">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} Imanuel Zagoto</span>
            <span>Software Engineer · Backend &amp; Full-Stack Developer</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
