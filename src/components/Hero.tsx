"use client";
import { useState, useEffect } from "react";
import ParticlesBg from "@/components/ParticlesBg";

const BOOT_LINES = [
  "> SCARLET TECH WIZARDS // INITIALIZING...",
  "> Loading neural design matrix...",
  "> Calibrating digital alchemy engine...",
  "> Mounting sovereign artifact library...",
  "> All systems online. We build legends.",
];

const CYCLING_WORDS = [
  "SOVEREIGNTY.",
  "AUTHORITY.",
  "LEGACY.",
  "DOMINANCE.",
  "THE FUTURE.",
];

export default function Hero() {
  const [showArtifactsButton, setShowArtifactsButton] = useState(false);
  const [booted, setBooted] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // ── SCROLL LISTENER ──
  useEffect(() => {
    const fn = () => setShowArtifactsButton(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── BOOT SEQUENCE ──
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setBootLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(iv);
        setTimeout(() => setBooted(true), 500);
      }
    }, 300);
    return () => clearInterval(iv);
  }, []);

  // ── TYPEWRITER WORD CYCLE ──
  useEffect(() => {
    if (!booted) return;
    const word = CYCLING_WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((prev) => (prev + 1) % CYCLING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [booted, displayed, deleting, wordIdx]);

  return (
    <>
      <style>{`
        @keyframes bootLine  { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes cursor    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes orbitCW   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes orbitCCW  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes corePulse { 0%,100%{box-shadow:0 0 20px #c9a84c,0 0 50px rgba(201,168,76,0.3)} 50%{box-shadow:0 0 40px #c9a84c,0 0 90px rgba(201,168,76,0.5)} }
        @keyframes fadeInDown{ from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeInUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes zoomIn    { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }
        @keyframes progressBar { from{width:0%} to{width:100%} }

        .boot-line  { animation: bootLine 0.3s ease forwards; }
        .cursor-blink { animation: cursor 0.75s step-end infinite; }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
        .animate-fadeInUp   { animation: fadeInUp 1s ease 0.2s both; }
        .animate-zoomIn     { animation: zoomIn 1s ease both; }

        .hud-corner-tl { position:absolute; top:40px; left:40px; width:30px; height:30px; border-top:1.5px solid rgba(201,168,76,0.4); border-left:1.5px solid rgba(201,168,76,0.4); }
        .hud-corner-tr { position:absolute; top:40px; right:40px; width:30px; height:30px; border-top:1.5px solid rgba(201,168,76,0.4); border-right:1.5px solid rgba(201,168,76,0.4); }
        .hud-corner-bl { position:absolute; bottom:80px; left:40px; width:30px; height:30px; border-bottom:1.5px solid rgba(201,168,76,0.4); border-left:1.5px solid rgba(201,168,76,0.4); }
        .hud-corner-br { position:absolute; bottom:80px; right:40px; width:30px; height:30px; border-bottom:1.5px solid rgba(201,168,76,0.4); border-right:1.5px solid rgba(201,168,76,0.4); }
      `}</style>

      {/* ── BOOT SCREEN ── */}
      {!booted && (
        <div className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center p-8">
          {/* Phoenix emblem */}
          <div className="mb-8 relative">
            <svg viewBox="0 0 80 80" className="w-20 h-20 mx-auto mb-4"
              style={{ filter: "drop-shadow(0 0 16px #c9a84c)" }}>
              <defs>
                <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5e0a0" />
                  <stop offset="100%" stopColor="#c9a84c" />
                </linearGradient>
              </defs>
              <path d="M40 8C28 4 8 14 8 30c9-7 19-9 29-4C26 18 22 36 34 40c3-8 5-16 6-20z" fill="url(#pg)" />
              <path d="M40 8C52 4 72 14 72 30c-9-7-19-9-29-4C54 18 58 36 46 40c-3-8-5-16-6-20z" fill="#1a3a7a" />
              <ellipse cx="40" cy="50" rx="10" ry="13" fill="url(#pg)" />
              <circle cx="40" cy="22" r="8" fill="url(#pg)" />
              <path d="M32 64c-3 5-6 9-10 12 5-4 9-8 12-12z" fill="url(#pg)" opacity="0.8" />
              <path d="M40 66c0 5-1 9-1 13 1-5 2-9 2-13z" fill="url(#pg)" opacity="0.9" />
              <path d="M48 64c3 5 6 9 10 12-5-4-9-8-12-12z" fill="#1a3a7a" opacity="0.8" />
            </svg>
            <div style={{ fontFamily: "Orbitron,monospace", fontSize: 11, color: "#c9a84c", letterSpacing: 6, textAlign: "center" }}>
              SCARLET TECH WIZARDS
            </div>
          </div>

          {/* Boot log */}
          <div className="w-full max-w-md font-mono text-xs space-y-2 mb-6">
            {bootLines.map((line, i) => (
              <div key={i} className="boot-line" style={{ color: "rgba(201,168,76,0.7)" }}>
                {line}
              </div>
            ))}
            <span className="cursor-blink" style={{ color: "#c9a84c" }}>█</span>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-[2px] bg-[#c9a84c]/10 rounded overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#c9a84c] to-[#f5e0a0]"
              style={{
                width: `${(bootLines.length / BOOT_LINES.length) * 100}%`,
                transition: "width 0.3s ease",
                boxShadow: "0 0 8px #c9a84c",
              }}
            />
          </div>
          <div style={{ fontFamily: "Share Tech Mono,monospace", fontSize: 9, color: "rgba(201,168,76,0.3)", letterSpacing: 3, marginTop: 8 }}>
            {Math.round((bootLines.length / BOOT_LINES.length) * 100)}%
          </div>
        </div>
      )}

      {/* ── HERO SECTION ── */}
      <section className="relative flex items-center justify-start min-h-[130vh] py-24 bg-[#050505] overflow-hidden">

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/30 via-transparent to-[#050505] z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

        {/* Particles */}
        <div className="absolute inset-0 z-0">
          <ParticlesBg />
        </div>

        {/* HUD corners */}
        <div className="hud-corner-tl z-10" />
        <div className="hud-corner-tr z-10" />
        <div className="hud-corner-bl z-10" />
        <div className="hud-corner-br z-10" />

        {/* Horizontal HUD scan line */}
        <div className="absolute top-[38px] left-0 right-0 h-[1px] z-10"
          style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.2),transparent)" }} />

        {/* Arc reactor orb — right side background */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-0 hidden xl:block" style={{ opacity: 0.12 }}>
          <div className="relative w-72 h-72 flex items-center justify-center">
            {[{ s: 288, d: "4s", dir: "CW" },
            { s: 238, d: "7s", dir: "CCW" },
            { s: 190, d: "5s", dir: "CW" },
            { s: 142, d: "3s", dir: "CCW" }].map((r, i) => (
              <div key={i} className="absolute rounded-full border border-[#c9a84c]"
                style={{
                  width: r.s, height: r.s,
                  animation: `orbit${r.dir} ${r.d} linear infinite`,
                  opacity: 0.5 - i * 0.08,
                }}
              />
            ))}
            {/* Hex shape */}
            <div className="absolute w-20 h-20 border border-[#c9a84c]/60"
              style={{ transform: "rotate(30deg)", borderRadius: 4 }} />
            {/* Core */}
            <div className="w-12 h-12 rounded-full z-10"
              style={{
                background: "radial-gradient(circle at 35% 35%,#f5e0a0,#c9a84c 50%,#6b5520)",
                animation: "corePulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div className="z-10 text-left px-6 max-w-5xl md:ml-20">

          {/* Status ribbon */}
          <div className="flex justify-start mb-12 animate-fadeInDown">
            <div className="px-4 py-1.5 border border-[#c9a84c]/30 rounded-full bg-[#c9a84c]/5 backdrop-blur-md flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
              </span>
              <p className="text-[9px] font-black text-white uppercase tracking-[4px]">
                Available for Select Q2 2026 Partnerships
              </p>
            </div>
          </div>

          {/* Headline with typewriter */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white tracking-tighter animate-zoomIn">
            WE ARCHITECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f5e0a0] to-[#c9a84c] italic font-serif">
              {booted ? displayed : "SOVEREIGNTY."}
              <span className="cursor-blink not-italic" style={{ color: "#c9a84c" }}>|</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed animate-fadeInUp">
            At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we don't just weave webs.
            We engineer digital artifacts that command authority and work while you sleep.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4 justify-start animate-fadeInUp">
            <a href="/archives"
              className="px-8 py-5 border border-[#c9a84c]/40 bg-[#c9a84c]/8 text-[#c9a84c] font-black text-[10px] tracking-[4px] uppercase rounded-xl hover:bg-[#c9a84c] hover:text-black transition-all shadow-[0_0_24px_rgba(201,168,76,0.15)]">
              The Archives
            </a>
            <a href="/#services"
              className="px-8 py-5 border border-white/10 text-white font-black text-[10px] tracking-[4px] uppercase rounded-xl hover:bg-white hover:text-black transition-all">
              Our Spells
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 flex gap-12 animate-fadeInUp">
            {[["5+", "Council Members"], ["50+", "Artifacts Built"], ["100%", "Client Loyalty"]].map(([n, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: "Orbitron,monospace", fontSize: 22, color: "#c9a84c", fontWeight: 900,
                  textShadow: "0 0 12px rgba(201,168,76,0.4)"
                }}>{n}</div>
                <div className="text-[9px] text-gray-500 uppercase tracking-[2px] mt-1 font-mono">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <div className="w-[1px] h-24 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>

        {/* Floating artifacts btn */}
        <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 transform ${showArtifactsButton
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-20 opacity-0 scale-90 pointer-events-none"
          }`}>
          <a href="/archives"
            className="group relative flex items-center gap-4 bg-[#c9a84c] text-black p-2 pr-6 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-white transition-all"
            style={{ boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}>
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center text-[#c9a84c] group-hover:text-black group-hover:bg-[#c9a84c] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM208,192H48V64H208Z" />
              </svg>
            </div>
            View All Artifacts
          </a>
        </div>
      </section>
    </>
  );
}