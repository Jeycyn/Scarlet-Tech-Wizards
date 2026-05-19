"use client";
import { useState, useRef, useEffect } from "react";

type FounderType = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email: string;
  color: string;
  glow: string;
};

const founders: FounderType[] = [
  {
    name: "Jeycyn Jeff",
    role: "Founder & Chief Technology Strategist",
    image: "jeycyn.jpeg",
    bio: "A visionary architect of digital systems, specializing in advanced software engineering, innovation strategy, and building transformative technological solutions.",
    linkedin: "https://linkedin.com/in/jeycyn-jeff-3ba769313/",
    email: "mailto:jeffjeycyn@gmail.com",
    color: "#c9a84c",
    glow: "rgba(201,168,76,0.25)",
  },
  {
    name: "Bilha Warui",
    role: "Chief Operations Officer",
    image: "bilha.png",
    bio: "An operations strategist focused on organizational excellence, ensuring seamless execution, sustainable growth, and high-performance client engagement.",
    email: "mailto:info@scarlettechwizards.com",
    color: "#f5e0a0",
    glow: "rgba(245,224,160,0.2)",
  },
  {
    name: "Graham Bell",
    role: "Creative Director & Visual Strategist",
    image: "graham.jfif",
    bio: "A creative visionary leading design innovation through compelling visual storytelling, cinematic interfaces, and bold digital experiences.",
    email: "mailto:graham111838052@gmail.com",
    color: "#e8a838",
    glow: "rgba(232,168,56,0.2)",
  },
  {
    name: "Samuel Waweru",
    role: "Digital Marketing & Media Communications Specialist",
    image: "waweru.jpeg",
    bio: "A multifaceted media professional skilled in digital marketing and multilingual voice artistry, driving brand visibility and audience engagement.",
    email: "mailto:eswaweru144@gmail.com",
    color: "#d4a843",
    glow: "rgba(212,168,67,0.2)",
  },
  {
    name: "Chris Pasher",
    role: "Administrative Secretary & Digital Marketing Strategist",
    image: "El-Pasha.png",
    bio: "A highly organized and strategic professional overseeing coordination and administrative excellence while contributing to digital marketing initiatives.",
    email: "mailto:opilichrispapa@gmail.com",
    color: "#f0c060",
    glow: "rgba(240,192,96,0.2)",
  },
];

