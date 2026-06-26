import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHORT_FILMS } from '../data';
import { Play, Pause, Clapperboard, FileText, Settings, Volume2, Film, Quote, Sparkles } from 'lucide-react';

export default function VideoSection() {
  const [activeFilmIndex, setActiveFilmIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'synopsis' | 'storyline' | 'script'>('synopsis');
  const [playbackProgress, setPlaybackProgress] = useState(35);

  const activeFilm = SHORT_FILMS[activeFilmIndex];

  // Automated subtle progress ticker when simulated "video" is playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Screenplay excerpts written by Ali Vilan to showcase his dialogue/content writing skills
  const screenplayExcerpts: Record<string, { scene: string; characters: string[]; dialogue: { char: string; text: string; parenthetical?: string }[] }> = {
    'film-1': { // Ordinary People
      scene: 'INT. TEHRAN APARTMENT - NIGHT (2026)',
      characters: ['ALI', 'MARAL'],
      dialogue: [
        { char: 'ALI', text: 'Listen... the silence outside isn’t empty. It’s heavy.' },
        { char: 'MARAL', text: 'It’s just the network being down. Everyone is waiting.' },
        { char: 'ALI', text: 'No, Maral. They are not waiting. They are preparing to leave. Look at the street below. One by one, the windows are turning black.', parenthetical: 'looking through a dust-coated blind' },
        { char: 'MARAL', text: 'And us?', parenthetical: 'whispering, holding a packed canvas bag' },
        { char: 'ALI', text: 'We record it. As long as the camera has battery, we don’t let the silence have the last word.' }
      ]
    },
    'film-2': { // Abbas
      scene: 'EXT. PADDY FIELDS, GILAN - OVERCAST (2025)',
      characters: ['REZA', 'SARA'],
      dialogue: [
        { char: 'REZA', text: 'Why are we carrying his portrait here? He’s not in the picture anymore.' },
        { char: 'SARA', text: 'Look at the reflection in the water, Reza. The wind is moving the clouds exactly the way he used to cut his scenes.', parenthetical: 'pointing to a small frame resting in the muddy water' },
        { char: 'REZA', text: 'That’s just weather. That’s just nature.', parenthetical: 'smiling, half-absurd' },
        { char: 'SARA', text: 'No. He taught us how to see the tree. Now the tree is looking back at us.' }
      ]
    },
    'film-3': { // Fa Death
      scene: 'INT. LIVING ROOM - DAWN (2022)',
      characters: ['SON', 'FATHER'],
      dialogue: [
        { char: 'SON', text: 'I made the soup. You need to take the medicine.', parenthetical: 'monotonous tone, cleaning a small wooden table' },
        { char: 'FATHER', text: 'The computer... is it still humming?', parenthetical: 'breathing heavily, eyes fixed on the ceiling' },
        { char: 'SON', text: 'Yes. It never stops. It works while I work.' },
        { char: 'FATHER', text: 'Then click the mouse once for me. End the noise.' },
        { char: 'SON', text: 'I can’t do that, Father. The program must finish running.', parenthetical: 'hands trembling slightly over a spoon' }
      ]
    },
    'film-4': { // Unknown
      scene: 'INT. CONFINED APARTMENT - DAY (2024)',
      characters: ['MAN', 'STATIC VOICES'],
      dialogue: [
        { char: 'MAN', text: 'Hello? Is anyone there?', parenthetical: 'dialing a random crossed-out number on a wall' },
        { char: 'STATIC VOICES', text: '...the subscriber you have dialed is currently unavailable...' },
        { char: 'MAN', text: 'I don’t want to buy anything. I just wanted to know if it’s raining on your side of the city.', parenthetical: 'sitting on an unmade mattress covered with torn polaroids' },
        { char: 'MAN', text: 'Please don’t hang up. Just stay on the line. I’ll do the breathing.' }
      ]
    }
  };

  const currentExcerpt = screenplayExcerpts[activeFilm.id] || screenplayExcerpts['film-1'];

  return (
    <div className="space-y-12">
      
      {/* SECTION INTRO */}
      <div className="text-center md:text-left">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A25] text-amber-400 text-xs font-mono border border-amber-900/20">
          <Film className="w-3.5 h-3.5" />
          DIRECTOR PORTFOLIO &amp; FILMOGRAPHY
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-3">
          Short Films Directed by Ali Vilan
        </h3>
        <p className="text-zinc-400 text-sm font-sans mt-2 max-w-2xl leading-relaxed">
          Four distinct experimental and psychological film projects exploring existential themes, human connection, and social realities. Selected at international festivals.
        </p>
      </div>

      {/* CORE HUB LAYOUT: Video display and film selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Video Player Screen & Stats (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Simulated Video Player */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 shadow-2xl group">
            {/* Movie Still Frame */}
            <img 
              src={activeFilm.stillUrl} 
              alt={activeFilm.title} 
              className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'brightness-100 scale-100' : 'brightness-50 scale-[1.01] blur-xs'}`}
              referrerPolicy="no-referrer"
            />

            {/* Play/Pause Button overlays */}
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-amber-400/90 hover:bg-amber-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-amber-950/40 z-20 cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-zinc-950 ml-1" />
                </motion.button>
              )}
            </div>

            {/* Status bar overlays */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none z-10">
              <span className="bg-zinc-950/85 text-[10px] font-mono text-zinc-300 px-3 py-1 rounded-full border border-zinc-800">
                {activeFilm.genre}
              </span>
              <span className={`bg-red-500/80 text-[9px] font-mono text-white px-2.5 py-0.5 rounded-sm tracking-widest ${isPlaying ? 'animate-pulse' : 'opacity-40'}`}>
                {isPlaying ? '● SIMULATING REEL' : 'PAUSED'}
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex flex-col gap-2 z-10">
              {/* Timeline slider */}
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden cursor-pointer">
                <div 
                  className="h-full bg-amber-400 transition-all duration-200" 
                  style={{ width: `${playbackProgress}%` }}
                />
              </div>

              {/* Toggles */}
              <div className="flex justify-between items-center text-xs text-zinc-300 font-mono">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span>{activeFilm.title} ({activeFilm.year})</span>
                </div>
                
                {/* Simulated Audio levels */}
                <div className="flex items-center gap-2.5">
                  <Volume2 className="w-4 h-4 text-zinc-400" />
                  <div className="flex items-end gap-0.5 h-3">
                    <span className={`w-0.5 bg-amber-400 transition-all duration-150 ${isPlaying ? 'h-2' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 transition-all duration-150 delay-75 ${isPlaying ? 'h-3' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 transition-all duration-150 delay-150 ${isPlaying ? 'h-1.5' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 transition-all duration-150 delay-300 ${isPlaying ? 'h-2.5' : 'h-1'}`} />
                  </div>
                  <Settings className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Film quick metrics and details */}
          <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/80 text-left">
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-3">
              Production Information
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">DIRECTOR</span>
                <span className="text-zinc-200 font-medium">{activeFilm.director}</span>
              </div>
              <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">YEAR</span>
                <span className="text-zinc-200 font-medium">{activeFilm.year}</span>
              </div>
              <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">GENRE</span>
                <span className="text-zinc-200 font-medium truncate">{activeFilm.genre.split('/')[0]}</span>
              </div>
              <div className="p-3 bg-zinc-950/50 rounded-lg border border-zinc-800">
                <span className="text-zinc-500 block">ROLES</span>
                <span className="text-zinc-200 font-medium truncate">{activeFilm.roles.join(', ')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Tabbed info and Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Film Selector Cards list */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">
              Select Film
            </h4>
            
            <div className="flex flex-col gap-2.5">
              {SHORT_FILMS.map((film, index) => {
                const isActive = index === activeFilmIndex;
                return (
                  <button
                    key={film.id}
                    onClick={() => {
                      setActiveFilmIndex(index);
                      setIsPlaying(false);
                      setPlaybackProgress(35);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 w-full cursor-pointer flex gap-4 items-center ${isActive ? 'bg-gradient-to-r from-[#291B1B] to-[#1F1515] border-red-950 text-white shadow-md' : 'bg-zinc-900/30 border-zinc-900 text-zinc-400 hover:bg-zinc-900/60'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800 text-zinc-500'}`}>
                      <Clapperboard className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-sm truncate">{film.title}</h5>
                        <span className="text-[10px] font-mono opacity-80">{film.year}</span>
                      </div>
                      <p className="text-[11px] truncate mt-0.5 font-sans">{film.logline}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tabbed film details & screenwriting sample */}
          <div className="bg-[#120D0D] border border-zinc-900 rounded-2xl overflow-hidden shadow-xl text-left">
            {/* Tabs head */}
            <div className="flex border-b border-zinc-900 text-xs font-mono">
              <button
                onClick={() => setActiveTab('synopsis')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${activeTab === 'synopsis' ? 'border-amber-400 text-amber-300 bg-zinc-950/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Synopsis
              </button>
              <button
                onClick={() => setActiveTab('storyline')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${activeTab === 'storyline' ? 'border-amber-400 text-amber-300 bg-zinc-950/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Storyline
              </button>
              <button
                onClick={() => setActiveTab('script')}
                className={`flex-1 py-3 text-center border-b-2 transition-colors cursor-pointer ${activeTab === 'script' ? 'border-amber-400 text-amber-300 bg-zinc-950/40' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
              >
                Screenplay Spec
              </button>
            </div>

            {/* Tabs content */}
            <div className="p-5 min-h-[220px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {activeTab === 'synopsis' && (
                  <motion.div
                    key="synopsis"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-4"
                  >
                    <div className="flex gap-2 text-amber-400">
                      <Quote className="w-5 h-5 opacity-40 shrink-0" />
                      <p className="text-sm font-serif italic font-medium leading-relaxed">
                        &ldquo;{activeFilm.logline}&rdquo;
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {activeFilm.synopsis}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'storyline' && (
                  <motion.div
                    key="storyline"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {activeFilm.storyline}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'script' && (
                  <motion.div
                    key="script"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="space-y-3 font-mono text-[11px] text-zinc-400 bg-zinc-950 p-3.5 rounded-xl border border-zinc-900"
                  >
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900/65 text-amber-400 text-[10px]">
                      <span>{currentExcerpt.scene}</span>
                      <span className="text-zinc-600">Draft Ali Vilan</span>
                    </div>

                    <div className="space-y-2.5 max-h-[170px] overflow-y-auto pr-1">
                      {currentExcerpt.dialogue.map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <span className="text-white font-bold block tracking-wider text-center text-[10px]">
                            {item.char}
                          </span>
                          {item.parenthetical && (
                            <span className="text-zinc-500 block text-center italic text-[10px]">
                              ({item.parenthetical})
                            </span>
                          )}
                          <p className="text-zinc-300 text-center leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom tag for recruiters */}
              {activeTab === 'script' && (
                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center gap-1.5 text-[10px] text-amber-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ali writes crisp dialog, pacing cues, and narrative subtext.</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
