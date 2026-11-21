import React, { useState } from 'react';
import { TELEMETRY_BAR } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenProfile: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenProfile,
}) => {
  const [rotorAngle, setRotorAngle] = useState(-12);
  const [isInspectingNode, setIsInspectingNode] = useState(false);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    setRotorAngle(-12 + relX * 24);
  };

  const handleStageMouseLeave = () => {
    setRotorAngle(-12);
  };

  return (
    <section
      id="hero"
      className="min-h-[868px] lg:min-h-[calc(100vh-74px)] grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden items-center border-b border-white/[0.12]"
    >
      {/* Ambient Radial Illumination */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8ed5ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8ed5ff]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Content Column (7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-center px-[6vw] py-16 lg:py-24 z-10">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8ed5ff] animate-pulse" />
          <span>00 / SYSTEM INITIALIZED • ENGINEERED TO LEARN &amp; BUILD</span>
        </div>

        <h1 className="font-display text-[48px] sm:text-[62px] lg:text-[76px] leading-[0.95] font-bold uppercase tracking-tight mb-8">
          <span className="block text-white">INFORMATICS.</span>
          <span className="block text-[#9CA3AF]">DATA &amp; AI.</span>
          <span className="block text-white">LOGIC.</span>
          <span className="block text-[#6B7280]">DRIVEN.</span>
        </h1>

        <p className="font-sans text-[18px] leading-[28px] text-[#c4c7ca] max-w-xl mb-10">
          Muhammad Hafidz Bustomi — Informatics Engineering undergraduate at Institut Teknologi PLN, passionate about Data Science, AI Agent Automation, and Software Engineering.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onExploreProjects}
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase font-bold tracking-[0.14em] px-6 py-3.5 bg-[#E5E7EB] text-[#0A0B0D] border border-[#E5E7EB] hover:bg-white hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer whitespace-nowrap"
          >
            EXPLORE PROJECTS →
          </button>
          <button
            type="button"
            onClick={onOpenProfile}
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-6 py-3.5 bg-white/[0.03] text-[#F4F5F7] border border-white/[0.28] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all cursor-pointer whitespace-nowrap"
          >
            ◉ SYSTEM PROFILE
          </button>
        </div>
      </div>

      {/* Right Visual Stage (5 cols) */}
      <div
        onMouseMove={handleStageMouseMove}
        onMouseLeave={handleStageMouseLeave}
        onClick={() => setIsInspectingNode((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsInspectingNode((prev) => !prev);
          }
        }}
        aria-label="Interactive kinetic core telemetry sculpture"
        className="lg:col-span-5 relative h-full min-h-[420px] lg:min-h-[640px] flex items-center justify-center p-6 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.12] bg-[#0E1015]/60 backdrop-blur-sm overflow-hidden cursor-pointer select-none group"
      >
        {/* Coordinate Telemetry Watermarks */}
        <div className="absolute top-4 left-6 font-mono text-[10px] text-[#6B7280] tracking-widest uppercase">
          LOC // LAT 06°10&apos;S • LON 106°47&apos;E
        </div>
        <div className="absolute top-4 right-6 font-mono text-[10px] text-[#6B7280] tracking-widest uppercase">
          NODE // ITPLN.CORE
        </div>
        <div className="absolute bottom-4 left-6 font-mono text-[10px] text-[#8ed5ff]/70 tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#8ed5ff] rounded-full animate-ping" />
          <span>{isInspectingNode ? 'CORE // INSPECT MODE ACTIVE' : 'STREAM // SYNCHRONIZED'}</span>
        </div>
        <div className="absolute bottom-4 right-6 font-mono text-[10px] text-[#6B7280] tracking-widest uppercase tabular-nums">
          ANG // {rotorAngle.toFixed(1)}° · VER // 2.0.26
        </div>

        {/* Precision SVG Sculpture */}
        <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
          <svg
            className="w-full h-full transition-transform duration-300 ease-out drop-shadow-[0_0_35px_rgba(56,189,248,0.15)]"
            style={{ transform: `rotate(${isInspectingNode ? 0 : rotorAngle}deg)` }}
            viewBox="0 0 400 400"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="sculptureGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1F242D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0A0B0D" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="bladeGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Outer Concentric Coordinate Rings */}
            <circle
              cx="200"
              cy="200"
              fill="none"
              r="180"
              stroke="rgba(255,255,255,0.08)"
              strokeDasharray="3 6"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              fill="none"
              r="140"
              stroke={isInspectingNode ? 'rgba(56,189,248,0.55)' : 'rgba(56,189,248,0.2)'}
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="200"
              fill="none"
              r="95"
              stroke="rgba(255,255,255,0.15)"
              strokeDasharray="12 4"
              strokeWidth="1"
            />

            {/* Crosshair Latices */}
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="20" x2="380" y1="200" y2="200" />
            <line stroke="rgba(255,255,255,0.06)" strokeWidth="1" x1="200" x2="200" y1="20" y2="380" />

            {/* Angled Turbine & Mechanical Rib Blades */}
            <g transform="rotate(-28 200 200)">
              <rect
                fill="url(#bladeGrad)"
                height="130"
                rx="2"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                width="24"
                x="188"
                y="40"
              />
              <rect
                fill="url(#bladeGrad)"
                height="130"
                rx="2"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                width="24"
                x="188"
                y="230"
              />
              <rect
                fill="url(#bladeGrad)"
                height="24"
                rx="2"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                width="130"
                x="40"
                y="188"
              />
              <rect
                fill="url(#bladeGrad)"
                height="24"
                rx="2"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                width="130"
                x="230"
                y="188"
              />
              <polygon
                fill="rgba(56,189,248,0.15)"
                points="120,90 145,75 280,310 255,325"
                stroke="rgba(56,189,248,0.4)"
                strokeWidth="1"
              />
              <polygon
                fill="rgba(255,255,255,0.08)"
                points="90,280 75,255 310,120 325,145"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
            </g>

            {/* Core Precision Kinetic Hub */}
            <polygon
              fill="#16191F"
              points="200,155 240,178 240,222 200,245 160,222 160,178"
              stroke="#38BDF8"
              strokeWidth="2"
            />
            <circle cx="200" cy="200" fill="#38BDF8" r="16" />
            <circle cx="200" cy="200" fill="#0A0B0D" r="6" />

            {/* Outer Tick Marks */}
            <circle cx="200" cy="20" fill="#38BDF8" r="3" />
            <circle cx="380" cy="200" fill="#38BDF8" r="3" />
            <circle cx="200" cy="380" fill="#38BDF8" r="3" />
            <circle cx="20" cy="200" fill="#38BDF8" r="3" />
          </svg>

          {isInspectingNode && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#16191F]/95 border border-[#38BDF8]/50 px-3 py-1.5 font-mono text-[10px] text-[#8ed5ff] tracking-wider uppercase whitespace-nowrap">
              ITPLN · INFORMATICS CORE · PYTHON / DATA / AI
            </div>
          )}
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="col-span-full border-t border-white/[0.12] bg-[#0A0B0D]/85 backdrop-blur-[10px] px-[6vw] py-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-[11px] leading-[16px] tracking-[0.08em] text-[#9CA3AF]">
          {TELEMETRY_BAR.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              {item.isStatus ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-white">{item.label}</span>
                </>
              ) : (
                <>
                  <span className="text-[#8ed5ff] font-bold">//</span>
                  <span>{item.label}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
