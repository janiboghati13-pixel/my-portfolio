import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Mail, ArrowRight, FileText, Send, Phone } from 'lucide-react';

interface HeroProps {
  onTabChange: (tab: string) => void;
}

export default function Hero({ onTabChange }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#120D0D] via-[#1A1414] to-[#120D0D] overflow-hidden">
      {/* Background cinematic lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Section (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#2D1616] text-[#E07A7A] px-4 py-2 rounded-full border border-red-900/30 text-xs font-mono tracking-wider w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse" />
            OPEN FOR ADVERTISING & CONTENT WRITING ROLES
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight"
          >
            Ali Vilan
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-red-400">
              Cinematic Copywriter
            </span>
            <span className="block text-2xl sm:text-3xl font-sans font-light text-zinc-400 mt-2">
              &amp; Creative Concept Developer
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans"
          >
            I am a self-taught independent filmmaker and <strong className="text-white font-medium border-b border-amber-500/50 pb-0.5">creative copywriter</strong> born in 2001 in Tehran, Iran. 
            By marrying the sensory depth of cinema with persuasive narrative structure, I help brands and agencies tell stories that stick. 
            <strong className="text-amber-300 font-medium"> I translate abstract concepts into award-worthy copywriting, visual campaigns, and script treatments.</strong>
          </motion.p>

          {/* Quick recruiter-focused pitch block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-red-500" />
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-widest font-semibold mb-2">Recruiter Fast-Track Pitch</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Looking for a storyteller who understands hooks, visual framing, and emotional cadence? My background in writing, directing, and acting gives me a unique advantage in producing scripts, commercial copy, and integrated campaigns that stand out.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs bg-zinc-800 text-amber-300 font-mono px-2.5 py-1 rounded-md border border-zinc-700">#Copywriting</span>
              <span className="text-xs bg-zinc-800 text-amber-300 font-mono px-2.5 py-1 rounded-md border border-zinc-700">#CreativeConcepting</span>
              <span className="text-xs bg-zinc-800 text-amber-300 font-mono px-2.5 py-1 rounded-md border border-zinc-700">#Screenwriting</span>
              <span className="text-xs bg-zinc-800 text-amber-300 font-mono px-2.5 py-1 rounded-md border border-zinc-700">#Storytelling</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => onTabChange('campaigns')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-medium tracking-wide shadow-lg shadow-amber-950/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              Explore Ad Campaigns &amp; Graphics
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium hover:bg-zinc-800/80 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
              <Mail className="w-4 h-4 text-zinc-400" />
            </a>
          </motion.div>

          {/* Core Contacts directly on Hero for convenience */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono pt-4 border-t border-zinc-900/60"
          >
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              {PERSONAL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Send className="w-3.5 h-3.5 text-amber-500" />
              Telegram: {PERSONAL_INFO.telegram}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              {PERSONAL_INFO.phone}
            </span>
          </motion.div>

        </div>

        {/* Portrait/Image Section (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
          >
            {/* Ambient gold glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 to-red-600 rounded-3xl blur-md opacity-20 animate-pulse" />
            
            <div className="absolute inset-0 bg-[#231A1A] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src={PERSONAL_INFO.portraitUrl} 
                alt="Ali Vilan" 
                className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <p className="text-xs font-mono text-amber-400 tracking-wider uppercase">Ali Vilan</p>
                <h4 className="text-sm font-sans font-medium text-white tracking-wide">Born 2001, Tehran, Iran</h4>
                <p className="text-[10px] font-mono text-zinc-400 mt-0.5">Broadcasting Graduate | Filmmaker</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
