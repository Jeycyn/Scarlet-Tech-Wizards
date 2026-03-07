import Link from "next/link";

export default function TailorNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[5%] py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur">
      
      <Link
        href="/"
        className="font-serif text-xl tracking-[8px] text-[#c5a059] font-bold"
      >
        JAMES TAILORING
      </Link>

      <div className="space-x-10 text-xs uppercase tracking-[3px]">
        <a href="#lookbook" className="hover:text-[#c5a059] transition">
          The Lookbook
        </a>

        <a href="#atelier" className="hover:text-[#c5a059] transition">
          The Atelier
        </a>

        <a href="#contact" className="hover:text-[#c5a059] transition">
          Private Booking
        </a>
      </div>
    </nav>
  );
}