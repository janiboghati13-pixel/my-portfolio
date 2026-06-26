import { useState, FormEvent } from 'react';
import { Mail, Send, Phone, MapPin, Copy, Check, SendHorizontal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', company: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#120D0D] to-[#0A0707] relative overflow-hidden">
      {/* Visual lighting */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201515] text-amber-500 text-xs font-mono border border-amber-900/25">
                LET&apos;S TALK PROJECTS
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-3">
                For Projects &amp; Collaboration
              </h3>
              <p className="text-zinc-400 text-sm font-sans mt-2 leading-relaxed">
                Recruiters and art directors: I am actively seeking creative roles in copywriting, visual storytelling, brand conceptualizing, and content direction. Let&apos;s build memorable campaigns together.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Copier widget */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900/90 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 border border-amber-400/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">PRIMARY EMAIL</span>
                    <span className="text-sm font-mono text-zinc-200 truncate block">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <button 
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 flex items-center gap-1.5 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Telegram */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900/90 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-sky-400/10 flex items-center justify-center text-sky-400 border border-sky-400/20 shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">TELEGRAM CONTACT</span>
                  <a 
                    href={`https://t.me/${PERSONAL_INFO.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono text-zinc-200 hover:text-sky-300 transition-colors block mt-0.5"
                  >
                    {PERSONAL_INFO.telegram}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900/90 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-red-400/10 flex items-center justify-center text-red-400 border border-red-400/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">DIRECT PHONE</span>
                  <span className="text-sm font-mono text-zinc-200 block mt-0.5">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900/90 flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 border border-emerald-400/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">BASE LOCATION</span>
                  <span className="text-sm font-mono text-zinc-200 block mt-0.5">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form mockup (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 shadow-2xl relative text-left">
              <h4 className="text-lg font-bold text-white mb-6">Send a Quick Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Company / Agency</label>
                    <input 
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Agency Inc."
                      className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@agency.com"
                    className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Your Proposal / Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your writing, screenwriting, or film direction proposal..."
                    className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 font-semibold tracking-wide shadow-lg shadow-amber-950/30 transition-all duration-300 cursor-pointer"
                >
                  {isSent ? 'Message Sent Successfully!' : 'Send Message Now'}
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
