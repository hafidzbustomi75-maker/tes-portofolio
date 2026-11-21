import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenContact: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenContact,
  onOpenProfile,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[74px] bg-[#0A0B0D]/80 backdrop-blur-[14px] border-b border-white/[0.12]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">
        {/* Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMobileOpen(false);
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-1.5 h-6 bg-[#8ed5ff] transform -skew-x-[24deg] transition-transform duration-200 group-hover:scale-y-110" />
            <span className="w-1.5 h-6 bg-[#8ed5ff]/70 transform -skew-x-[24deg] transition-transform duration-200 group-hover:scale-y-110" />
            <span className="w-1.5 h-6 bg-[#8ed5ff]/40 transform -skew-x-[24deg] transition-transform duration-200 group-hover:scale-y-110" />
          </div>
          <span className="font-display text-[18px] leading-none font-bold tracking-[0.08em] text-[#e3e2e5] uppercase pl-1 whitespace-nowrap">
            HAFIDZ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`font-mono text-[11px] leading-[16px] tracking-[0.08em] uppercase py-1 transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#8ed5ff] border-b-2 border-[#8ed5ff]'
                    : 'text-[#bdc8d1] hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center font-mono text-[11px] leading-[16px] tracking-[0.08em] uppercase px-4 py-2 bg-transparent text-[#e3e2e5] border border-white/[0.12] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            GET IN TOUCH →
          </button>

          <button
            type="button"
            onClick={onOpenProfile}
            title="Open System Profile Dossier"
            aria-label="Open System Profile Dossier"
            className="w-8 h-8 rounded-full bg-[#8ed5ff] flex items-center justify-center border border-[#8ed5ff]/20 hover:bg-white transition-colors cursor-pointer shrink-0"
          >
            <svg
              className="w-[18px] h-[18px] text-[#00354a]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 border border-white/[0.12] text-[#e3e2e5] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0B0D]/95 backdrop-blur-md border-b border-white/[0.12] px-6 py-4">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`font-mono text-[12px] tracking-[0.08em] uppercase py-2 border-b border-white/[0.06] ${
                  activeSection === item.id ? 'text-[#8ed5ff]' : 'text-[#bdc8d1]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="mt-2 inline-flex items-center justify-center font-mono text-[11px] tracking-[0.08em] uppercase px-4 py-2.5 bg-[#E5E7EB] text-[#0A0B0D] font-bold cursor-pointer"
            >
              GET IN TOUCH →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
