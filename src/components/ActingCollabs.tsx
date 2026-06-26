import { motion } from 'motion/react';
import { ACTING_EXPERIENCES, COLLABORATIONS } from '../data';
import { Theater, Users, Compass, Music, HelpCircle, Heart, Star } from 'lucide-react';

export default function ActingCollabs() {
  return (
    <div className="space-y-16">
      
      {/* SECTION INTRO */}
      <div className="text-center md:text-left">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#201525] text-purple-400 text-xs font-mono border border-purple-900/20">
          <Theater className="w-3.5 h-3.5" />
          ACTOR &amp; COLLABORATOR PROFILE
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-3">
          Acting &amp; Professional Collaborations
        </h3>
        <p className="text-zinc-400 text-sm font-sans mt-2 max-w-2xl leading-relaxed">
          While filmmaking and writing are my primary engines, my active work as an actor and assistant director gives me vital empathy for cast members and structured execution on set.
        </p>
      </div>

      {/* CORE CONTENT: ACTING BOXES & COLLABS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Acting details (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="p-6 bg-purple-950/10 border border-purple-900/15 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-semibold">Artist Statement</span>
            <p className="text-sm text-zinc-300 italic font-serif leading-relaxed mt-2">
              &ldquo;Acting is a valuable experience for me, but it remains secondary to filmmaking. I use it mainly to deepen my understanding of directing, blocking, and working intimately with actors.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
              <span>Board Member, Red Nose Theatre Group</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">
              Acting History
            </h4>
            
            <div className="space-y-3">
              {ACTING_EXPERIENCES.map((act) => (
                <div 
                  key={act.id}
                  className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-purple-900/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                        {act.type} &bull; {act.year}
                      </span>
                      <h5 className="font-bold text-zinc-100 text-base">{act.project}</h5>
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-300 text-xs font-mono self-start sm:self-center">
                      {act.role}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-3 font-sans leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lighting Designer Box */}
          <div className="p-5 rounded-xl bg-zinc-900/55 border border-zinc-800 text-left">
            <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider block mb-1">THEATRICAL ATMOSPHERE</span>
            <h5 className="font-bold text-zinc-200 text-base">Theatrical Lighting &amp; Sound Control</h5>
            <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
              Alongside filmmaking, I run control booths for theater productions, handling lighting design and tech queues. Highlights include technical operations for <strong>Maveddat (2024, directed by Qazal Naeami)</strong> and <strong>Sare Enghelab (2026, directed by Mohammadali Shaffat)</strong>, focusing on shaping emotional mood through minimal spotlights.
            </p>
          </div>

        </div>

        {/* Right: Technical Collaborations (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">
            Technical &amp; Assistant Roles
          </h4>

          <div className="bg-[#0F0D11] border border-zinc-900 rounded-2xl p-6 space-y-4">
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              A record of collaborative credits assisting other filmmakers in Tehran, maintaining pristine execution of sound, planning, and scene blocking.
            </p>

            <div className="space-y-3.5">
              {COLLABORATIONS.map((collab) => (
                <div 
                  key={collab.id} 
                  className="p-3.5 rounded-lg bg-zinc-950/60 border border-zinc-900/80 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-zinc-400 mt-0.5">
                    {collab.role.includes('Director') ? (
                      <Compass className="w-4 h-4 text-emerald-500" />
                    ) : collab.role.includes('Sound') ? (
                      <Music className="w-4 h-4 text-sky-500" />
                    ) : (
                      <Users className="w-4 h-4 text-purple-500" />
                    )}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">
                      {collab.role} &bull; {collab.year}
                    </span>
                    <h6 className="text-xs font-bold text-zinc-200 mt-0.5">{collab.project}</h6>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      Directed by {collab.director}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
