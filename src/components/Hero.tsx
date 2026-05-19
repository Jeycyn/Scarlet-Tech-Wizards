"use client";
import { useState, useEffect, useRef } from "react";
import ParticlesBg from "@/components/ParticlesBg";

const WORDS = ["SOVEREIGNTY.", "DIGITAL MAGIC.", "THE FUTURE.", "AUTHORITY.", "DOMINANCE."];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const [showArtBtn, setShowArtBtn] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [hudData, setHudData] = useState({ net: 94, perf: 99, phase: 78, deploy: 91 });

  // Scroll
  useEffect(() => {
    const fn = () => setShowArtBtn(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setWordIdx((p) => (p + 1) % WORDS.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIdx]);

  // Glitch
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 350);
    }, 4500 + Math.random() * 3000);
    return () => clearInterval(iv);
  }, []);

  // Live HUD data
  useEffect(() => {
    const iv = setInterval(() => {
      setHudData({
        net: Math.floor(88 + Math.random() * 10),
        perf: Math.floor(96 + Math.random() * 4),
        phase: Math.floor(70 + Math.random() * 20),
        deploy: Math.floor(85 + Math.random() * 12),
      });
    }, 1800);
    return () => clearInterval(iv);
  }, []);

  // Mouse
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  // Crystal canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d")!;
    const PHI = (1 + Math.sqrt(5)) / 2;

    const baseVerts: [number, number, number][] = [
      [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
      [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
      [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
    ];
    const norm = baseVerts.map(([x, y, z]) => {
      const l = Math.sqrt(x * x + y * y + z * z);
      return [x / l, y / l, z / l] as [number, number, number];
    });
    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    let time = 0;

    const project = (v: [number, number, number], rx: number, ry: number) => {
      let [x, y, z] = v;
      let ny = y * Math.cos(rx) - z * Math.sin(rx); let nz = y * Math.sin(rx) + z * Math.cos(rx); y = ny; z = nz;
      let nx = x * Math.cos(ry) + z * Math.sin(ry); nz = -x * Math.sin(ry) + z * Math.cos(ry); x = nx; z = nz;
      const W = canvas.width; const H = canvas.height;
      const fov = 3.5; const scale = (Math.min(W, H) * 0.34) * (fov / (fov + z));
      return { sx: W * 0.5 + x * scale, sy: H * 0.5 + y * scale, z };
    };

    const draw = () => {
      time += 0.011;
      const W = canvas.width; const H = canvas.height;
      const mx = mouseRef.current.x - 0.5;
      const my = mouseRef.current.y - 0.5;
      const rx = time * 0.28 + my * 0.9;
      const ry = time * 0.45 + mx * 1.3;

      ctx.clearRect(0, 0, W, H);

      const proj = norm.map(v => project(v, rx, ry));

      const sorted = faces
        .map(f => ({ f, z: (proj[f[0]].z + proj[f[1]].z + proj[f[2]].z) / 3 }))
        .sort((a, b) => a.z - b.z);

      sorted.forEach(({ f, z }, fi) => {
        const p0 = proj[f[0]]; const p1 = proj[f[1]]; const p2 = proj[f[2]];
        const brightness = (z + 1) / 2;
        const pulse = 0.5 + 0.5 * Math.sin(time * 2.2 + fi * 0.65);

        ctx.beginPath();
        ctx.moveTo(p0.sx, p0.sy); ctx.lineTo(p1.sx, p1.sy); ctx.lineTo(p2.sx, p2.sy);
        ctx.closePath();

        // Face fill
        const alpha = 0.06 + brightness * 0.16 + pulse * 0.05;
        const r = Math.floor(170 + brightness * 70);
        const g = Math.floor(50 + brightness * 90 + pulse * 50);
        const b = Math.floor(8 + brightness * 15);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();

        // Edges
        const ea = 0.12 + brightness * 0.45 + pulse * 0.18;
        ctx.strokeStyle = fi % 4 === 0 ? `rgba(201,168,76,${ea})` : `rgba(210,55,25,${ea * 0.6})`;
        ctx.lineWidth = 0.7 + brightness * 0.7;
        ctx.stroke();
      });

      // Glow rings
      [1.18, 1.3, 1.45].forEach((sc, i) => {
        const r = Math.min(W, H) * 0.34 * sc;
        const a = (0.07 - i * 0.02) * (0.6 + 0.4 * Math.sin(time + i * 1.2));
        ctx.beginPath();
        ctx.arc(W * 0.5, H * 0.5, r, 0, Math.PI * 2);
        ctx.strokeStyle = i === 0 ? `rgba(201,168,76,${a})` : `rgba(210,55,25,${a * 0.5})`;
        ctx.lineWidth = 0.8; ctx.stroke();
      });

      // Core glow
      const cg = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.min(W, H) * 0.18);
      cg.addColorStop(0, `rgba(201,168,76,${0.1 + 0.05 * Math.sin(time * 2)})`);
      cg.addColorStop(1, "rgba(201,168,76,0)");
      ctx.beginPath(); ctx.arc(W * 0.5, H * 0.5, Math.min(W, H) * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = cg; ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  const HUDPanel = ({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) => (
    <div className="hidden lg:block absolute z-20"
      style={{
        background: "rgba(4,7,16,0.88)", border: "1px solid rgba(201,168,76,0.28)",
        borderRadius: 8, padding: "12px 14px", backdropFilter: "blur(10px)",
        animation: "hudFloat ease-in-out infinite, hudIn 0.6s ease forwards",
        ...style,
      }}>
      {children}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes fadeInDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeInUp  {from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)}}
        @keyframes zoomIn    {from{opacity:0;transform:scale(0.95)}      to{opacity:1;transform:scale(1)}}
        @keyframes cursor    {0%,100%{opacity:1}50%{opacity:0}}
        @keyframes hudFloat  {0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes hudIn     {from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:translateX(0)}}
        @keyframes dotPulse  {0%,100%{opacity:0.3}50%{opacity:1}}
        @keyframes shimmer   {0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes orbitCW   {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes glitch{
          0%  {text-shadow:-3px 0 #c9a84c,3px 0 #dc1c1c;clip-path:inset(0 0 80% 0);transform:skewX(-4deg)}
          20% {clip-path:inset(20% 0 60% 0);transform:skewX(4deg)}
          40% {clip-path:inset(40% 0 40% 0);text-shadow:3px 0 #c9a84c,-3px 0 #dc1c1c}
          60% {clip-path:inset(60% 0 20% 0);transform:skewX(-2deg)}
          80% {clip-path:inset(80% 0 0 0);transform:skewX(0)}
          100%{clip-path:inset(0);text-shadow:none;transform:none}
        }
        .cursor-blink{animation:cursor 0.75s step-end infinite}
        .animate-fadeInDown{animation:fadeInDown 0.8s ease forwards}
        .animate-fadeInUp{animation:fadeInUp 1s ease 0.2s both}
        .animate-zoomIn{animation:zoomIn 1s ease both}
        .glitch-active{animation:glitch 0.35s steps(1) forwards}
        .gold-shimmer{
          background:linear-gradient(90deg,#c9a84c,#f5e0a0,#c9a84c,#f5e0a0);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 3s linear infinite;
        }
        .hc{position:absolute;border-color:rgba(201,168,76,0.4);border-style:solid}
        .hc-tl{top:18px;left:18px;width:26px;height:26px;border-width:1.5px 0 0 1.5px}
        .hc-tr{top:18px;right:18px;width:26px;height:26px;border-width:1.5px 1.5px 0 0}
        .hc-bl{bottom:60px;left:18px;width:26px;height:26px;border-width:0 0 1.5px 1.5px}
        .hc-br{bottom:60px;right:18px;width:26px;height:26px;border-width:0 1.5px 1.5px 0}
        .mono{font-family:'Share Tech Mono',monospace}
        .orb{font-family:'Orbitron',monospace}
      `}</style>

      <section className="relative flex items-center justify-start min-h-[100vh] bg-[#050505] overflow-hidden">

        <div className="absolute inset-0 z-0"><ParticlesBg /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/20 via-transparent to-[#050505] z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04] pointer-events-none z-0" />

        {/* HUD corners */}
        <div className="hc hc-tl z-20" /><div className="hc hc-tr z-20" />
        <div className="hc hc-bl z-20" /><div className="hc hc-br z-20" />
        <div className="absolute top-[17px] left-0 right-0 h-[1px] z-20"
          style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.2),transparent)" }} />

        {/* Crystal */}
        <canvas ref={canvasRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none"
          style={{ width: "55vw", height: "92vh", maxWidth: 680 }} />

        {/* ── HUD PANELS ── */}
        {/* Network */}
        <HUDPanel style={{ top: "13%", right: "27%", minWidth: 165, animationDuration: "4s", animationDelay: "0s" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="mono" style={{ fontSize: 8, color: "rgba(201,168,76,0.55)", letterSpacing: 2 }}>NETWORK METRICS</span>
            <span className="flex items-center gap-1">
              <span style={{
                width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block",
                boxShadow: "0 0 4px #22c55e", animation: "dotPulse 1.2s infinite"
              }} />
              <span className="mono" style={{ fontSize: 7, color: "#22c55e", letterSpacing: 1 }}>ACTIVE</span>
            </span>
          </div>
          <div className="flex items-end gap-1 mb-2" style={{ height: 28 }}>
            {[40, 65, 45, 80, 55, 90, hudData.net].map((h, i) => (
              <div key={i} style={{
                width: 6, height: `${h}%`, borderRadius: 2,
                background: `rgba(201,168,76,${0.25 + i * 0.09})`, transition: "height 0.5s ease"
              }} />
            ))}
          </div>
          <span className="orb" style={{ fontSize: 15, color: "#c9a84c", fontWeight: 700 }}>{hudData.net}%</span>
        </HUDPanel>

        {/* Phase I */}
        <HUDPanel style={{ top: "53%", right: "37%", minWidth: 158, animationDuration: "5s", animationDelay: "0.8s" }}>
          <div className="mono mb-2" style={{ fontSize: 8, color: "rgba(201,168,76,0.5)", letterSpacing: 2 }}>PHASE I DEVELOPMENT</div>
          <div className="flex items-center gap-2 mb-2">
            <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{
                height: "100%", width: `${hudData.phase}%`,
                background: "linear-gradient(90deg,#c9a84c,#f5e0a0)", borderRadius: 2,
                transition: "width 0.6s ease", boxShadow: "0 0 6px rgba(201,168,76,0.5)"
              }} />
            </div>
            <span className="orb" style={{ fontSize: 10, color: "#c9a84c", fontWeight: 700 }}>{hudData.phase}%</span>
          </div>
          <span className="flex items-center gap-1">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 4px #22c55e" }} />
            <span className="mono" style={{ fontSize: 7, color: "#22c55e", letterSpacing: 1 }}>STABLE</span>
          </span>
        </HUDPanel>

        {/* Phase II */}
        <HUDPanel style={{ top: "17%", right: "5%", minWidth: 150, animationDuration: "3.5s", animationDelay: "0.4s" }}>
          <div className="mono mb-2" style={{ fontSize: 8, color: "rgba(201,168,76,0.5)", letterSpacing: 2 }}>PHASE II DEPLOYMENT</div>
          <div style={{
            width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8,
            animation: "orbitCW 5s linear infinite"
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.6)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 6px #c9a84c" }} />
            </div>
          </div>
          <span className="flex items-center gap-1">
            <span style={{
              width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block",
              boxShadow: "0 0 4px #22c55e", animation: "dotPulse 1s infinite"
            }} />
            <span className="mono" style={{ fontSize: 7, color: "#22c55e", letterSpacing: 1 }}>ACTIVE</span>
          </span>
        </HUDPanel>

        {/* Performance */}
        <HUDPanel style={{ top: "69%", right: "17%", minWidth: 148, animationDuration: "4.5s", animationDelay: "1.2s" }}>
          <div className="mono mb-2" style={{ fontSize: 8, color: "rgba(201,168,76,0.5)", letterSpacing: 2 }}>PERFORMANCE</div>
          <svg width="110" height="28" style={{ display: "block", marginBottom: 6 }}>
            <polyline points={`0,22 16,18 32,20 48,10 64,14 80,6 96,${28 - hudData.perf * 0.22} 110,4`}
              fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
            <polyline points={`0,22 16,18 32,20 48,10 64,14 80,6 96,${28 - hudData.perf * 0.22} 110,4 110,28 0,28`}
              fill="rgba(201,168,76,0.07)" stroke="none" />
          </svg>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 4px #22c55e" }} />
              <span className="mono" style={{ fontSize: 7, color: "#22c55e", letterSpacing: 1 }}>OPTIMAL</span>
            </span>
            <span className="orb" style={{ fontSize: 11, color: "#c9a84c", fontWeight: 700 }}>{hudData.perf}%</span>
          </div>
        </HUDPanel>

        {/* ── HERO TEXT ── */}
        <div className="relative z-20 text-left px-6 max-w-3xl md:ml-16 lg:ml-24 py-24">

          {/* Status ribbon */}
          <div className="flex justify-start mb-10 animate-fadeInDown">
            <div style={{
              padding: "6px 16px", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 999,
              background: "rgba(201,168,76,0.05)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 10
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: "#c9a84c",
                boxShadow: "0 0 8px #c9a84c", animation: "dotPulse 1.2s infinite", display: "inline-block"
              }} />
              <span className="mono" style={{ fontSize: 9, color: "white", letterSpacing: 4, textTransform: "uppercase" }}>
                Available for Select Q2 2026 Partnerships
              </span>
            </div>
          </div>

          {/* WE ARCHITECT */}
          <h1 className={`font-black leading-[0.85] tracking-tighter animate-zoomIn mb-2 ${glitch ? "glitch-active" : ""}`}
            style={{ fontSize: "clamp(52px,8vw,92px)" }}>
            <span className="gold-shimmer">WE ARCHITECT</span>
          </h1>

          {/* Typewriter */}
          <h2 className="font-black leading-[1] tracking-tighter animate-zoomIn mb-5 text-white"
            style={{ fontSize: "clamp(26px,4.2vw,54px)" }}>
            {displayed}<span className="cursor-blink" style={{ color: "#c9a84c" }}>|</span>
          </h2>

          {/* Tag */}
          <div className="mb-8">
            <span className="mono" style={{
              fontSize: 10, color: "rgba(201,168,76,0.5)", letterSpacing: 4,
              textTransform: "uppercase", border: "1px solid rgba(201,168,76,0.15)", padding: "4px 12px", borderRadius: 3
            }}>
              [ SYSTEMS ARCHITECTURE &amp; SCALING SOLUTIONS ]
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl font-light leading-relaxed mb-10 animate-fadeInUp">
            At <span className="text-white font-bold">Scarlet Tech Wizards</span>, we don't just weave webs.
            We engineer digital artifacts that command authority and work while you sleep.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fadeInUp">
            <a href="#contact" className="inline-flex items-center gap-3 font-black text-[11px] tracking-[3px] uppercase px-8 py-4 rounded-xl transition-all duration-300"
              style={{ background: "#c9a84c", color: "black", boxShadow: "0 0 24px rgba(201,168,76,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "white" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#c9a84c" }}>
              ⚡ GET YOUR ARCHITECT
              <span style={{ fontSize: 9, opacity: 0.7 }}>(FREE CONSULTATION)</span>
            </a>
            <a href="#services" className="inline-flex items-center gap-3 font-black text-[11px] tracking-[3px] uppercase px-8 py-4 rounded-xl transition-all duration-300 text-[#c9a84c]"
              style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.05)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.15)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.05)" }}>
              EXPLORE OUR SPELLS →
            </a>
          </div>

          {/* Stat strip */}
          <div className="flex gap-10 mt-14 animate-fadeInUp">
            {[["5+", "Council Members"], ["50+", "Artifacts Built"], ["100%", "Client Loyalty"]].map(([n, l]) => (
              <div key={l}>
                <div className="orb" style={{
                  fontSize: 20, color: "#c9a84c", fontWeight: 900,
                  textShadow: "0 0 12px rgba(201,168,76,0.4)"
                }}>{n}</div>
                <div className="mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", letterSpacing: 2, marginTop: 4, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block z-20">
          <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom,#c9a84c,transparent)" }} />
        </div>

        {/* Floating btn */}
        <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-500 ${showArtBtn ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-90 pointer-events-none"}`}>
          <a href="/archives" className="flex items-center gap-4 p-2 pr-6 rounded-full font-black text-[10px] uppercase tracking-widest transition-all"
            style={{ background: "#c9a84c", color: "black", boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "white"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#c9a84c"}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "black", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c" }}>⬡</div>
            View All Artifacts
          </a>
        </div>
      </section>
    </>
  );
}