import Image from "next/image";

export default function Lookbook() {
  return (
    <section id="lookbook" className="px-[5%] py-40">

      <div className="text-center mb-24">
        <p className="text-[#c5a059] italic text-xl font-serif">
          Collections
        </p>

        <h2 className="font-serif text-4xl tracking-[10px] uppercase">
          Digital Lookbook
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-8 h-[600px] relative">
          <Image src="/tailor/pic5.png" fill alt="Suit" className="object-cover"/>
        </div>

        <div className="col-span-4 h-[600px] mt-12 relative">
          <Image src="/tailor/pic1.jpg" fill alt="Details" className="object-cover"/>
        </div>

        <div className="col-span-4 h-[500px] relative">
          <Image src="/tailor/pic2.jpg" fill alt="Fabric" className="object-cover"/>
        </div>

        <div className="col-span-4 h-[500px] -mt-12 relative">
          <Image src="/tailor/pic3.jpg" fill alt="Craft" className="object-cover"/>
        </div>

        <div className="col-span-4 h-[500px] relative">
          <Image src="/tailor/pic4.jpg" fill alt="Legacy" className="object-cover"/>
        </div>

      </div>
    </section>
  );
}