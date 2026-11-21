import React, { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'blueprint'>('architecture');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab('architecture');
    setCopied(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard fallback ignored if blocked
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090B]/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="w-full max-w-3xl bg-[#121418] border border-white/[0.16] shadow-[0_0_40px_rgba(0,0,0,0.65)] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="px-6 py-4 bg-[#0A0B0D] border-b border-white/[0.12] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-[11px] text-[#8ed5ff] uppercase tracking-wider truncate">
              {project.blueprintLabel}
            </span>
            <span className="hidden sm:inline font-mono text-[10px] text-[#6B7280] uppercase">
              // {project.metaLine}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project blueprint"
            className="w-8 h-8 flex items-center justify-center border border-white/[0.12] text-[#9CA3AF] hover:text-white hover:border-[#8ed5ff] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="font-mono text-[10px] text-[#8ed5ff] uppercase tracking-widest mb-2">
              {project.categoryTag}
            </div>
            <h3
              id="project-modal-title"
              className="font-display text-[24px] sm:text-[28px] font-bold text-white leading-tight mb-2"
            >
              {project.title}
            </h3>
            <p className="font-sans text-[15px] text-[#c4c7ca] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Modal View Tabs */}
          <div className="flex border-b border-white/[0.12] gap-6">
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'architecture'
                  ? 'text-[#8ed5ff] border-[#8ed5ff]'
                  : 'text-[#9CA3AF] border-transparent hover:text-white'
              }`}
            >
              01. SYSTEM ARCHITECTURE
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('blueprint')}
              className={`pb-3 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                activeTab === 'blueprint'
                  ? 'text-[#8ed5ff] border-[#8ed5ff]'
                  : 'text-[#9CA3AF] border-transparent hover:text-white'
              }`}
            >
              02. CODE &amp; SPEC BLUEPRINT
            </button>
          </div>

          {activeTab === 'architecture' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.architectureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-[#16191F] border border-white/[0.12] p-4"
                  >
                    <div className="font-mono text-[11px] text-[#8ed5ff] mb-2 tabular-nums">
                      STAGE {step.step}
                    </div>
                    <div className="font-display text-[15px] font-bold text-white mb-1.5">
                      {step.title}
                    </div>
                    <p className="font-sans text-[13px] text-[#9CA3AF] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#0A0B0D] border border-white/[0.12] p-5">
                <div className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-wider mb-3">
                  // KEY DELIVERABLES
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-[13px] text-[#e3e2e5] flex items-start gap-2"
                    >
                      <span className="text-[#8ed5ff]">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-[#0A0B0D] border border-white/[0.12]">
              <div className="px-4 py-2.5 border-b border-white/[0.12] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#9CA3AF]">
                  {project.codeTitle}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border border-white/[0.12] text-[#e3e2e5] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY SPEC</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto font-mono text-[12px] leading-[20px] text-[#e3e2e5]">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0A0B0D] border-t border-white/[0.12] flex flex-wrap items-center justify-between gap-4">
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
            onClick={() => onDiscussProject(project.title)}
            className="font-mono text-[11px] uppercase font-bold tracking-[0.12em] px-5 py-2.5 bg-[#E5E7EB] text-[#0A0B0D] hover:bg-white transition-colors cursor-pointer"
          >
            DISCUSS THIS MODULE →
          </button>
        </div>
      </div>
    </div>
  );
};
