import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Compass, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'campaigns', label: 'Campaigns & Photography' },
    { id: 'videos', label: 'Cinema & Videos' },
    { id: 'acting', label: 'Acting & Collaborations' },
    { id: 'about', label: 'Bio & Resume' },
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
    
    // Smooth scroll down to tab container if needed, or scroll to top
    const element = document.getElementById('portfolio-tabs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#120D0D]/90 backdrop-blur-md border-b border-zinc-900/60 py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-start hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-display font-black text-white text-lg tracking-wider uppercase">Ali Vilan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">Copywriter &amp; Filmmaker</span>
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer relative py-1 ${isActive ? 'text-amber-400 font-semibold' : 'text-zinc-400 hover:text-white'}`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-mono border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400" />
            Hire Ali
          </a>
        </div>

        {/* Mobile menu triggers */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-white text-[10px] font-mono hover:bg-zinc-800"
          >
            Contact
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#120D0D] border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col items-stretch text-left">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-2 pt-2 border-t border-zinc-900">
                Portfolio Menu
              </p>
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-3.5 rounded-xl text-left text-sm font-sans tracking-wide transition-colors ${isActive ? 'bg-[#291B1B] text-amber-400 font-semibold' : 'text-zinc-400 hover:bg-zinc-900/40 hover:text-white'}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-md"
                >
                  Hire Ali Vilan
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
