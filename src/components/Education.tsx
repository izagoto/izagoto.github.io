import React from 'react';

const skills = ['PHP', 'CodeIgniter', 'MySQL', 'Database Management', 'POS Systems', 'Data Mining', 'Machine Learning', 'K-Nearest Neighbors (KNN)', 'Regression Analysis', 'Predictive Modeling', 'Data Analysis', 'Technology Acceptance Model (TAM)', 'Google Colab', 'Jupyter Notebook', 'JupyterLab', 'Anaconda'];

const Education = () => (
  <section id="education" className="border-b border-white/10 bg-slate-950/40 py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">05 / Education</p>
          <h2 className="section-title">Computer Engineering background</h2>
        </div>
        <div>
          <div className="border-l border-white/10 pl-6">
            <p className="text-sm text-slate-500">Aug 2018 — Sep 2022</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Bachelor’s Degree in Computer Engineering</h3>
            <p className="mt-1 text-sm text-slate-400">STMIK WIDURI · Jakarta, Indonesia</p>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-white">Academic focus &amp; tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">{skill}</span>)}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-600">Practical work</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">Point-of-Sale application development and database work using MySQL and phpMyAdmin.</p>
            </div>
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-600">Research</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">K-Nearest Neighbor Regression for clothing-product sales prediction, alongside a Technology Acceptance Model (TAM) study.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
