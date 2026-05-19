"use client";
import { useEffect, useRef, useState } from "react";

// ── Animated counter hook ──
function useCountUp(target: number, duration = 2000, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      current += step;
      if (current >= target) { setVal(target); clearInterval(iv); }
      else setVal(Math.floor(current));
    }, 16);
    return () => clearInterval(iv);
  }, [started, target, duration]);
  return val;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger counters when card scrolls into view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const c1 = useCountUp(100, 1800, visible);
  const c2 = useCountUp(24, 1400, visible);

  return (
    <>
      <style>{`
        /* Animated gold border on oath card */
        @keyframes goldSpin {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
        .gold-border-wrap {
          background: linear-gradient(120deg, #c9a84c, #f5e0a0, #6b5520, #c9a84c);
          background-size: 300% 300%;
          animation: goldSpin 5s ease infinite;
          padding: 1.5px;
          border-radius: 3rem;
        }

        /* Pillar icon hover glow */
        .pillar-icon { transition: box-shadow 0.4s ease, border-color 0.4s ease; }
        .pillar-icon:hover { box-shadow: 0 0 20px rgba(201,168,76,0.35); }

        /* Slide-in animations */
        @keyframes slideLeft  { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }
        .slide-left  { animation: slideLeft  0.9s ease forwards; }
        .slide-right { animation: slideRight 0.9s ease 0.15s forwards; opacity:0; }

        /* Circuit dot pulse */
        @keyframes dotPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
      `}</style>

      <section id="about" className="py-32 relative bg-[#050505] overflow-hidden">

        {/* Ambient glows — gold instead of red */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a84c]/6 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1a3a7a]/8 blur-[120px] rounded-full -z-10" />

        {/* Subtle grid */}
        <div className="absolute inset-0 -z-10 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.025) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* ── LEFT: PHILOSOPHY ── */}
            <div className="slide-left">

              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                  style={{ boxShadow: "0 0 6px #c9a84c", animation: "dotPulse 2s ease infinite" }} />
                <h6 className="text-[#c9a84c] text-[10px] font-black tracking-[5px] uppercase">
                  The Alchemy of Code
                </h6>
              </div>

              {/* Headline */}
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                Elite Solutions for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f5e0a0] to-[#c9a84c]">
                  Modern Sovereign.
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-xl leading-relaxed mb-10 font-light max-w-xl">
                At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we view digital
                architecture as high-art. We don't just deploy scripts; we transform raw business
                requirements into{" "}
                <span className="text-[#c9a84c] italic font-medium">Digital Gold</span>{" "}
                through precision engineering.
              </p>

              {/* Core pillars */}
              <div className="grid sm:grid-cols-2 gap-10 mb-12">
                {[
                  {
                    icon: "⬡",
                    color: "#c9a84c",
                    bg: "rgba(201,168,76,0.08)",
                    border: "rgba(201,168,76,0.2)",
                    title: "Boundary Tech",
                    desc: "Leveraging Next.js and Cloud-Native ecosystems to ensure your platform is built for absolute speed and infinite scale.",
                  },
                  {
                    icon: "◈",
                    color: "#f5e0a0",
                    bg: "rgba(245,224,160,0.06)",
                    border: "rgba(245,224,160,0.15)",
                    title: "Unique Identity",
                    desc: "We reject the mediocrity of templates. Every pixel is hand-crafted to reflect the singular DNA of your brand.",
                  },
                ].map((p) => (
                  <div key={p.title} className="group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="pillar-icon w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-500 group-hover:scale-110"
                        style={{ background: p.bg, borderColor: p.border, color: p.color }}>
                        {p.icon}
                      </div>
                      <h6 className="font-bold text-white tracking-widest text-sm uppercase">{p.title}</h6>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <a href="#services"
                className="inline-flex items-center gap-4 text-white font-black text-[10px] tracking-[4px] uppercase group">
                Explore our methodology
                <span className="w-12 h-[1px] bg-[#c9a84c] group-hover:w-24 transition-all duration-500"
                  style={{ boxShadow: "0 0 6px rgba(201,168,76,0.5)" }} />
              </a>
            </div>

            {/* ── RIGHT: OATH CARD ── */}
            <div ref={ref} className="relative slide-right">

              {/* Animated gold border wrapper */}
              <div className="gold-border-wrap">
                <div className="relative bg-[#07090f] backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 overflow-hidden group">

                  {/* Internal glow — gold */}
                  <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#c9a84c]/12 blur-3xl rounded-full group-hover:bg-[#c9a84c]/25 transition-all duration-700" />

                  {/* Circuit dots decoration */}
                  {[
                    { top: "12%", right: "8%" },
                    { top: "26%", right: "14%" },
                    { top: "40%", right: "10%" },
                    { top: "54%", right: "16%" },
                    { top: "68%", right: "8%" },
                    { top: "20%", right: "22%" },
                  ].map((pos, i) => (
                    <div key={i}
                      className="absolute w-1 h-1 rounded-full bg-[#c9a84c]"
                      style={{
                        ...pos,
                        opacity: 0.35,
                        boxShadow: "0 0 4px #c9a84c",
                        animation: `dotPulse ${1.5 + i * 0.3}s ease infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}

                  {/* Circuit connecting lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
                    <line x1="90%" y1="12%" x2="86%" y2="26%" stroke="#c9a84c" strokeWidth="0.5" />
                    <line x1="86%" y1="26%" x2="90%" y2="40%" stroke="#c9a84c" strokeWidth="0.5" />
                    <line x1="90%" y1="40%" x2="84%" y2="54%" stroke="#c9a84c" strokeWidth="0.5" />
                  </svg>

                  <div className="relative z-10">
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-6 h-[1px]" style={{ background: "#c9a84c" }} />
                      <h4 className="font-black text-[#c9a84c] text-[10px] tracking-[6px] uppercase">
                        The Wizard's Oath
                      </h4>
                      <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(90deg,#c9a84c,transparent)" }} />
                    </div>

                    {/* Quote */}
                    <p className="text-3xl md:text-4xl text-gray-200 font-serif italic leading-[1.4] mb-12">
                      "To provide premium digital artifacts that don't just exist on the web, but{" "}
                      <span className="text-white font-bold not-italic">dominate</span> it. From Kenya to
                      the global stage, we bridge the gap between imagination and execution."
                    </p>

                    {/* Metric strip — animated counters */}
                    <div className="grid grid-cols-3 gap-6 border-t pt-10"
                      style={{ borderColor: "rgba(201,168,76,0.15)" }}>
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-white"
                          style={{ fontFamily: "Orbitron,monospace", textShadow: "0 0 10px rgba(201,168,76,0.3)" }}>
                          {c1}%
                        </h3>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Fortified</p>
                      </div>
                      <div className="text-center border-x" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                        <h3 className="text-2xl font-black text-[#c9a84c]"
                          style={{ fontFamily: "Orbitron,monospace", textShadow: "0 0 10px rgba(201,168,76,0.4)" }}>
                          {c2}/7
                        </h3>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Vigilance</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-white"
                          style={{ fontFamily: "Orbitron,monospace" }}>
                          KE→🌍
                        </h3>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">Footprint</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outer decorative frame */}
              <div className="absolute -inset-5 rounded-[3.5rem] -z-10 pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.06)" }} />

              {/* Corner accents on card */}
              <div className="absolute top-2 left-2 w-5 h-5 border-l border-t border-[#c9a84c]/30 rounded-tl-2xl -z-0" />
              <div className="absolute top-2 right-2 w-5 h-5 border-r border-t border-[#c9a84c]/30 rounded-tr-2xl -z-0" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-l border-b border-[#c9a84c]/30 rounded-bl-2xl -z-0" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-r border-b border-[#c9a84c]/30 rounded-br-2xl -z-0" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}