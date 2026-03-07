interface PropertyCardProps {
  img: string;
  price: string;
  title: string;
  desc: string;
  delay?: number;
}
export default function PropertyCard({ img, price, title, desc, delay = 0 }: PropertyCardProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="text-yellow-700 text-xl font-extrabold mb-2">{price}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{desc}</p>
        <a href="#" className="block text-center bg-yellow-700 text-white font-bold py-2 rounded-full">
          VIEW DETAILS
        </a>
      </div>
    </div>
  );
}