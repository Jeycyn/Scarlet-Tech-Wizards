import Link from "next/link";

interface ArchiveCardProps {
  title: string;
  tag: string;
  description: string;
  status: string;
  link: string;
}

export default function ArchiveCard({
  title,
  tag,
  description,
  status,
  link,
}: ArchiveCardProps) {
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-lg p-8 transition-all hover:border-yellow-500 hover:-translate-y-2 hover:bg-yellow-500/5">
      
      <div className="absolute top-5 right-5 text-xs bg-yellow-500/10 px-2 py-1 rounded">
        {status}
      </div>

      <span className="text-xs font-bold text-yellow-500 border border-yellow-500 px-3 py-1 uppercase">
        {tag}
      </span>

      <h3 className="text-xl mt-5 mb-3 font-semibold">{title}</h3>

      <p className="text-gray-400 text-sm mb-6">{description}</p>

      <Link
        href={link}
        className="text-sm font-bold border-b-2 border-yellow-500 hover:text-yellow-500 transition"
      >
        OPEN ARTIFACT
      </Link>
    </div>
  );
}