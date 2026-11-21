/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { NAV_ITEMS, ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesAndContact } from './components/ServicesAndContact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [preselectedTopic, setPreselectedTopic] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((n) => n.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e10] text-[#e3e2e5] font-sans grid-matrix-bg selection:bg-[#8ed5ff] selection:text-[#001e2c]">
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => scrollToSection('contact')}
        onOpenProfile={() => setProfileOpen(true)}
      />

      <main className="w-full pt-[74px] bg-transparent">
        <div className="flex flex-col w-full text-[#e3e2e5] bg-[#0d0e10]/90">
          <HeroSection
            onExploreProjects={() => scrollToSection('projects')}
            onOpenProfile={() => setProfileOpen(true)}
          />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          <ServicesAndContact
            preselectedTopic={preselectedTopic}
            onClearTopic={() => setPreselectedTopic(null)}
          />
        </div>
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={(title) => {
          setSelectedProject(null);
          setPreselectedTopic(title);
          scrollToSection('contact');
        }}
      />

      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        onJumpToAbout={() => scrollToSection('about')}
      />
    </div>
  );
}