export default function Founder() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    const animate = () => {
      if (!isHovering) {
        el.scrollLeft += 0.8;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isHovering]);

  const scrollManual = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft + (dir === "left" ? -320 : 320),
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }

        /* Animated gold bottom border on card */
        @keyframes goldBorderPulse {
          0%,100% { opacity: 0.6; box-shadow: 0 4px 12px rgba(201,168,76,0.1); }
          50%      { opacity: 1;   box-shadow: 0 4px 20px rgba(201,168,76,0.35); }
        }

        /* HUD scan on image hover */
        @keyframes imgScan {
          0%   { top: 0%;   opacity: 0.7; }
          100% { top: 100%; opacity: 0;   }
        }
        .founder-card:hover .founder-scan {
          animation: imgScan 0.7s ease forwards;
        }

        /* Dot pulse */
        @keyframes dotPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }

        /* Orbit ring on founder card */
        @keyframes orbitCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes orbitCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        /* Card entrance */
        @keyframes cardIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .card-in { animation: cardIn 0.5s ease forwards; }

        /* Circuit bg */
        .circuit-bg {
          background-image:
            linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/97 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* HUD corners on modal */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-[#c9a84c]/50" />
          <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-[#c9a84c]/50" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-[#c9a84c]/50" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-[#c9a84c]/50" />

          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gray-500 hover:text-[#c9a84c] text-sm uppercase font-black tracking-widest transition-colors"
            >
              Close [×]
            </button>
            {/* Gold border wrapper */}
            <div className="p-[1.5px] rounded-3xl"
              style={{ background: "linear-gradient(135deg,#c9a84c,#f5e0a0,#6b5520,#c9a84c)" }}>
              <img
                src={selectedImage}
                alt="Expanded"
                className="max-h-[80vh] w-auto max-w-full rounded-3xl object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <section id="founder" className="py-32 bg-[#050505] relative overflow-hidden circuit-bg">

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse,rgba(201,168,76,0.04) 0%,transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#c9a84c]/20 rounded mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                style={{ boxShadow: "0 0 5px #c9a84c", animation: "dotPulse 2s infinite" }} />
              <h6 className="text-[#c9a84c] font-black tracking-[6px] text-[10px] uppercase">
                The Council
              </h6>
            </div>
            <h2 className="text-5xl font-black text-white">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f5e0a0] to-[#c9a84c]">
                Founding Council
              </span>
            </h2>
            <p className="text-gray-500 mt-4 text-sm font-light max-w-md mx-auto">
              Five minds. One mission. Building Kenya's most formidable digital force.
            </p>
          </div>

          {/* Scroller */}
          <div className="relative max-w-7xl mx-auto px-14">

            {/* Left button */}
            <button
              onClick={() => scrollManual("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all duration-300 group"
              style={{ background: "rgba(0,0,0,0.8)", borderColor: "rgba(201,168,76,0.2)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#c9a84c";
                (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLElement).style.color = "black";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.8)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              ◀
            </button>

            {/* Right button */}
            <button
              onClick={() => scrollManual("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all duration-300"
              style={{ background: "rgba(0,0,0,0.8)", borderColor: "rgba(201,168,76,0.2)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#c9a84c";
                (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLElement).style.color = "black";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.8)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
            >
              ▶
            </button>

            {/* Cards */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {founders.map((f, i) => (
                <div
                  key={i}
                  className="founder-card card-in min-w-[300px] max-w-[300px] group flex flex-col items-center text-center p-8 rounded-[2rem] border border-white/5 transition-all duration-400 relative overflow-hidden"
                  style={{
                    background: "#0a0a0a",
                    animationDelay: `${i * 0.08}s`,
                    borderBottomColor: f.color,
                    borderBottomWidth: 3,
                  }}
                  onMouseEnter={e => {
                    setActiveIdx(i);
                    (e.currentTarget as HTMLElement).style.background = "#0f0f0f";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${f.glow}`;
                  }}
                  onMouseLeave={e => {
                    setActiveIdx(null);
                    (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Corner HUD accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l border-t opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ borderColor: f.color }} />
                  <div className="absolute top-3 right-3 w-4 h-4 border-r border-t opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ borderColor: f.color }} />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ borderColor: f.color }} />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ borderColor: f.color }} />

                  {/* Photo wrapper */}
                  <div className="relative mb-6 cursor-pointer group/img">
                    {/* Orbit rings */}
                    <div className="absolute inset-0 -m-3 rounded-xl border opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ borderColor: f.color, animation: "orbitCW 6s linear infinite" }} />
                    <div className="absolute inset-0 -m-6 rounded-xl border opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ borderColor: f.color, animation: "orbitCCW 10s linear infinite" }} />

                    {/* Glow behind photo */}
                    <div className="absolute inset-0 rounded-xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      style={{ background: f.glow }} />

                    {/* Photo */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-32 h-32 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      {/* Scan line */}
                      <div className="founder-scan absolute left-0 right-0 h-[2px] pointer-events-none"
                        style={{
                          top: 0,
                          background: `linear-gradient(90deg,transparent,${f.color},transparent)`,
                          opacity: 0,
                        }}
                      />
                      {/* Expand overlay */}
                      <div
                        onClick={() => setSelectedImage(f.image)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10"
                        style={{ background: "rgba(0,0,0,0.6)" }}
                      >
                        <span className="text-white text-[9px] px-3 py-1 rounded-full uppercase tracking-tighter font-bold border"
                          style={{ borderColor: f.color, color: f.color }}>
                          ⊕ Expand
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="text-white font-bold text-xl mb-1">{f.name}</h4>
                  <p className="text-[11px] uppercase font-black tracking-widest mb-3"
                    style={{ color: f.color }}>
                    {f.role}
                  </p>
                  <p className="text-gray-500 text-sm italic mb-6 leading-relaxed">
                    "{f.bio}"
                  </p>

                  {/* Social links */}
                  <div className="flex gap-3 mt-auto">
                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 border border-white/10 flex items-center justify-center text-white text-xs font-bold transition-all duration-300"
                        style={{ borderRadius: 4 }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = f.color;
                          (e.currentTarget as HTMLElement).style.color = "black";
                          (e.currentTarget as HTMLElement).style.borderColor = f.color;
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "white";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                        }}
                      >
                        in
                      </a>
                    )}
                    <a
                      href={f.email}
                      className="w-9 h-9 border border-white/10 flex items-center justify-center text-white text-xs transition-all duration-300"
                      style={{ borderRadius: 4 }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = f.color;
                        (e.currentTarget as HTMLElement).style.color = "black";
                        (e.currentTarget as HTMLElement).style.borderColor = f.color;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "white";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                      }}
                    >
                      ✉
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {founders.map((f, i) => (
              <div key={i}
                className="transition-all duration-300"
                style={{
                  width: activeIdx === i ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: activeIdx === i ? f.color : "rgba(255,255,255,0.1)",
                  boxShadow: activeIdx === i ? `0 0 8px ${f.color}` : "none",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}