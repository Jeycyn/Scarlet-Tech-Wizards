"use client";
export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/Eldoret_hights.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-3xl px-4" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl uppercase tracking-widest">Eldoret Heights</h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          The Future of Living in the City of Champions.
        </p>

        <div className="mt-8 w-full max-w-2xl mx-auto flex gap-4 bg-white/10 backdrop-blur-xl rounded-full p-4">
          <input
            type="text"
            placeholder="Search by neighborhood (Elgon View, Kapsoya, Riat...)"
            className="flex-1 bg-transparent outline-none px-4 text-white placeholder-white/70 rounded-full"
          />
          <button className="bg-yellow-700 text-white font-bold px-6 py-3 rounded-full">
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}