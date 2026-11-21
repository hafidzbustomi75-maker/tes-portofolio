import React, { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { CONTACT_INFO, EDUCATION_LOG, HARD_SKILLS, SOFT_SKILLS } from '../data/portfolioData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToAbout: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onJumpToAbout,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const summaryText = `Muhammad Hafidz Bustomi
Informatics Engineering Undergraduate · Institut Teknologi PLN (ITPLN)
Location: Madiun — Jakarta, Indonesia
Focus: Python Programming, Algorithms, Data Science, AI Agent Automation
Leadership: Head of Calung Extracurricular — SKI (2024 — Present)
Email: ${CONTACT_INFO.email}`;

  const handleCopyDossier = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 1800);
    } catch {
      // Clipboard blocked fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
    >
      <div
        className="w-full max-w-2xl bg-[#121418] border border-white/[0.16] shadow-[0_0_40px_rgba(0,0,0,0.65)] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#0A0B0D] border-b border-white/[0.12] flex items-center justify-between">
          <div className="font-mono text-[11px] text-[#8ed5ff] uppercase tracking-wider">
            ◉ SYSTEM PROFILE // DOSSIER_8812
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close system profile"
            className="w-8 h-8 flex items-center justify-center border border-white/[0.12] text-[#9CA3AF] hover:text-white hover:border-[#8ed5ff] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div>
              <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-1">
                IDENTITY SPECIFICATION
              </div>
              <h3
                id="profile-modal-title"
                className="font-display text-[24px] font-bold text-white"
              >
                Muhammad Hafidz Bustomi
              </h3>
              <p className="font-sans text-[14px] text-[#c4c7ca] mt-1">
                S1 Teknik Informatika · Institut Teknologi PLN (ITPLN)
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 bg-[#16191F] border border-emerald-400/40 text-emerald-300 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OPEN FOR COLLABORATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#16191F] border border-white/[0.12] p-4">
              <div className="font-mono text-[10px] text-[#8ed5ff] uppercase tracking-wider mb-3">
                ACADEMIC TRACK
              </div>
              <div className="space-y-3">
                {EDUCATION_LOG.map((ed) => (
                  <div key={ed.institution}>
                    <div className="font-mono text-[10px] text-[#9CA3AF]">{ed.period}</div>
                    <div className="font-display text-[14px] font-semibold text-white">
                      {ed.institution}
                    </div>
                    <div className="font-sans text-[12px] text-[#9CA3AF]">{ed.location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#16191F] border border-white/[0.12] p-4">
              <div className="font-mono text-[10px] text-[#8ed5ff] uppercase tracking-wider mb-3">
                CORE COMPETENCIES
              </div>
              <ul className="space-y-2 mb-4">
                {HARD_SKILLS.map((skill) => (
                  <li key={skill.index} className="font-sans text-[13px] text-[#e3e2e5]">
                    <span className="font-mono text-[11px] text-[#8ed5ff] mr-2">
                      {skill.index}
                    </span>
                    {skill.title}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {SOFT_SKILLS.map((trait) => (
                  <span
                    key={trait}
                    className="font-mono text-[10px] px-2 py-0.5 bg-[#0A0B0D] border border-white/[0.12] text-[#9CA3AF]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#0A0B0D] border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopyDossier}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider px-4 py-2.5 border border-white/[0.16] text-[#e3e2e5] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-colors cursor-pointer"
          >
            {copiedSummary ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>SUMMARY COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY DOSSIER SUMMARY</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onJumpToAbout();
            }}
            className="font-mono text-[11px] uppercase font-bold tracking-[0.12em] px-5 py-2.5 bg-[#E5E7EB] text-[#0A0B0D] hover:bg-white transition-colors cursor-pointer"
          >
            FULL OVERVIEW SECTION →
          </button>
        </div>
      </div>
    </div>
  );
};
