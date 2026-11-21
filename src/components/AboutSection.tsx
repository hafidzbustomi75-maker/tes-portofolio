import React, { useState } from 'react';
import { DOMAIN_FOCUSES, EDUCATION_LOG } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string | null>(null);
  const selectedDomain = DOMAIN_FOCUSES.find((d) => d.id === activeDomainId) ?? null;

  return (
    <section
      id="about"
      className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
    >
      <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
        • 01 / PROFILE SPECIFICATION •
      </div>
      <h2 className="font-display text-[38px] sm:text-[52px] lg:text-[68px] font-bold text-white uppercase leading-none tracking-tight mb-12">
        SYSTEM OVERVIEW.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="font-display text-[22px] leading-snug text-white font-medium mb-6">
              Hello! I&apos;m Hafidz, an Informatics Engineering student focused on turning structured logic into practical software and intelligent workflows.
            </p>
            <p className="font-sans text-[15px] leading-[24px] text-[#9CA3AF] mb-10">
              Currently pursuing my Bachelor&apos;s degree in Informatics at Institut Teknologi PLN (ITPLN) after graduating from SMAN 3 Taruna Angkasa Jawa Timur. My academic and personal explorations center on Python programming, algorithmic problem solving, Data Science, and building automated AI Agent systems.
            </p>
          </div>

          <div>
            {/* 3 Focus Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DOMAIN_FOCUSES.map((domain) => {
                const isSelected = activeDomainId === domain.id;
                return (
                  <button
                    key={domain.id}
                    type="button"
                    onClick={() =>
                      setActiveDomainId((prev) => (prev === domain.id ? null : domain.id))
                    }
                    className={`text-left bg-[#16191F] border p-5 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#8ed5ff] shadow-[0_0_16px_rgba(56,189,248,0.18)]'
                        : 'border-white/[0.12] hover:border-[#8ed5ff]/50'
                    }`}
                  >
                    <div className="font-mono text-[11px] leading-[16px] text-[#8ed5ff] uppercase tracking-wider mb-2">
                      {domain.label}
                    </div>
                    <div className="font-display text-[16px] text-white font-bold mb-1">
                      {domain.title}
                    </div>
                    <div className="font-sans text-[13px] leading-[20px] text-[#9CA3AF]">
                      {domain.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedDomain && (
              <div className="mt-4 bg-[#121418] border border-[#8ed5ff]/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] text-[#8ed5ff] uppercase tracking-wider mb-1">
                    {selectedDomain.label} // SPECIFICATION
                  </div>
                  <p className="font-sans text-[13px] leading-[20px] text-[#e3e2e5]">
                    {selectedDomain.summary}
                  </p>
                </div>
                <a
                  href={`#${selectedDomain.relatedSection}`}
                  className="font-mono text-[11px] text-[#8ed5ff] hover:text-white uppercase tracking-wider shrink-0"
                >
                  VIEW IN {selectedDomain.relatedSection.toUpperCase()} →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Academic Log - 5 cols) */}
        <div className="lg:col-span-5 bg-[#0F1116] border border-white/[0.12] p-8 flex flex-col justify-start">
          <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] uppercase tracking-wider mb-8 flex items-center justify-between gap-2">
            <span>// ACADEMIC LOG</span>
            <span className="text-[#8ed5ff] text-[10px] tabular-nums">RECORD_ID: 8812-ITPLN</span>
          </div>

          <div className="relative pl-6 border-l border-white/[0.28] space-y-10">
            {EDUCATION_LOG.map((entry) => (
              <div key={entry.institution} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 bg-white" />
                <div className="font-mono text-[11px] leading-[16px] text-[#8ed5ff] uppercase tracking-wider mb-1">
                  {entry.period}
                </div>
                <h3 className="font-display text-[18px] font-bold text-white mb-1">
                  {entry.institution}
                </h3>
                <p className="font-sans text-[13px] leading-[20px] text-[#9CA3AF] mb-3">
                  {entry.program}
                </p>
                <span className="inline-block font-mono text-[11px] px-2.5 py-1 bg-[#16191F] border border-white/[0.12] text-[#c4c7ca]">
                  {entry.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
