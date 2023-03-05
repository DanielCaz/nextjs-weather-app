import { Daily } from "@/interfaces/weather";
import Image from "next/image";

interface DayForecastCardProps {
  day: Daily;
}

const DayForecastCard = ({ day }: DayForecastCardProps) => {
  return (
    <div key={day.dt} className="text-center px-5 py-3">
      <h1 className="text-sm font-bold">
        {new Date(day.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        })}
      </h1>
      <Image
        className="mx-auto flex-1"
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
        alt={day.weather[0].description}
        width={50}
        height={50}
      />
      <h2 className="text-sm">
        {Math.round(day.temp.min)}°C / {Math.round(day.temp.max)}°C
      </h2>
      <h2 className="text-sm">{day.weather[0].description}</h2>
    </div>
  );
};

export default DayForecastCard;
