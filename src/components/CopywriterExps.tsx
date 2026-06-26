import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Award, Feather, FileText, CheckCircle, Flame } from 'lucide-react';

export default function CopywriterExps() {
  // Filter copywriting and content-oriented experiences
  const copywritingExps = EXPERIENCES.filter(exp => exp.isCopywriting);
  const otherExps = EXPERIENCES.filter(exp => !exp.isCopywriting);

  return (
    <section id="copywriting-experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#161111] border-y border-zinc-900/60 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-mono text-amber-400 uppercase tracking-widest font-semibold mb-2">
              Professional Foundation
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Highlighted Copywriting &amp; Content Writing Experience
            </h3>
          </div>
          <p className="text-sm text-zinc-400 max-w-md font-sans leading-relaxed md:text-right">
            Crafting strategic brand narratives, engaging advertising copy, scripts, and content treatments with high-end storytelling principles.
          </p>
        </div>

        {/* Copywriting highlight box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4 bg-gradient-to-br from-[#2D1A1A] to-[#1A1111] border border-red-900/20 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center border border-amber-400/20 text-amber-400">
                <Feather className="w-6 h-6" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white tracking-wide">Story-First Strategy</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  I believe advertising shouldn&apos;t feel like a pitch; it should feel like a discovery. My copywriting builds an emotional bridge using deep, sensory narrative structures learned as an independent filmmaker.
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Audience Psychology:</strong> Writing content that hooks in under 3 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Integrated Campaigns:</strong> Combining slogan, copy, script, and visual moodboards.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Bolding Results:</strong> High-impact wording structured precisely for recruiters and business impact.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-red-900/10 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-white font-mono">AD</div>
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-white font-mono">CW</div>
                <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] text-white font-mono">SD</div>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">Collaborating across design and film teams</span>
            </div>
          </div>

          {/* Copywriting Experience list (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {copywritingExps.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/55 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700/80 transition-all duration-300 relative group shadow-lg"
              >
                {/* Visual marker */}
                <div className="absolute top-8 left-0 w-1 h-12 bg-gradient-to-b from-amber-400 to-red-500 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#251D14] text-amber-400 text-[11px] font-mono border border-amber-900/20 mb-2.5">
                      <Flame className="w-3.5 h-3.5" />
                      CO-WRITER &amp; CREATIVE CONCEPT
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-sans font-medium text-zinc-400 mt-0.5">
                      {exp.company} &bull; <span className="text-zinc-500">{exp.location}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-zinc-800 text-zinc-300 font-mono text-xs px-3 py-1 rounded-md border border-zinc-700">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 font-sans mb-6 leading-relaxed">
                  {/* We bold/highlight his copywriting achievements as requested */}
                  <strong>{exp.description}</strong>
                </p>

                <div className="space-y-3.5">
                  <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">Key Achievements &amp; Projects</h5>
                  <ul className="space-y-2.5">
                    {exp.details.map((detail, idx) => {
                      // Check for specific words to make them stand out
                      const isBoldable = detail.includes('Extinction is Near') || detail.includes('dialogue scripts') || detail.includes('copywriting') || detail.includes('screenplays') || detail.includes('narrative');
                      return (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                          <span>
                            {isBoldable ? (
                              <span dangerouslySetInnerHTML={{
                                __html: detail
                                  .replace(/"Extinction is Near" \(انقراض نزدیک است\)/g, '<strong class="text-amber-300 font-semibold">"Extinction is Near" (انقراض نزدیک است)</strong>')
                                  .replace(/copywriting/g, '<strong class="text-white font-medium border-b border-amber-500/30">copywriting</strong>')
                                  .replace(/screenplays/g, '<strong class="text-white font-medium">screenplays</strong>')
                                  .replace(/dialogue scripts/g, '<strong class="text-white font-medium">dialogue scripts</strong>')
                              }} />
                            ) : detail}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cinematic foundations section */}
        <div className="mt-8">
          <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Filmmaking &amp; Artistic Foundations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherExps.map(exp => (
              <div key={exp.id} className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-900 text-left">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">{exp.period}</span>
                <h5 className="text-sm font-semibold text-zinc-300 mt-1">{exp.role}</h5>
                <p className="text-xs font-mono text-zinc-500 mt-0.5">{exp.company}</p>
                <p className="text-xs text-zinc-400 mt-2 font-sans">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
