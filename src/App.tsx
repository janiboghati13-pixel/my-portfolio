import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import CopywriterExps from './components/CopywriterExps';
import CampaignAndPhotos from './components/CampaignAndPhotos';
import VideoSection from './components/VideoSection';
import ActingCollabs from './components/ActingCollabs';
import AboutAndBio from './components/AboutAndBio';
import ContactSection from './components/ContactSection';
import { Sparkles, ImageIcon, Video as VideoIcon, Theater as TheaterIcon, FileText, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('campaigns');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#120D0D] text-zinc-100 font-sans selection:bg-amber-400 selection:text-zinc-950 overflow-x-hidden antialiased">
      {/* Header */}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Hero (Focuses heavily on copy/content writer first) */}
      <Hero onTabChange={setActiveTab} />

      {/* 2. Copywriter & Content Writer Direct Achievements (Front & Center) */}
      <CopywriterExps />

      {/* 3. Portfolio Menu Tabs Anchor */}
      <section id="portfolio-tabs" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#120D0D] relative">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Tab Selector Buttons Grid */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-zinc-900">
            <div className="text-center md:text-left">
              <h2 className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-1">
                Portfolio Showroom
              </h2>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Explore Creative Galleries
              </h3>
            </div>

            {/* Main Tabs controller */}
            <div className="flex flex-wrap items-center bg-zinc-950/80 p-1.5 rounded-2xl border border-zinc-900 w-full md:w-auto overflow-x-auto justify-start sm:justify-center">
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${activeTab === 'campaigns' ? 'bg-[#291B1B] text-amber-400 font-semibold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <ImageIcon className="w-3.5 h-3.5 shrink-0" />
                Graphics &amp; Campaigns
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${activeTab === 'videos' ? 'bg-[#291B1B] text-amber-400 font-semibold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <VideoIcon className="w-3.5 h-3.5 shrink-0" />
                Cinema &amp; Videos
              </button>
              <button
                onClick={() => setActiveTab('acting')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${activeTab === 'acting' ? 'bg-[#291B1B] text-amber-400 font-semibold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <TheaterIcon className="w-3.5 h-3.5 shrink-0" />
                Acting &amp; Collabs
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${activeTab === 'about' ? 'bg-[#291B1B] text-amber-400 font-semibold shadow-md' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                Bio &amp; Resume
              </button>
            </div>
          </div>

          {/* Active Tab Panel with transition */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'campaigns' && (
                <motion.div
                  key="campaigns"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                >
                  <CampaignAndPhotos />
                </motion.div>
              )}

              {activeTab === 'videos' && (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                >
                  <VideoSection />
                </motion.div>
              )}

              {activeTab === 'acting' && (
                <motion.div
                  key="acting"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                >
                  <ActingCollabs />
                </motion.div>
              )}

              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                >
                  <AboutAndBio />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 4. Detailed Contact Block */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-[#070505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-white font-display font-bold">
              <span>ALI VILAN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </div>
            <p className="text-xs text-zinc-500 font-mono">
              Academic Broadcasting Graduate &bull; Iranian Independent Filmmaker &bull; Concept Copywriter
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-zinc-600 font-mono gap-4">
          <p>
            Designed exclusively for recruiter selection. &copy; {new Date().getFullYear()} Ali Vilan. All Rights Reserved.
          </p>
          <p>
            Tehran, Iran &bull; Available for worldwide remote copy &amp; script contracts.
          </p>
        </div>
      </footer>
    </div>
  );
}
