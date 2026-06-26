import { PERSONAL_INFO, EXPERIENCES } from '../data';
import { Award, BookOpen, Globe, Sparkles, FileText, Download } from 'lucide-react';

export default function AboutAndBio() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-16">
      
      {/* Biography & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Biography (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1E1A] text-amber-400 text-xs font-mono border border-zinc-800">
              <Sparkles className="w-3.5 h-3.5" />
              THE STORYTELLER BEHIND THE CAMERA &amp; COPY
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-3">
              Biography &amp; Creative Philosophy
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            <p>
              I am an independent filmmaker and creative writer born in 2001 in Tehran, Iran. My formal foundation began in academic Broadcasting at the <strong className="text-white">Islamic Azad University of Tehran</strong>, where I developed a keen sense of structure, sound engineering, and visual grammar.
            </p>
            <p>
              My cinema explores the fragile intersections of humanity, power, and silence, focusing on intimate human experiences shaped by social pressure, emotional endurance, and the quiet presence of politics in everyday life. Through minimal narratives and sensory storytelling, I examine how personal choices are often entangled with larger systems of control, care, and survival.
            </p>
            <p className="border-l-2 border-amber-500 pl-4 py-1 italic font-serif text-white">
              &ldquo;My cinema seeks not only to observe human vulnerability, but to reveal the political weight carried within ordinary existence.&rdquo;
            </p>
            <p>
              Alongside my artistic filmmaking practice, I have been deeply active in the advertising sector as a <strong className="text-white border-b border-amber-500/30">creative concept developer, copywriter, and screenwriter</strong>. I translate this poetic, visually dense approach into powerful commercial campaigns that speak with emotional weight and narrative authority.
            </p>
          </div>
        </div>

        {/* Education & Vital Skills (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-5">
            <h4 className="text-sm font-mono text-amber-400 uppercase tracking-widest font-semibold border-b border-zinc-800 pb-3">
              Vital Metadata
            </h4>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <BookOpen className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-mono text-zinc-500 block uppercase">EDUCATION</h5>
                  <p className="text-sm text-zinc-200 font-medium font-sans leading-relaxed">
                    B.A. in Broadcasting <br />
                    <span className="text-xs text-zinc-400 font-normal">Islamic Azad University of Tehran</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-mono text-zinc-500 block uppercase">LANGUAGES</h5>
                  <p className="text-sm text-zinc-200 font-medium font-sans">
                    {PERSONAL_INFO.languages.join(' &bull; ')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-mono text-zinc-500 block uppercase">SPECIALIZATION</h5>
                  <p className="text-sm text-zinc-200 font-medium font-sans">
                    Concept-led Ad Campaigns, Dialogue Polish, Screenplay Treatments, Creative Pitch Decks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-tr from-[#251A1A] to-[#120D0D] border border-red-950/20 text-zinc-300 text-xs leading-relaxed font-sans">
            <h5 className="font-semibold text-zinc-200 mb-1.5 uppercase font-mono tracking-wide text-[10px]">Filmmaker + Writer Advantage</h5>
            I bring a directors eye to the page. I see the camera angle while writing a slogan, and hear the atmospheric soundscape while drafting a print ad. This guarantees high-end cohesive executions.
          </div>

        </div>

      </div>

      {/* Interactive Sheet / Printable CV */}
      <div className="border border-zinc-900 rounded-3xl bg-zinc-950/45 overflow-hidden">
        
        {/* CV Header */}
        <div className="p-6 bg-zinc-900/60 border-b border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Full Professional Resume</h4>
              <p className="text-xs text-zinc-500 font-mono">Tailored for agency &amp; studio recruiters</p>
            </div>
          </div>

          <button 
            onClick={handlePrint}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono border border-zinc-700 flex items-center justify-center gap-2 transition-colors cursor-pointer self-start sm:self-center"
          >
            <Download className="w-3.5 h-3.5" />
            Print / Save as PDF
          </button>
        </div>

        {/* The Printable CV Sheet Body */}
        <div className="p-8 sm:p-12 bg-white text-zinc-900 font-sans text-left max-w-4xl mx-auto my-8 rounded-2xl shadow-2xl border border-zinc-200 print:m-0 print:border-none print:shadow-none">
          
          <div className="border-b-2 border-zinc-800 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-zinc-950">{PERSONAL_INFO.name}</h1>
              <p className="text-sm font-semibold tracking-wider text-amber-700 uppercase font-mono mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-zinc-500 mt-0.5">
                {PERSONAL_INFO.subTitle}
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-600 text-left sm:text-right space-y-1">
              <p>{PERSONAL_INFO.email}</p>
              <p>Telegram: {PERSONAL_INFO.telegram}</p>
              <p>{PERSONAL_INFO.phone}</p>
              <p>{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left side (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Professional Profile
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Work History
                </h3>

                <div className="space-y-5">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="space-y-1.5">
                      <div className="flex justify-between items-start text-xs sm:text-sm">
                        <div>
                          <h4 className="font-bold text-zinc-950">{exp.role}</h4>
                          <span className="text-zinc-600 font-medium block text-xs">{exp.company} &bull; {exp.location}</span>
                        </div>
                        <span className="font-mono text-zinc-500 text-[11px] shrink-0">{exp.period}</span>
                      </div>
                      <p className="text-xs text-zinc-800 italic">{exp.description}</p>
                      
                      <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-zinc-700">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right side (4 cols) */}
            <div className="md:col-span-4 space-y-6 border-t md:border-t-0 md:border-l border-zinc-200 pt-6 md:pt-0 md:pl-6">
              
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Education
                </h3>
                <div className="text-xs">
                  <p className="font-bold text-zinc-900">B.A. in Broadcasting</p>
                  <p className="text-zinc-600 mt-0.5">Islamic Azad University of Tehran</p>
                  <p className="text-zinc-500 font-mono mt-0.5 text-[10px]">Tehran, Iran</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Copywriting Skills
                </h3>
                <div className="flex flex-wrap gap-1">
                  {PERSONAL_INFO.skills.copywriting.map((skill, idx) => (
                    <span key={idx} className="text-[10px] bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-mono border border-zinc-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Cinema &amp; Technical
                </h3>
                <div className="flex flex-wrap gap-1">
                  {PERSONAL_INFO.skills.cinema.map((skill, idx) => (
                    <span key={idx} className="text-[10px] bg-zinc-100 text-zinc-800 px-2 py-0.5 rounded font-mono border border-zinc-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-950 border-b border-zinc-300 pb-1.5">
                  Languages
                </h3>
                <div className="text-xs space-y-1">
                  <p className="text-zinc-800 font-medium">English &bull; <span className="text-zinc-500">Fluent</span></p>
                  <p className="text-zinc-800 font-medium">Persian &bull; <span className="text-zinc-500">Native</span></p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 text-[9px] text-zinc-400 font-mono leading-relaxed text-left">
                Ali Vilan Portfolio &copy; {new Date().getFullYear()} <br />
                Drafted for digital selection &amp; recruitment.
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
