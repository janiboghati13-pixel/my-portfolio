import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAMPAIGNS, PHOTOGRAPHY } from '../data';
import { Sparkles, Image as ImageIcon, Heart, ArrowRight, Eye, Layers } from 'lucide-react';

export default function CampaignAndPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const campaign = CAMPAIGNS[0];

  // Specific animal list for the postcard series
  const postcards = [
    { name: 'Siberian Crane', farsi: 'دنای مهاجر', color: 'bg-[#ECEFF1]', text: 'text-zinc-600', desc: 'A silent traveler through fragile wetlands, capturing the beauty of migration.' },
    { name: 'Asiatic Cheetah', farsi: 'یوزپلنگ آسیایی', color: 'bg-[#FFE0B2]', text: 'text-amber-800', desc: 'Running against time, the final survivors of the desert scrublands.' },
    { name: 'Asiatic Black Bear', farsi: 'خرس سیاه بلوچی', color: 'bg-[#CFD8DC]', text: 'text-slate-800', desc: 'The shadow of the Balochistan forests, holding the quiet density of nature.' },
    { name: 'Pallas’s Cat', farsi: 'گربه پالاس', color: 'bg-[#E0E0E0]', text: 'text-zinc-700', desc: 'Stealth and cold endurance on the high altitudes of the Alborz range.' },
    { name: 'Maral Red Deer', farsi: 'مرال', color: 'bg-[#FFF9C4]', text: 'text-yellow-800', desc: 'The majestic crown of the Hyrcanian rain forests, crying for silence.' },
    { name: 'Caspian Dolphin', farsi: 'دلفین خزر', color: 'bg-[#E1F5FE]', text: 'text-sky-800', desc: 'Plunging through the deep blue silence, carrying the memory of waters.' },
    { name: 'Persian Onager', farsi: 'گورخر ایرانی', color: 'bg-[#D7CCC8]', text: 'text-amber-900', desc: 'The golden dust of Semnan plain, running in search of a peaceful horizon.' },
    { name: 'Caspian Tern', farsi: 'مرغابی خزر', color: 'bg-[#F5F5F5]', text: 'text-zinc-800', desc: 'An elegant white wing slicing the grey mist, bridging sky and sea.' },
    { name: 'Persian Leopard', farsi: 'پلنگ ایرانی', color: 'bg-[#FCE4EC]', text: 'text-pink-800', desc: 'Pride on the rocky cliffs of Zagros, reigning over the quiet heights.' },
    { name: 'Caracal Wild Cat', farsi: 'کاراکال', color: 'bg-[#F5F5DC]', text: 'text-amber-900', desc: 'The swift ear-tufted desert shadow, hunting in absolute stealth.' }
  ];

  return (
    <div className="space-y-20">
      
      {/* 1. ADVERTISING COPYWRITING CAMPAIGN (Extinction is Near) */}
      <div className="bg-zinc-950/60 rounded-3xl border border-zinc-900 p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-950/20 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              FEATURED CAMPAIGN STORY (COPYWRITING &amp; CONCEPT)
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              &ldquo;{campaign.title}&rdquo; <span className="text-zinc-500 font-sans font-light">({campaign.subtitle})</span>
            </h3>
            <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">
              Role: {campaign.role} &bull; Illustrator: {campaign.illustrator}
            </p>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
              {campaign.concept}
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="p-6 rounded-2xl bg-[#1A1E24] border border-zinc-800/80 shadow-2xl relative w-full max-w-sm text-left">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Illustrative Visual Theme</span>
              <h4 className="text-base font-semibold text-zinc-200 mt-1 mb-2">Species Postcard Series</h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                By designing 10 minimalist illustrated postcards representing critically endangered species in Iran, we turned complex wildlife data into collectible, emotionally moving art.
              </p>
              <div className="mt-4 p-3.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono text-amber-400">
                &ldquo; انقراض نزدیک است... &rdquo; <br />
                <span className="text-zinc-400 text-[10px]">(&quot;Extinction is near, let our silence not seal their fate.&quot;)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Display of Generated Postcards Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 border-t border-zinc-900">
          
          {/* Postcard Presentation Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
              <img 
                src={campaign.images[0]} 
                alt="Extinction is Near Postcards display" 
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="bg-zinc-950/80 text-amber-300 text-[10px] font-mono px-2 py-1 rounded border border-zinc-800">
                  Actual Campaign Postcards Exhibit
                </span>
              </div>
            </div>
          </div>

          {/* Copywriting Highlight Section (7 cols) - STRICT REQUIREMENT: BOLD & FRONT */}
          <div className="lg:col-span-7 space-y-5 text-left lg:pl-4">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/50">
              <h4 className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold mb-3">
                Highlighted Copywriting Sample
              </h4>
              <blockquote className="text-sm sm:text-base text-white font-serif italic leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
                {campaign.copywritingSample}
              </blockquote>
            </div>

            <div className="space-y-3.5">
              <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">Campaign Metrics &amp; Impact</h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {campaign.results?.map((result, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 text-left">
                    <span className="text-xl font-bold text-amber-400 font-display block">0{idx + 1}</span>
                    <p className="text-xs text-zinc-300 mt-1 font-sans leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Postcards Illustrated Grid (Aesthetic presentation of the 10 postcards) */}
        <div className="mt-12 pt-10 border-t border-zinc-900 text-left">
          <div className="mb-6">
            <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-1">
              Interactive Card Exhibit
            </h4>
            <h5 className="text-lg font-bold text-white">
              The 10 Postcard Concepts
            </h5>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {postcards.map((post, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredCard(post.name)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-5 rounded-2xl ${post.color} transition-all duration-300 flex flex-col justify-between aspect-[3/4] border border-white/10 shadow-lg cursor-pointer hover:-translate-y-1.5 overflow-hidden`}
              >
                {/* Persian Overlay text for background texture */}
                <span className="absolute -top-4 -right-4 text-zinc-900/10 font-bold text-5xl font-serif select-none pointer-events-none">
                  انقراض
                </span>

                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono bg-zinc-950/10 text-zinc-700 px-2 py-0.5 rounded-full font-bold">
                    0{idx + 1}
                  </span>
                  <Heart className="w-3.5 h-3.5 text-zinc-400 hover:text-red-500 transition-colors" />
                </div>

                <div className="space-y-1 text-left mt-auto">
                  <span className="text-[10px] font-mono tracking-widest uppercase block text-red-700 font-bold">
                    انقراض نزدیک است
                  </span>
                  <h6 className={`text-base font-bold leading-tight ${post.text}`}>
                    {post.name}
                  </h6>
                  <p className="text-xs font-serif text-zinc-700 font-medium italic">
                    {post.farsi}
                  </p>
                </div>

                {/* Hover Details Panel */}
                <AnimatePresence>
                  {hoveredCard === post.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-zinc-950/95 p-4 flex flex-col justify-center text-left backdrop-blur-sm"
                    >
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Concept copy</span>
                      <h6 className="text-sm font-bold text-white">{post.name}</h6>
                      <p className="text-[11px] text-zinc-300 leading-relaxed mt-2 font-sans">
                        {post.desc}
                      </p>
                      <span className="text-[10px] font-mono text-zinc-500 mt-4">Illustration &bull; Postcard CW0{idx+1}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* 2. FINE ART PHOTOGRAPHY & STILL FRAMES (Pictures Section) */}
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A251E] text-emerald-400 text-xs font-mono border border-emerald-900/20">
            <Layers className="w-3.5 h-3.5" />
            VISUAL PHOTOGRAPHY JOURNEY &amp; CINEMATIC STILLS
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mt-3">
            Through Fine Art, Capturing Fleeting Moments
          </h3>
          <p className="text-zinc-400 text-sm font-sans mt-2 max-w-2xl leading-relaxed">
            A selection of professional film stills, conceptual fine-art exposures, and documentary photographs taken in Northern Iran and urban Tehran, reflecting themes of humanity, power, and silence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTOGRAPHY.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ y: -6 }}
              className="group bg-zinc-900/30 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setSelectedPhoto(photo.imageUrl)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                <img 
                  src={photo.imageUrl} 
                  alt={photo.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-zinc-950/80 text-zinc-300 text-[10px] font-mono px-2.5 py-1 rounded-full border border-zinc-800 backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/25 border border-white/45 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-4 text-left">
                <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  {photo.title}
                </h4>
                {photo.description && (
                  <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                    {photo.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-zinc-950/95 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            >
              <img 
                src={selectedPhoto} 
                alt="Selected expanded photograph" 
                className="w-full h-auto max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-zinc-950 text-center text-xs text-zinc-400 font-mono">
                Ali Vilan &copy; Visual Photography &amp; Cinematography Still &bull; Click anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
