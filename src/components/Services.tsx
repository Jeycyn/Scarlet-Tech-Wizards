"use client";
import { useState } from "react";

const coreServices = [
  {
    icon: "🛍",
    title: "E-Commerce Magic",
    focus: "Conversion Architecture",
    desc: "We don't just build stores; we engineer psychological checkout flows that transform passive browsers into brand disciples.",
    tech: "Stripe • Shopify Headless • Next.js",
    color: "#c9a84c",
  },
  {
    icon: "⬡",
    title: "Web App Potions",
    focus: "Logic Orchestration",
    desc: "Bespoke internal tools and SaaS dashboards designed to handle high-velocity data with absolute zero latency.",
    tech: "PostgreSQL • Real-time Sync • AWS",
    color: "#f5e0a0",
  },
  {
    icon: "♛",
    title: "Pro Portfolios",
    focus: "Legacy Branding",
    desc: "The digital equivalent of a tailored suit. We create interactive narratives that position you as the only logical choice.",
    tech: "Framer Motion • 3D Intros • SEO Max",
    color: "#c9a84c",
  },
  {
    icon: "◈",
    title: "Identity & Print",
    focus: "Physical Authority",
    desc: "Tangible brand assets. From high-GSM business cards to cinematic posters, your physical presence matches your digital aura.",
    tech: "Vector Precision • Print-Ready CMYK",
    color: "#f5e0a0",
  },
];

const hiddenRituals = [
  { title: "SEO Necromancy",        desc: "Reviving dead rankings through semantic clusters and high-authority link building." },
  { title: "Cyber Security Warding",desc: "Advanced penetration testing and SSL fortification for sensitive data." },
  { title: "Cloud Automation",      desc: "Infrastructure as code to automate your business scaling without human intervention." },
  { title: "AI Integration",        desc: "Custom LLM implementation to automate customer service and data synthesis." },
];

