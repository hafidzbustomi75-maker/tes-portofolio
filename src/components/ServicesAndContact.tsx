import React, { useEffect, useState } from 'react';
import { Check, Copy, Send } from 'lucide-react';
import { CONTACT_INFO, SERVICE_MODES } from '../data/portfolioData';

interface ServicesAndContactProps {
  preselectedTopic: string | null;
  onClearTopic: () => void;
}

export const ServicesAndContact: React.FC<ServicesAndContactProps> = ({
  preselectedTopic,
  onClearTopic,
}) => {
  const [showComposer, setShowComposer] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Programming & Algorithm Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedTopic) {
      setTopic(preselectedTopic);
      setShowComposer(true);
      setSubmitted(false);
    }
  }, [preselectedTopic]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Ignore if clipboard unavailable
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic}`);
    const body = encodeURIComponent(
      message.trim()
        ? `From: ${senderName || 'Visitor'} (${senderEmail || 'N/A'})\n\n${message}`
        : `Hi Hafidz,\n\nI would like to connect regarding ${topic}.`
    );
    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* 6. COLLABORATION & SERVICES */}
      <section
        id="services"
        className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
      >
        <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
          • 05 / ENGAGEMENT MODES •
        </div>
        <h2 className="font-display text-[38px] sm:text-[52px] lg:text-[68px] font-bold text-white uppercase leading-none tracking-tight mb-12">
          HOW WE CAN WORK.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_MODES.map((mode) => (
            <div
              key={mode.modeLabel}
              className="bg-[#121418] border border-white/[0.12] p-8 flex flex-col justify-between hover:border-[#8ed5ff]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#9CA3AF] mb-6">
                  <span className="text-[#8ed5ff] font-bold">{mode.modeLabel}</span>
                  <span>{mode.location}</span>
                </div>
                <h3 className="font-display text-[22px] font-bold text-white mb-3">
                  {mode.title}
                </h3>
                <p className="font-sans text-[15px] leading-[24px] text-[#9CA3AF] mb-6">
                  {mode.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {mode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#16191F] border border-white/[0.08] text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setTopic(mode.title);
                    setShowComposer(true);
                    setSubmitted(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-5 py-3 bg-white/[0.03] text-[#F4F5F7] border border-white/[0.28] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all w-full sm:w-auto cursor-pointer whitespace-nowrap"
                >
                  {mode.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PEER ENDORSEMENT */}
      <section
        id="testimonial"
        className="w-full max-w-[1280px] mx-auto px-[6vw] py-[80px] border-t border-white/[0.12]"
      >
        <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-8">
          • 06 / PEER VERIFICATION •
        </div>

        <div className="bg-[#16191F] border border-white/[0.12] border-l-4 border-l-white p-8 sm:p-12 relative">
          <div className="sm:absolute sm:top-6 sm:right-8 font-mono text-[10px] text-[#5A6270] tracking-widest uppercase mb-4 sm:mb-0">
            VERIFIED PEER NOTE // ITPLN
          </div>
          <p className="font-display text-[20px] sm:text-[24px] text-white leading-relaxed mb-6 font-medium">
            “Hafidz is a dedicated and fast-learning Informatics student at ITPLN with strong enthusiasm for programming, problem solving, and collaborative projects.”
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#292a2c] border border-white/[0.15] flex items-center justify-center font-bold text-white text-sm shrink-0">
              AF
            </div>
            <div>
              <div className="font-display text-[16px] font-semibold text-white">
                Abi Farhan
              </div>
              <div className="font-mono text-[11px] text-[#9CA3AF]">
                Colleague · Institut Teknologi PLN (ITPLN)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section
        id="contact"
        className="w-full max-w-[1280px] mx-auto px-[6vw] py-[100px] border-t border-white/[0.12]"
      >
        <div className="font-mono text-[11px] leading-[16px] text-[#9CA3AF] tracking-[0.14em] uppercase mb-3.5">
          • 07 / ESTABLISH CONNECTION •
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-[42px] sm:text-[60px] lg:text-[72px] font-bold uppercase leading-none tracking-tight mb-6">
            <span className="block text-white">LET&apos;S BUILD</span>
            <span className="block text-[#9CA3AF]">SOMETHING PRECISE.</span>
          </h2>
          <p className="font-sans text-[18px] leading-[28px] text-[#c4c7ca]">
            Open for internship opportunities, study groups, Python &amp; AI automation discussions, or tech collaborations.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase font-bold tracking-[0.14em] px-6 py-4 bg-[#E5E7EB] text-[#0A0B0D] border border-[#E5E7EB] hover:bg-white hover:shadow-[0_0_24px_rgba(56,189,248,0.4)] transition-all whitespace-nowrap"
          >
            EMAIL // HAFIDZBUSTOMI75@GMAIL.COM ↗
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-5 py-4 bg-[#16191F] text-[#e3e2e5] border border-white/[0.16] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all cursor-pointer whitespace-nowrap"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>EMAIL COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY ADDRESS</span>
              </>
            )}
          </button>
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-6 py-4 bg-white/[0.03] text-[#F4F5F7] border border-white/[0.28] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all whitespace-nowrap"
          >
            LINKEDIN ↗
          </a>
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-6 py-4 bg-white/[0.03] text-[#F4F5F7] border border-white/[0.28] hover:border-[#8ed5ff] hover:text-[#8ed5ff] transition-all whitespace-nowrap"
          >
            INSTAGRAM // {CONTACT_INFO.instagramHandle} ↗
          </a>
          <button
            type="button"
            onClick={() => {
              setShowComposer((prev) => !prev);
              setSubmitted(false);
              if (preselectedTopic) onClearTopic();
            }}
            className="inline-flex items-center justify-center font-mono text-[11px] leading-[16px] uppercase tracking-[0.14em] px-5 py-4 bg-transparent text-[#8ed5ff] border border-[#8ed5ff]/40 hover:bg-[#8ed5ff]/10 transition-all cursor-pointer whitespace-nowrap"
          >
            {showComposer ? 'HIDE INQUIRY TERMINAL −' : 'OPEN INQUIRY TERMINAL +'}
          </button>
        </div>

        {/* Interactive Quick Inquiry Terminal */}
        {showComposer && (
          <div className="mt-8 bg-[#121418] border border-white/[0.14] p-6 sm:p-8 max-w-3xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <div className="font-mono text-[11px] text-[#8ed5ff] uppercase tracking-wider">
                // DIRECT DISPATCH BRIEF
              </div>
              <span className="font-mono text-[10px] text-[#6B7280] uppercase">
                TARGET: {CONTACT_INFO.email}
              </span>
            </div>

            {submitted ? (
              <div className="bg-[#0A0B0D] border border-emerald-400/40 p-6 space-y-4">
                <div className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider">
                  BRIEF READY FOR DISPATCH
                </div>
                <p className="font-sans text-[14px] text-[#e3e2e5] leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{senderName}</span>. Your message regarding <span className="text-[#8ed5ff]">{topic}</span> is formatted and ready to open in your email client.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase font-bold tracking-[0.12em] px-5 py-3 bg-[#E5E7EB] text-[#0A0B0D] hover:bg-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>OPEN IN EMAIL CLIENT →</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="font-mono text-[11px] uppercase tracking-[0.12em] px-4 py-3 border border-white/[0.16] text-[#9CA3AF] hover:text-white cursor-pointer"
                  >
                    COMPOSE ANOTHER
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-2"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Abi Farhan"
                      className="w-full bg-[#0A0B0D] border border-white/[0.15] px-4 py-3 font-sans text-[14px] text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-2"
                    >
                      RETURN EMAIL
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full bg-[#0A0B0D] border border-white/[0.15] px-4 py-3 font-sans text-[14px] text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-topic"
                    className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-2"
                  >
                    ENGAGEMENT TOPIC
                  </label>
                  <input
                    id="inquiry-topic"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#0A0B0D] border border-white/[0.15] px-4 py-3 font-sans text-[14px] text-white focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider mb-2"
                  >
                    PROJECT OR COLLABORATION BRIEF
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share scope, timeline, or collaboration details..."
                    className="w-full bg-[#0A0B0D] border border-white/[0.15] px-4 py-3 font-sans text-[14px] text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="font-mono text-[11px] text-[#6B7280]">
                    DISPATCHES DIRECTLY TO {CONTACT_INFO.email}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase font-bold tracking-[0.14em] px-6 py-3.5 bg-[#E5E7EB] text-[#0A0B0D] hover:bg-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>PREPARE DISPATCH →</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>
    </>
  );
};
