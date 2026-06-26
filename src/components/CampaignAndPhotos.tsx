import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAMPAIGNS, PHOTOGRAPHY } from '../data';
import { Sparkles, Image as ImageIcon, Heart, ArrowRight, Eye, Layers } from 'lucide-react';

export default function CampaignAndPhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedPostcard, setSelectedPostcard] = useState<any | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'illustrations' | 'minimal'>('illustrations');
  const campaign = CAMPAIGNS[0];

  // Specific animal list for the postcard series with rich illustration assets and copywriter messages
  const postcards = [
    {
      name: 'Siberian Crane',
      farsi: 'درنای سیبری',
      color: 'bg-[#ECEFF1]',
      text: 'text-zinc-700',
      desc: 'A silent traveler through fragile wetlands, capturing the beauty of migration.',
      messageEn: 'Our skies grow emptier with each passing season. The Siberian Crane flies thousands of miles across continents, only to find its resting wetlands disappearing. Let our silence not become their final, fading horizon.',
      messageFa: 'آسمان ما با هر فصل خالی‌تر می‌شود. درنای سیبری هزاران کیلومتر پرواز می‌کند، تنها برای اینکه تالاب‌های آرامشش را در حال نابودی ببیند. نگذاریم سکوت ما آخرین افق آن‌ها باشد.',
      image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-slate-900/90 via-slate-800/40 to-slate-100/10'
    },
    {
      name: 'Asiatic Cheetah',
      farsi: 'یوزپلنگ آسیایی',
      color: 'bg-[#FFE0B2]',
      text: 'text-amber-900',
      desc: 'Running against time, the final survivors of the desert scrublands.',
      messageEn: 'A golden flash across the Iranian plateau, running a desperate race against time itself. Fewer than forty souls remain. Their legendary speed cannot outrun our collective negligence.',
      messageFa: 'برقی طلایی در پهنه فلات ایران، در حال دویدن در مسابقه‌ای علیه خود زمان. کمتر از چهل قلاده باقی مانده است. سرعت افسانه‌ای آن‌ها نمی‌تواند از غفلت جمعی ما پیشی بگیرد.',
      image: 'https://images.unsplash.com/photo-1602491453979-04da136539f9?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-amber-950/90 via-amber-900/40 to-amber-100/10'
    },
    {
      name: 'Asiatic Black Bear',
      farsi: 'خرس سیاه بلوچی',
      color: 'bg-[#CFD8DC]',
      text: 'text-slate-800',
      desc: 'The shadow of the Balochistan forests, holding the quiet density of nature.',
      messageEn: 'The quiet guardian of Baluchistan’s rocky heights. In the deep shadow of the mountains, they fade away in absolute silence, forgotten by the bustling valleys below.',
      messageFa: 'نگهبان آرام ارتفاعات صخره‌ای بلوچستان. در سایه عمیق کوه‌ها، آن‌ها در سکوت مطلق محو می‌شوند، فراموش‌شده توسط دره‌های پرهیاهوی پایین‌دست.',
      image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-blue-950/90 via-slate-900/40 to-slate-200/10'
    },
    {
      name: 'Pallas’s Cat',
      farsi: 'گربه پالاس',
      color: 'bg-[#E0E0E0]',
      text: 'text-zinc-700',
      desc: 'Stealth and cold endurance on the high altitudes of the Alborz range.',
      messageEn: 'Stealth and quiet endurance on the frozen slopes of the Alborz. A small, wild, fluffy soul surviving the harshest mountain winters, yet fragile to the touch of human expansion.',
      messageFa: 'پنهان‌کاری و پایداری در دامنه‌های یخ‌زده البرز. روحی کوچک، وحشی و پشمالو که سخت‌ترین زمستان‌های کوهستان را دوام می‌آورد، اما در برابر توسعه انسانی شکننده است.',
      image: 'https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-zinc-950/90 via-zinc-800/40 to-zinc-200/10'
    },
    {
      name: 'Maral Red Deer',
      farsi: 'مرال',
      color: 'bg-[#FFF9C4]',
      text: 'text-yellow-900',
      desc: 'The majestic crown of the Hyrcanian rain forests, crying for silence.',
      messageEn: 'The crowned king of the ancient, misty Hyrcanian rainforests. When the Maral cries in the morning mist, it is not just a call—it is an echo of a green empire in retreat.',
      messageFa: 'شاه تاج‌دار جنگل‌های باستانی و مه‌آلود هیرکانی. وقتی مرال در مه صبحگاهی فریاد می‌کشد، این فقط یک آوا نیست؛ بازتابی از یک امپراتوری سبز در حال عقب‌نشینی است.',
      image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-yellow-950/90 via-yellow-900/40 to-yellow-100/10'
    },
    {
      name: 'Caspian Dolphin',
      farsi: 'دلفین خزر',
      color: 'bg-[#E1F5FE]',
      text: 'text-sky-900',
      desc: 'Plunging through the deep blue silence, carrying the memory of waters.',
      messageEn: 'Plunging through the deep blue silence of northern waves, carrying the memory of an ancient landlocked sea. As the waters dry and choke, their playful leaps become desperate gasps.',
      messageFa: 'رقصان در میان امواج شمالی، حامل خاطره یک دریای بسته باستانی. با خشک شدن و آلودگی آب‌ها، جهش‌های بازیگوشانه آن‌ها به نفس‌های ناامیدانه بدل می‌شود.',
      image: 'https://images.unsplash.com/photo-1570481662006-a3a13746fe4e?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-sky-950/90 via-sky-900/40 to-sky-100/10'
    },
    {
      name: 'Persian Onager',
      farsi: 'گورخر ایرانی',
      color: 'bg-[#D7CCC8]',
      text: 'text-amber-950',
      desc: 'The golden dust of Semnan plain, running in search of a peaceful horizon.',
      messageEn: 'The golden dust of the arid plains. A wild, free gallop that has echoed through Persian poetry for centuries, now cornered into isolated pockets of precarious survival.',
      messageFa: 'غبار طلایی دشت‌های خشک و پهناور. تاختی وحشی و آزاد که قرن‌ها در شعر پارسی طنین‌انداز بوده، اکنون در گوشه‌هایی منزوی از بقایی شکننده به بند کشیده شده است.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa52?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-[#2D1B18]/90 via-[#4E362F]/40 to-amber-100/10'
    },
    {
      name: 'Caspian Tern',
      farsi: 'پرستوی دریایی خزر',
      color: 'bg-[#F5F5F5]',
      text: 'text-zinc-800',
      desc: 'An elegant white wing slicing the grey mist, bridging sky and sea.',
      messageEn: 'An elegant white wing slicing the quiet grey mist of the lagoons, bridging sky and sea. When their nesting shores are trampled, our skies lose their purest stroke of brush.',
      messageFa: 'بالی سفید و باوقار که مه خاکستری تالاب‌ها را می‌شکافد، پیونددهنده آسمان و دریا. وقتی سواحل آشیانه‌شان لگدمال می‌شود، آسمان خالص‌ترین ضربه قلم‌موی خود را از دست می‌دهد.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-zinc-900/90 via-zinc-700/40 to-zinc-100/10'
    },
    {
      name: 'Persian Leopard',
      farsi: 'پلنگ ایرانی',
      color: 'bg-[#FCE4EC]',
      text: 'text-pink-900',
      desc: 'Pride on the rocky cliffs of Zagros, reigning over the quiet heights.',
      messageEn: 'The sovereign of the rocky cliffs of Zagros. Reigning over the cold heights in supreme beauty, this magnificent predator now walks an increasingly lonely path toward a silent end.',
      messageFa: 'حاکم صخره‌های سرسخت زاگرس. پادشاهی بر ارتفاعات خاموش در زیبایی مطلق، این شکارچی باشکوه اکنون در مسیری بیش از پیش تنها به سمت پایانی بی‌صدا گام برمی‌دارد.',
      image: 'https://images.unsplash.com/photo-1615859131861-052f0641a60e?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-pink-950/90 via-pink-900/40 to-pink-100/10'
    },
    {
      name: 'Caracal Wild Cat',
      farsi: 'کاراکال',
      color: 'bg-[#F5F5DC]',
      text: 'text-amber-950',
      desc: 'The swift ear-tufted desert shadow, hunting in absolute stealth.',
      messageEn: 'The swift, ear-tufted shadow of the desert. Hunting in absolute stealth under the Persian stars, their survival is as elusive and delicate as their midnight gaze.',
      messageFa: 'سایه کویری تند و تیز با گوش‌های سیاه‌مو. شکار در پنهان‌کاری مطلق زیر ستاره‌های کویر؛ بقای آن‌ها به اندازه نگاه نیمه‌شبشان گریزان و ظریف است.',
      image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=600&q=80',
      overlayGrad: 'from-[#2E2E1A]/90 via-[#5E5D3E]/40 to-amber-100/10'
    }
  ];

  const handleOpenPostcard = (postcard: any) => {
    setSelectedPostcard(postcard);
    setIsFlipped(false);
  };

  return (
    <div className="space-y-20">
      
      {/* 1. ADVERTISING COPYWRITING CAMPAIGN (Extinction is Near) */}
      <div className="bg-[#1A1414] rounded-3xl border border-zinc-900/90 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-amber-950/10 rounded-full blur-[100px] pointer-events-none" />
        
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
            <div className="p-6 rounded-2xl bg-[#231C1C] border border-zinc-800/80 shadow-2xl relative w-full max-w-sm text-left">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 border-t border-zinc-900/60">
          
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
            <div className="p-6 rounded-2xl bg-[#231C1C]/40 border border-zinc-800/40">
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
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-left">
                    <span className="text-xl font-bold text-amber-400 font-display block">0{idx + 1}</span>
                    <p className="text-xs text-zinc-300 mt-1 font-sans leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Postcards Illustrated Grid (Aesthetic presentation of the 10 postcards) */}
        <div className="mt-12 pt-10 border-t border-zinc-900/60 text-left relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-1">
                Interactive Card Exhibit
              </h4>
              <h5 className="text-lg font-bold text-white">
                The 10 Postcard Concepts
              </h5>
            </div>

            {/* Toggle View Mode Button Group */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950/80 border border-zinc-800/60 text-xs font-mono text-zinc-400">
              <button
                onClick={() => setViewMode('illustrations')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'illustrations' ? 'bg-[#291B1B] text-amber-400 font-bold' : 'hover:text-zinc-200'}`}
              >
                Illustrated Previews
              </button>
              <button
                onClick={() => setViewMode('minimal')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${viewMode === 'minimal' ? 'bg-[#291B1B] text-amber-400 font-bold' : 'hover:text-zinc-200'}`}
              >
                Minimal Cards
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {postcards.map((post, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredCard(post.name)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleOpenPostcard(post)}
                className={`relative p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between aspect-[3/4] border border-white/5 shadow-lg cursor-pointer hover:-translate-y-1.5 overflow-hidden group/card bg-zinc-950 ${viewMode === 'minimal' ? post.color : ''}`}
              >
                
                {/* 1. Illustration Mode Background */}
                {viewMode === 'illustrations' && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={post.image} 
                      alt={post.name}
                      className="w-full h-full object-cover brightness-[0.7] group-hover/card:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Color overlay matching the card theme to tint the background illustration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90 z-10" />
                    <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${post.color} z-10`} />
                  </div>
                )}

                {/* Persian Overlay text for background texture - FIXED RTL SHAPING */}
                <span 
                  dir="rtl" 
                  lang="fa" 
                  className={`absolute -top-4 -right-4 font-bold text-5xl font-serif select-none pointer-events-none transition-colors duration-300 z-10 ${viewMode === 'minimal' ? 'text-zinc-900/[0.06]' : 'text-white/[0.03]'}`}
                >
                  انقراض
                </span>

                <div className="flex justify-between items-start relative z-20">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${viewMode === 'minimal' ? 'bg-zinc-950/10 text-zinc-700' : 'bg-white/15 text-zinc-100 backdrop-blur-sm'}`}>
                    0{idx + 1}
                  </span>
                  <Heart className={`w-3.5 h-3.5 transition-all ${viewMode === 'minimal' ? 'text-zinc-400 hover:text-red-500' : 'text-zinc-300 hover:text-red-400'}`} />
                </div>

                <div className="space-y-1 text-left mt-auto relative z-20">
                  <span className="text-[10px] font-mono tracking-widest uppercase block text-red-600 font-bold">
                    انقراض نزدیک است
                  </span>
                  <h6 className={`text-base font-bold leading-tight ${viewMode === 'minimal' ? post.text : 'text-white font-display'}`}>
                    {post.name}
                  </h6>
                  <p className={`text-xs font-serif font-medium italic ${viewMode === 'minimal' ? 'text-zinc-700' : 'text-amber-400/90'}`}>
                    {post.farsi}
                  </p>
                </div>

                {/* Hover Quick View overlay indicator */}
                <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20">
                  <span className="text-[10px] font-mono bg-amber-400 text-zinc-950 px-2.5 py-1 rounded-full font-bold shadow-md tracking-wider flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    FLIP &amp; PREVIEW
                  </span>
                </div>

                {/* Hover Details Panel (Minimal State info) */}
                <AnimatePresence>
                  {hoveredCard === post.name && viewMode === 'minimal' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-zinc-950/95 p-5 flex flex-col justify-center text-left backdrop-blur-sm z-30"
                    >
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Concept copy</span>
                      <h6 className="text-sm font-bold text-white font-display">{post.name}</h6>
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

      {/* Interactive Double-Sided Postcard 3D Preview Modal */}
      <AnimatePresence>
        {selectedPostcard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-zinc-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPostcard(null)} />
            
            <div className="relative w-full max-w-2xl bg-[#0F0D0D] border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-center space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <div className="text-left">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">Interactive Exhibition</span>
                  <h4 className="text-lg font-bold text-white font-display">Postcard {selectedPostcard.name}</h4>
                </div>
                <button 
                  onClick={() => setSelectedPostcard(null)}
                  className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Interactive 3D Card Container */}
              <div className="w-full h-[400px] sm:h-[340px] [perspective:1200px] my-6">
                <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  {/* FRONT SIDE (High Fidelity Postcard Artwork Preview) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl bg-zinc-950 p-6 border-4 border-zinc-800 shadow-2xl flex flex-col justify-between text-white overflow-hidden text-left">
                    {/* Full graphic image background */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={selectedPostcard.image} 
                        alt={selectedPostcard.name} 
                        className="w-full h-full object-cover filter brightness-[0.75] contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-95" />
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-[11px] font-mono bg-black/50 text-amber-400 px-3 py-1 rounded-full border border-zinc-800 backdrop-blur-md">
                        POSTCARD SERIES
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400 font-bold">
                        CW-{selectedPostcard.name.replace(/[^a-zA-Z]/g, '').substring(0, 3).toUpperCase()}
                      </span>
                    </div>

                    <div className="space-y-2 relative z-10">
                      <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-widest block">
                        انقراض نزدیک است &bull; EXTINCTION IS NEAR
                      </span>
                      <h3 className="text-3xl font-bold font-display tracking-tight text-white">{selectedPostcard.name}</h3>
                      <p className="text-sm font-serif italic text-amber-400">{selectedPostcard.farsi}</p>
                    </div>
                  </div>

                  {/* BACK SIDE (Vintage Postcard Paper layout with copywriter notes) */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-[#F6F2EB] p-5 sm:p-6 border-2 border-[#DFD8CC] shadow-2xl text-zinc-800 flex flex-col justify-between overflow-hidden text-left font-sans">
                    
                    {/* Vintage Header */}
                    <div className="flex justify-between items-start">
                      <div className="border-b border-zinc-400 pb-1 w-2/3">
                        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase block font-semibold">POSTCARD / کارت پستال</span>
                        <span className="text-[10px] text-zinc-400 font-mono italic">Campaign: Extinction is Near</span>
                      </div>
                      
                      {/* Vintage stamp area with actual miniature of animal */}
                      <div className="w-16 h-20 border-2 border-dashed border-zinc-400 p-1 flex flex-col justify-between bg-[#FCFAF6] shadow-sm relative">
                        <img 
                          src={selectedPostcard.image} 
                          alt="stamp artwork" 
                          className="w-full h-12 object-cover grayscale brightness-95 rounded-sm"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[7px] font-mono text-zinc-500 text-center uppercase block mt-1">Tehran Post</span>
                        
                        {/* Postmark cancellation stamp overlap */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 border border-zinc-400/40 rounded-full flex items-center justify-center text-[7px] font-mono text-zinc-400/80 uppercase rotate-12 bg-transparent pointer-events-none">
                          <span className="text-center p-0.5 leading-none block">Tehran<br/>Post Office</span>
                        </div>
                      </div>
                    </div>

                    {/* Postcard Body: Message on Left, Address Lines on Right */}
                    <div className="grid grid-cols-12 gap-4 flex-grow my-4 overflow-hidden">
                      {/* Left: Copywriter Message */}
                      <div className="col-span-7 border-r border-zinc-300 pr-3 flex flex-col justify-between h-full overflow-y-auto">
                        <div className="space-y-2">
                          <p className="text-[11px] leading-relaxed font-sans text-zinc-800 font-medium font-serif italic">
                            &quot;{selectedPostcard.messageEn}&quot;
                          </p>
                          <p dir="rtl" className="text-[11px] leading-relaxed font-sans text-zinc-700 text-right font-serif">
                            {selectedPostcard.messageFa}
                          </p>
                        </div>
                        <div className="mt-2 text-right pt-2">
                          <p className="text-[10px] font-mono text-zinc-400 italic">Created by</p>
                          <p className="text-[11px] font-bold text-zinc-800 font-mono tracking-wide">Ali Vilan</p>
                        </div>
                      </div>

                      {/* Right: Traditional address block */}
                      <div className="col-span-5 flex flex-col justify-center pl-1 space-y-4">
                        <div className="space-y-3.5">
                          <div className="border-b border-zinc-400 text-[11px] text-zinc-600 font-mono pb-0.5">
                            To: <span className="font-sans font-semibold text-zinc-800">Friends of Wildlife</span>
                          </div>
                          <div className="border-b border-zinc-400 text-[11px] text-zinc-600 font-mono pb-0.5">
                            Address: <span className="font-sans font-semibold text-zinc-800">Tehran, Iran</span>
                          </div>
                          <div className="border-b border-zinc-400 text-[11px] text-zinc-600 font-mono pb-0.5">
                            Postal: <span className="font-sans font-semibold text-zinc-800">Planet Earth</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Postcard Footer note */}
                    <div className="text-[8px] font-mono text-zinc-400 flex justify-between pt-1 border-t border-zinc-200">
                      <span>Exhibition No: 04/10 &bull; Persian Wildlife Conservation</span>
                      <span>AliVilan@icloud.com</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-sans">
                  {isFlipped ? 'Reading the handwritten copywriting side' : 'Viewing the illustrated artwork side'}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase font-bold bg-[#291B1B] text-amber-400 border border-amber-900/40 hover:bg-[#3D2626] transition-colors cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Flip Postcard
                  </button>
                  <button
                    onClick={() => setSelectedPostcard(null)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase font-bold bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