export default function Services() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <>
      <style>{`
        /* Card scan sweep on hover */
        @keyframes scanSweep {
          0%   { top: 0%;   opacity: 0.8; }
          100% { top: 100%; opacity: 0;   }
        }
        .service-card:hover .scan-line {
          animation: scanSweep 0.65s ease forwards;
        }

        /* Modal entrance */
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        .modal-in { animation: modalIn 0.35s ease forwards; }

        /* Gold shimmer on bottom border */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gold-shimmer {
          background: linear-gradient(90deg, transparent, #c9a84c, #f5e0a0, #c9a84c, transparent);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* Dot pulse */
        @keyframes dotPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }

        /* Circuit bg */
        .circuit-bg {
          background-image:
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      {/* ── GRIMOIRE MODAL ── */}
      {showFullMenu && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/97 backdrop-blur-xl p-4">
          <div className="modal-in relative bg-[#07090f] border border-[#c9a84c]/25 w-full max-w-4xl p-8 md:p-16 rounded-[3rem] max-h-[90vh] overflow-y-auto circuit-bg"
            style={{ boxShadow:"0 0 120px rgba(201,168,76,0.08)" }}>

            {/* HUD corners */}
            {[
              "top-5 left-5 border-l border-t",
              "top-5 right-14 border-r border-t",
              "bottom-5 left-5 border-l border-b",
              "bottom-5 right-5 border-r border-b",
            ].map((cls, i) => (
              <div key={i} className={`absolute w-5 h-5 border-[#c9a84c]/35 ${cls}`} />
            ))}

            <button
              onClick={() => setShowFullMenu(false)}
              className="absolute top-8 right-10 text-gray-500 hover:text-[#c9a84c] font-black text-[10px] tracking-[4px] uppercase transition-colors"
            >
              Dismiss [×]
            </button>

            {/* Title */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                  style={{ boxShadow:"0 0 6px #c9a84c", animation:"dotPulse 2s infinite" }} />
                <span className="text-[#c9a84c] text-[10px] font-black tracking-[5px] uppercase">
                  Advanced Capabilities
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                The Full{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#f5e0a0]">
                  Grimoire
                </span>
              </h3>
            </div>

            <p className="text-gray-500 text-sm mb-12 font-light">
              Specialized rituals available upon direct briefing.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {hiddenRituals.map((r, i) => (
                <div key={i}
                  className="group p-6 border border-[#c9a84c]/10 bg-[#c9a84c]/2 rounded-2xl hover:border-[#c9a84c]/35 hover:bg-[#c9a84c]/5 transition-all duration-400 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 gold-shimmer" />
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#c9a84c]"
                      style={{ boxShadow:"0 0 5px #c9a84c" }} />
                    <h5 className="text-white font-bold text-lg group-hover:text-[#c9a84c] transition-colors">
                      {r.title}
                    </h5>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t text-center" style={{ borderColor:"rgba(201,168,76,0.12)" }}>
              <p className="text-gray-400 text-sm italic mb-8">
                "Every project requires a unique blend of these ingredients."
              </p>
              <a href="mailto:jeffjeycyn@gmail.com"
                className="inline-block bg-[#c9a84c] text-black px-10 py-4 rounded-full font-black text-[10px] tracking-[4px] uppercase hover:bg-white transition-all"
                style={{ boxShadow:"0 0 30px rgba(201,168,76,0.3)" }}>
                Initiate Project
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── SECTION ── */}
      <section id="services" className="py-32 bg-[#050505] relative border-y overflow-hidden circuit-bg"
        style={{ borderColor:"rgba(201,168,76,0.06)" }}>

        {/* Watermark */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.025] pointer-events-none select-none">
          <h2 className="text-[180px] font-black leading-none uppercase tracking-tighter text-white">
            Capabilities
          </h2>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(ellipse,rgba(201,168,76,0.04) 0%,transparent 70%)", filter:"blur(60px)" }} />

        <div className="container mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c9a84c]/20 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                style={{ animation:"dotPulse 2s infinite", boxShadow:"0 0 4px #c9a84c" }} />
              <h6 className="text-[#c9a84c] font-black tracking-[6px] text-[10px] uppercase">
                Tactical Offerings
              </h6>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f5e0a0] to-[#c9a84c]">
                Wizardry.
              </span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-light text-lg">
              Our interventions are surgical. We deploy high-fidelity code to solve the most complex commercial frictions.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((s, i) => (
              <div key={i}
                className="service-card group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] transition-all duration-500 hover:bg-[#0d0d0d] overflow-hidden"
                style={{ "--hover-color": s.color } as React.CSSProperties}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.color}44`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 60px -15px ${s.color}33`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Scan sweep line */}
                <div className="scan-line absolute left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    top: 0,
                    background: `linear-gradient(90deg,transparent,${s.color},transparent)`,
                    opacity: 0,
                  }}
                />

                {/* Gold shimmer bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 gold-shimmer" />

                {/* Number watermark */}
                <span className="absolute top-8 right-10 font-black text-5xl transition-colors duration-500"
                  style={{ color:"rgba(255,255,255,0.04)" }}>
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-2xl border transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${s.color}11`,
                    borderColor: `${s.color}22`,
                    color: s.color,
                  }}>
                  {s.icon}
                </div>

                {/* Focus tag */}
                <p className="text-[9px] font-black tracking-[3px] uppercase mb-2"
                  style={{ color: s.color }}>
                  {s.focus}
                </p>

                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-10">{s.desc}</p>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-[9px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors uppercase tracking-wider">
                    {s.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Grimoire trigger */}
          <div className="mt-24 text-center">
            <p className="text-gray-600 text-[10px] font-bold tracking-[3px] uppercase">
              Custom enchantments available upon{" "}
              <span
                onClick={() => setShowFullMenu(true)}
                className="cursor-pointer ml-1 transition-colors pb-1"
                style={{
                  color: "#c9a84c",
                  borderBottom: "1px solid rgba(201,168,76,0.4)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#c9a84c")}
              >
                Direct Inquiry
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}