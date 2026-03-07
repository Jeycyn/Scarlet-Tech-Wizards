import PropertyCard from "./PropertyCard";

export default function ListingsSection() {
  const listings = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      price: "KSh 45,000,000",
      title: "The Elgon View Mansion",
      desc: "5 Bedroom, All En-suite with Private Pool",
    },
    {
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      price: "KSh 12,500,000",
      title: "Skyline Apartments",
      desc: "Modern 3 Bedroom Penthouse, CBD Fringe",
    },
  ];

  return (
    <section className="py-24 px-8">
      <h2 className="text-3xl md:text-4xl mb-12 font-bold" data-aos="fade-right">
        Featured Listings
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {listings.map((item, i) => (
          <PropertyCard key={i} {...item} delay={i * 200} />
        ))}
      </div>
    </section>
  );
}