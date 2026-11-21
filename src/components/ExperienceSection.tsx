import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
    >
      <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
        • 03 / LEADERSHIP &amp; ACTIVITIES •
      </div>
      <h2 className="font-display text-[38px] sm:text-[52px] lg:text-[68px] font-bold text-white uppercase leading-none tracking-tight mb-12">
        EXPERIENCE.
      </h2>

      {/* Precision Horizontal Row */}
      <div className="border-t border-b border-white/[0.12] py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Col 1: Date & Status */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-[11px] leading-[16px] text-white font-semibold tabular-nums">
              2024 — PRESENT
            </span>
            <span className="inline-flex items-center gap-1.5 w-max font-mono text-[11px] px-2.5 py-0.5 bg-[#16191F] border border-[#8ed5ff]/40 text-[#8ed5ff] shadow-[0_0_12px_rgba(56,189,248,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8ed5ff] animate-pulse" />
              ACTIVE ROLE
            </span>
          </div>

          {/* Col 2: Role & Organization */}
          <div className="md:col-span-4">
            <h3 className="font-display text-[24px] font-bold text-white leading-tight">
              Head of Calung Extracurricular
            </h3>
            <p className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] mt-1">
              SKI (Sie Kerohanian Islam)
            </p>
          </div>

          {/* Col 3: Description */}
          <div className="md:col-span-5">
            <p className="font-sans text-[15px] leading-[24px] text-[#9CA3AF]">
              Led student members in organizing rehearsals, coordinating traditional music performances, and managing team schedules and collaborative school events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
