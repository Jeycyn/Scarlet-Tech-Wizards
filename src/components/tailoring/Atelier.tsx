export default function Atelier() {
  return (
    <section
      id="atelier"
      className="px-[5%] py-40 bg-[#161616] grid md:grid-cols-2 gap-24 items-center"
    >

      <div>
        <p className="text-[#c5a059] italic mb-4">
          The Sanctuary
        </p>

        <h2 className="text-5xl font-serif mb-8">
          The Atelier Experience
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Beyond the tape and the textile lies a legacy. Our private
          measurement sessions are designed for the discerning individual who
          views their attire as their second skin.
        </p>
      </div>

      <div className="border border-[#c5a059]/30 p-10">
        <h3 className="font-serif mb-8 tracking-[2px]">
          Request a Consultation
        </h3>

        <form className="space-y-8">
          <input
            type="text"
            placeholder="Your Legacy Name"
            className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-[#c5a059] outline-none"
          />

          <input
            type="email"
            placeholder="Private Email Address"
            className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-[#c5a059] outline-none"
          />

          <input
            type="text"
            placeholder="Preferred Date"
            className="w-full bg-transparent border-b border-white/10 pb-4 focus:border-[#c5a059] outline-none"
          />

          <button className="w-full border border-[#c5a059] py-4 uppercase tracking-[5px] hover:bg-[#c5a059] hover:text-black transition">
            Book My Session
          </button>
        </form>
      </div>

    </section>
  );
}