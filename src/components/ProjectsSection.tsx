import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'python' | 'ai'>('all');

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categoryFilter === filter);

  return (
    <section
      id="projects"
      className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
            • 04 / SELECTED WORKS &amp; INITIATIVES •
          </div>
          <h2 className="font-display text-[38px] sm:text-[52px] lg:text-[68px] font-bold text-white uppercase leading-none tracking-tight">
            PROJECTS.
          </h2>
        </div>

        {/* Clean Segmented Filter */}
        <div
          className="inline-flex items-center bg-[#0A0B0D] border border-white/[0.12] p-1 self-start sm:self-auto"
          role="group"
          aria-label="Filter projects"
        >
          {(
            [
              { id: 'all', label: 'ALL [02]' },
              { id: 'python', label: 'PYTHON' },
              { id: 'ai', label: 'AI AGENTS' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`font-mono text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#16191F] text-[#8ed5ff] border border-[#8ed5ff]/40'
                  : 'text-[#9CA3AF] hover:text-white border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-[#121418] border border-white/[0.12] flex flex-col justify-between hover:border-white/[0.28] transition-all group"
          >
            {/* Procedural Blueprint Banner */}
            <div className="relative h-52 bg-[#090A0D] border-b border-white/[0.12] overflow-hidden flex items-center justify-center p-4">
              {project.blueprintType === 'flowchart' ? (
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity"
                  fill="none"
                  viewBox="0 0 500 200"
                  aria-hidden="true"
                >
                  <path
                    d="M 50 100 H 150 V 60 H 260 V 100 H 380 V 140 H 450"
                    stroke="#38BDF8"
                    strokeDasharray="4 4"
                    strokeWidth="1.5"
                  />
                  <rect fill="#16191F" height="30" stroke="#38BDF8" width="40" x="140" y="45" />
                  <circle cx="260" cy="100" fill="#16191F" r="14" stroke="#38BDF8" />
                  <polygon fill="#38BDF8" points="380,85 410,100 380,115" />
                  <circle cx="50" cy="100" fill="#38BDF8" r="4" />
                  <circle cx="450" cy="140" fill="#38BDF8" r="4" />
                </svg>
              ) : (
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity"
                  fill="none"
                  viewBox="0 0 500 200"
                  aria-hidden="true"
                >
                  <circle
                    cx="150"
                    cy="100"
                    r="35"
                    stroke="#38BDF8"
                    strokeDasharray="2 4"
                    strokeWidth="1"
                  />
                  <circle
                    cx="350"
                    cy="100"
                    r="35"
                    stroke="#38BDF8"
                    strokeDasharray="2 4"
                    strokeWidth="1"
                  />
                  <path d="M 185 100 H 315" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="250" cy="100" fill="#38BDF8" r="6" />
                  <path
                    d="M 250 60 V 140"
                    stroke="#38BDF8"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                  <circle cx="150" cy="100" fill="#16191F" r="16" stroke="#E5E7EB" />
                  <circle cx="350" cy="100" fill="#16191F" r="16" stroke="#E5E7EB" />
                </svg>
              )}

              <div className="absolute top-3 left-3 font-mono text-[10px] px-2 py-0.5 bg-[#16191F] border border-white/[0.12] text-[#8ed5ff]">
                {project.categoryTag}
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="font-mono text-[11px] text-white/80 hover:text-[#8ed5ff] bg-[#16191F]/90 border border-white/[0.2] hover:border-[#8ed5ff]/60 px-3 py-1.5 backdrop-blur-sm z-10 transition-colors cursor-pointer"
              >
                {project.blueprintLabel}
              </button>
            </div>

            {/* Body */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] text-[#9CA3AF] mb-1">
                  {project.metaLine}
                </div>
                <h3 className="font-display text-[22px] font-bold text-white mb-2 group-hover:text-[#8ed5ff] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-[15px] leading-[24px] text-[#c4c7ca] mb-6">
                  {project.summary}
                </p>
                <ul className="space-y-2 mb-8 font-sans text-[13px] leading-[20px] text-[#9CA3AF]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="text-[#8ed5ff] mt-0.5">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 bg-[#16191F] text-[#9CA3AF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="font-mono text-[11px] text-white hover:text-[#8ed5ff] transition-colors flex items-center gap-1 font-semibold cursor-pointer whitespace-nowrap"
                >
                  VIEW DETAILS ↗
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
