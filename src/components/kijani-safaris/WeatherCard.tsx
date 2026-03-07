interface WeatherProps {
  location: string;
  temp: number;
  condition: string;
}

export default function WeatherCard({ location, temp, condition }: WeatherProps) {
  return (
    <div className="bg-[#2d3e2f] text-white p-8 rounded-2xl min-w-[220px] shadow-xl">
      <p className="text-[10px] opacity-60 tracking-[2px] uppercase">{location}</p>
      <h3 className="text-4xl my-2 font-serif">{temp}°C</h3>
      <p className="text-sm text-[#e67e22] font-bold">{condition}</p>
    </div>
  );
}