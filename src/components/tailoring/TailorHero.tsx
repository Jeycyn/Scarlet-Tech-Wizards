export default function TailorHero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-110 hover:scale-100 transition-[10s]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), #0d0d0d), url('/tailor/hero.jpg')",
        }}
      />

      <div className="relative z-10 max-w-3xl px-6">
        <span className="block text-[#c5a059] italic text-xl mb-6 font-serif">
          The Fine Art of Tailoring
        </span>

        <h1 className="font-serif text-6xl tracking-[20px] uppercase mb-10">
          African Heritage
        </h1>

        <a
          href="#atelier"
          className="px-10 py-5 border border-[#c5a059] uppercase tracking-[5px] text-sm hover:bg-[#c5a059] hover:text-black transition"
        >
          Experience Bespoke
        </a>
      </div>
    </section>
  );
}