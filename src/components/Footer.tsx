import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#08090B] border-t border-white/[0.12] py-7 px-[6vw]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="font-mono text-[11px] leading-[16px] tracking-[0.08em] text-[#bdc8d1]">
          © 2026 MUHAMMAD HAFIDZ BUSTOMI
        </div>
        <div className="font-mono text-[11px] leading-[16px] text-[#87929a] tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8ed5ff] animate-pulse" />
          <span>INFORMATICS ENGINEERING · ITPLN · ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  );
};
