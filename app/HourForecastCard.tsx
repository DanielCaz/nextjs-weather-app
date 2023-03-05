import { Current } from "@/interfaces/weather";
import Image from "next/image";

interface HourForecastCardProps {
  hour: Current;
}

const HourForecastCard = ({ hour }: HourForecastCardProps) => {
  return (
    <div key={hour.dt} className="text-center mx-5 flex flex-col">
      <h1 className="text-sm font-bold mt-3">
        {new Date(hour.dt * 1000).getHours()}:00
      </h1>
      <Image
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
        alt={hour.weather[0].description}
        width={50}
        height={50}
      />
      <h2 className="text-sm mb-3 mt-auto">{Math.round(hour.temp)}°C</h2>
    </div>
  );
};

export default HourForecastCard;
