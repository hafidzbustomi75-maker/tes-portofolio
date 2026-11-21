import React, { useState } from 'react';
import { HARD_SKILLS, SOFT_SKILLS, TOOLKIT_ITEMS } from '../data/portfolioData';

const ToolIcon: React.FC<{ id: string; hoverClass: string }> = ({ id, hoverClass }) => {
  const baseClass = `w-9 h-9 text-[#E5E7EB] ${hoverClass} transition-colors`;
  switch (id) {
    case 'python':
      return (
        <svg className={baseClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2c-3.1 0-5 1.5-5 3.5v2.5h5v1H5.5C3.5 9 2 10.9 2 14s1.5 5 3.5 5h2v-2.5c0-1.7 1.3-3 3-3h5v-1h-6.5c-1.4 0-2.5-1.1-2.5-2.5V7c0-1.4 1.1-2.5 2.5-2.5h6c1.4 0 2.5 1.1 2.5 2.5v1.5h2V5.5C17 3.5 15.1 2 12 2zm-1.5 2a.75.75 0 110 1.5.75.75 0 010-1.5zM12 22c3.1 0 5-1.5 5-3.5v-2.5h-5v-1h6.5c2 0 3.5-1.9 3.5-5s-1.5-5-3.5-5h-2v2.5c0 1.7-1.3 3-3 3h-5v1h6.5c1.4 0 2.5 1.1 2.5 2.5V17c0 1.4-1.1 2.5-2.5 2.5h-6c-1.4 0-2.5-1.1-2.5-2.5v-1.5h-2v3C7 20.5 8.9 22 12 22zm1.5-2a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>
      );
    case 'excel':
      return (
        <svg className={baseClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.5 14l-2.5-3.8L8.5 17H6.8l3.6-5.1L7 7h1.8l2.3 3.6L13.3 7H15l-3.5 4.8L15.2 17h-1.7z" />
        </svg>
      );
    case 'word':
      return (
        <svg className={baseClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3.5 14h-1.8l-1.7-6.2L10.3 17H8.5L6.2 7h1.9l1.4 6.7L11.2 7h1.6l1.7 6.7L15.9 7h1.9L15.5 17z" />
        </svg>
      );
    case 'powerpoint':
      return (
        <svg className={baseClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 8.5c0 1.4-1.1 2.5-2.5 2.5H9.5V17H8V7h3.5c1.4 0 2.5 1.1 2.5 2.5v2zm-4-1h2.5c.6 0 1-.4 1-1s-.4-1-1-1H10v2z" />
        </svg>
      );
    default:
      return (
        <svg className={baseClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.01-4.5-4.5S10.51 7.5 13 7.5c1.66 0 3.14.89 3.95 2.22l-1.64.95C14.86 9.84 13.98 9.5 13 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.98 0 1.86-.34 2.31-1.17l1.64.95C16.14 15.61 14.66 16.5 13 16.5z" />
        </svg>
      );
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const selectedTool = TOOLKIT_ITEMS.find((t) => t.id === selectedToolId) ?? null;

  return (
    <section
      id="skills"
      className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
    >
      <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
        • 02 / TECHNICAL CAPABILITIES •
      </div>
      <h2 className="font-display text-[38px] sm:text-[52px] lg:text-[68px] font-bold text-white uppercase leading-none tracking-tight mb-12">
        TOOLS &amp; STACK.
      </h2>

      {/* Row 1: Primary Toolkit Grid (5 cards across) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {TOOLKIT_ITEMS.map((tool) => {
          const isSelected = selectedToolId === tool.id;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={() =>
                setSelectedToolId((prev) => (prev === tool.id ? null : tool.id))
              }
              className={`text-left bg-[#16191F] border p-6 flex flex-col justify-between transition-all group cursor-pointer ${
                isSelected
                  ? 'border-[#8ed5ff] shadow-[0_0_16px_rgba(56,189,248,0.18)]'
                  : 'border-white/[0.12] hover:border-[#8ed5ff]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-8 w-full">
                <span className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tabular-nums">
                  {tool.index}
                </span>
                <span className={`w-2 h-2 rounded-full ${tool.dotColorClass}`} />
              </div>

              <div className="my-6">
                <ToolIcon id={tool.id} hoverClass={tool.hoverColorClass} />
              </div>

              <div>
                <div className="font-display text-[18px] font-bold text-white mb-1">
                  {tool.name}
                </div>
                <div className="font-mono text-[10px] text-[#9CA3AF] tracking-wider uppercase">
                  {tool.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Tool Inspection Panel */}
      {selectedTool && (
        <div className="mt-4 bg-[#121418] border border-[#8ed5ff]/40 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-[11px] text-[#8ed5ff] uppercase tracking-wider mb-1">
              TOOL_SPEC // {selectedTool.index} · {selectedTool.name.toUpperCase()}
            </div>
            <p className="font-sans text-[14px] text-[#e3e2e5] leading-relaxed">
              {selectedTool.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTool.usageExamples.map((ex) => (
              <span
                key={ex}
                className="font-mono text-[11px] px-3 py-1.5 bg-[#0A0B0D] border border-white/[0.12] text-[#bdc8d1]"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Row 2: Hard vs Soft Skills Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Left Panel: Hard Skills */}
        <div className="bg-[#16191F] border border-white/[0.12] p-8 flex flex-col justify-between">
          <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] uppercase tracking-wider mb-6">
            // HARD SKILLS — TECHNICAL EXECUTION
          </div>
          <div className="space-y-6">
            {HARD_SKILLS.map((skill, idx) => (
              <div
                key={skill.index}
                className={
                  idx < HARD_SKILLS.length - 1
                    ? 'border-b border-white/[0.08] pb-5'
                    : ''
                }
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono text-[11px] leading-[16px] text-[#8ed5ff] tabular-nums">
                    {skill.index}
                  </span>
                  <h3 className="font-display text-[17px] font-bold text-white">
                    {skill.title}
                  </h3>
                </div>
                <p className="font-sans text-[13px] leading-[20px] text-[#9CA3AF] pl-7">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Soft Skills Matrix */}
        <div className="bg-[#16191F] border border-white/[0.12] p-8 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] uppercase tracking-wider mb-6">
              // SOFT SKILLS — OPERATIONAL TRAITS
            </div>
            <p className="font-sans text-[13px] leading-[20px] text-[#9CA3AF] mb-8">
              Collaborative, disciplined, and focused competencies cultivated through academic rigor, team problem-solving, and extracurricular leadership.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SOFT_SKILLS.map((trait) => (
              <div
                key={trait}
                className="bg-[#0A0B0D] border border-white/[0.15] p-3 text-center font-mono text-[12px] text-white uppercase tracking-wider hover:border-[#8ed5ff] transition-colors"
              >
                {trait}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
