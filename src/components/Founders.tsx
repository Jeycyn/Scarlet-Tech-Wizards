"use client";
import { useState, useRef, useEffect } from "react";

type FounderType = {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  email: string;
  borderColor: string;
  textColor: string;
  glow: string;
};

export default function Founder() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const founders: FounderType[] = [
    {
      name: "Jeycyn Jeff",
      role: "Founder & Chief Technology Strategist",
      image: "jeycyn.jpeg",
      bio: "A visionary architect of digital systems, specializing in advanced software engineering, innovation strategy, and building transformative technological solutions.",
      linkedin: "https://linkedin.com/in/jeycyn-jeff-3ba769313/",
      email: "mailto:jeffjeycyn@gmail.com",
      borderColor: "border-red-600",
      textColor: "text-red-600",
      glow: "from-red-600",
    },
    {
      name: "Bilha Warui",
      role: "Chief Operations Officer",
      image: "bilha.png",
      bio: "An operations strategist focused on organizational excellence, ensuring seamless execution, sustainable growth, and high-performance client engagement.",
      email: "mailto:info@scarlettechwizards.com",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-500",
      glow: "from-yellow-500",
    },
    {
      name: "Graham Bell",
      role: "Creative Director & Visual Strategist",
      image: "graham.jfif",
      bio: "A creative visionary leading design innovation through compelling visual storytelling, cinematic interfaces, and bold digital experiences.",
      email: "mailto:graham111838052@gmail.com",
      borderColor: "border-orange-600",
      textColor: "text-orange-600",
      glow: "from-orange-600",
    },
    {
      name: "Samuel Waweru",
      role: "Digital Marketing & Media Communications Specialist",
      image: "waweru.jpeg",
      bio: "A multifaceted media professional skilled in digital marketing and multilingual voice artistry, driving brand visibility and audience engagement.",
      email: "mailto:eswaweru144@gmail.com",
      borderColor: "border-purple-600",
      textColor: "text-purple-600",
      glow: "from-purple-600",
    },
    {
      name: "Chris Pasher",
      role: "Administrative Secretary & Digital Marketing Strategist",
      image: "El-Pasha.png",
      bio: "A highly organized and strategic professional overseeing coordination and administrative excellence while contributing to digital marketing initiatives.",
      email: "mailto:opilichrispapa@gmail.com",
      borderColor: "border-pink-600",
      textColor: "text-pink-600",
      glow: "from-pink-600",
    },
  ];

  // AUTO SCROLL
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationFrameId: number;

    const animate = () => {
      if (!isHovering) {
        el.scrollLeft += 1;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  // FIXED MANUAL SCROLL (The "Reverse" Fix)
  const scrollManual = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 320; // Matches card width + gap
    const targetScroll = direction === "left" 
      ? el.scrollLeft - scrollAmount 
      : el.scrollLeft + scrollAmount;

    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="founder" className="py-32 bg-[#050505] relative overflow-hidden">
      
      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button className="absolute -top-12 right-0 text-white text-sm uppercase hover:text-red-600">
              Close [×]
            </button>
            <img
              src={selectedImage}
              alt="Expanded"
              className="max-h-[80vh] w-auto max-w-full rounded-3xl border border-white/10 shadow-2xl object-contain"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white">
            Meet the{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Founding Council
            </span>
          </h2>
        </div>

        {/* SCROLLER AREA */}
        <div className="relative max-w-7xl mx-auto px-12">

          {/* LEFT (REVERSE) BUTTON */}
          <button
            onClick={() => scrollManual("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 w-12 h-12 rounded-full border border-white/10 text-white hover:bg-red-600 hover:border-red-600 transition-all flex items-center justify-center group"
          >
            <span className="group-active:scale-75 transition-transform">◀</span>
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scrollManual("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 w-12 h-12 rounded-full border border-white/10 text-white hover:bg-red-600 hover:border-red-600 transition-all flex items-center justify-center group"
          >
            <span className="group-active:scale-75 transition-transform">▶</span>
          </button>

          {/* CARDS CONTAINER */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {founders.map((f, i) => (
              <div
                key={i}
                className={`min-w-[300px] max-w-[300px] group bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] hover:bg-[#111] border-b-4 ${f.borderColor} flex flex-col items-center text-center transition duration-300`}
              >
                <div className="relative mb-6 cursor-pointer group/img">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${f.glow} opacity-20 rounded-xl blur-lg`} />
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-32 h-32 object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
                  />
                  <div 
                    onClick={() => setSelectedImage(f.image)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition z-10"
                  >
                    <span className="bg-black/70 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter">
                      Click to Expand
                    </span>
                  </div>
                </div>

                <h4 className="text-white font-bold text-xl">{f.name}</h4>
                <p className={`${f.textColor} text-[11px] uppercase font-bold tracking-widest mb-3`}>
                  {f.role}
                </p>
                <p className="text-gray-400 text-sm italic mb-6">
                  "{f.bio}"
                </p>

                <div className="flex gap-3 mt-auto">
                  {f.linkedin && (
                    <a href={f.linkedin} target="_blank" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
                      in
                    </a>
                  )}
                  <a href={f.email} className="w-8 h-8 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition">
                    ✉
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}