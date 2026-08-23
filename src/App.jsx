import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { ExperienceSection } from './components/ExperienceSection';
import { ExperienceModal } from './components/ExperienceModal';
import { ProjectsCatalog } from './components/ProjectsCatalog';
import { EngineeringLogs } from './components/EngineeringLogs';
import { LogModal } from './components/LogModal';
import { Gallery } from './components/Gallery';
import { Lightbox } from './components/Lightbox';
import { AboutSection } from './components/AboutSection';
import { CommandPalette } from './components/CommandPalette';
import { ConnectModal } from './components/ConnectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/ui/Toast';
import { Footer } from './components/Footer';
import { SpatialCanvas } from './components/3d/SpatialCanvas';
import { HardwareWalkthroughHUD } from './components/3d/HardwareWalkthroughHUD';
import { hardwareWalkthroughStages } from './data/hardwareWalkthroughData';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [walkthroughMode, setWalkthroughMode] = useState(false);
  const [walkthroughStage, setWalkthroughStage] = useState('tokenization');
  const [selectedLog, setSelectedLog] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [cmdKOpen, setCmdKOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    setActiveSection(sectionId);
    if (walkthroughMode) {
      setWalkthroughMode(false);
    }
    window.location.hash = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [walkthroughMode]);

  // Global Keyboard Listener for Cmd+K, Blueprint Mode (B), and Walkthrough Stage Keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger hotkeys when typing in input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdKOpen((prev) => !prev);
        return;
      }

      if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        setWalkthroughMode((prev) => !prev);
        return;
      }

      if (e.key === 'Escape' && walkthroughMode) {
        e.preventDefault();
        setWalkthroughMode(false);
        return;
      }

      if (walkthroughMode && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        e.preventDefault();
        const currentIdx = hardwareWalkthroughStages.findIndex((s) => s.id === walkthroughStage);
        if (e.key === 'ArrowRight') {
          const nextIdx = (currentIdx + 1) % hardwareWalkthroughStages.length;
          setWalkthroughStage(hardwareWalkthroughStages[nextIdx].id);
        } else {
          const prevIdx = (currentIdx - 1 + hardwareWalkthroughStages.length) % hardwareWalkthroughStages.length;
          setWalkthroughStage(hardwareWalkthroughStages[prevIdx].id);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [walkthroughMode, walkthroughStage]);

  // Enhanced Intersection Observer / Scroll Spy with bottom-of-page trigger
  useEffect(() => {
    if (walkthroughMode) return;
    const sections = ['overview', 'experience', 'projects', 'logs', 'gallery', 'about'];
    
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 60) {
        setActiveSection('about');
        return;
      }

      const scrollPos = window.scrollY + 220;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [walkthroughMode]);

  // Handle URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

  const handleOpenLog = (logId) => {
    const log = portfolioData.logs.find(l => l.id === logId);
    if (log) {
      setSelectedLog(log);
    }
  };

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-black text-apple-text min-h-screen font-sans selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      {/* Master Atmospheric 3D WebGL Ambient Background */}
      <SpatialCanvas 
        walkthroughMode={walkthroughMode}
        walkthroughStage={walkthroughStage}
      />

      {/* Floating Apple Frosted Dock Header (Hidden in Walkthrough Mode) */}
      {!walkthroughMode && (
        <Header
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onOpenCmdK={() => setCmdKOpen(true)}
          onOpenConnect={() => setConnectModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenWalkthrough={() => setWalkthroughMode(true)}
        />
      )}

      {/* Interactive 3D Hardware Walkthrough HUD */}
      {walkthroughMode && (
        <HardwareWalkthroughHUD
          activeStageId={walkthroughStage}
          onSelectStage={setWalkthroughStage}
          onClose={() => setWalkthroughMode(false)}
        />
      )}

      {/* Main Single-Page App Sections (Smoothly Faded Out in Walkthrough Mode) */}
      <main 
        id="main-content" 
        className={`relative z-10 flex flex-col transition-all duration-700 ${
          walkthroughMode ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'
        }`}
      >
        <Hero 
          onNavigate={scrollToSection} 
          onOpenConnect={() => setConnectModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenWalkthrough={() => setWalkthroughMode(true)}
          onCopySuccess={showToast}
        />
        <BentoGrid />
        <ExperienceSection onSelectJob={setSelectedJob} />
        <ProjectsCatalog />
        <EngineeringLogs onOpenLog={handleOpenLog} />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <AboutSection 
          onOpenConnect={() => setConnectModalOpen(true)}
          onOpenResume={() => setResumeModalOpen(true)}
        />
      </main>

      {/* Apple Minimalist Footer */}
      {!walkthroughMode && <Footer onOpenConnect={() => setConnectModalOpen(true)} />}

      {/* Modals & Overlays */}
      <ExperienceModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      <LogModal
        log={selectedLog}
        onClose={() => setSelectedLog(null)}
      />

      {lightboxOpen && (
        <Lightbox
          images={portfolioData.photography}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <CommandPalette
        isOpen={cmdKOpen}
        onClose={() => setCmdKOpen(false)}
        onNavigate={scrollToSection}
        onOpenLog={handleOpenLog}
        onSelectJob={setSelectedJob}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenConnect={() => setConnectModalOpen(true)}
      />

      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        onCopySuccess={showToast}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Apple Frosted Glass Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
      />
    </div>
  );
}