import { Weather } from "@/interfaces/weather";
import Image from "next/image";

interface TitleSectionProps {
  currentWeather: Weather;
}

const TitleSection = ({ currentWeather }: TitleSectionProps) => {
  return (
    <div className="text-center py-8">
      <Image
        className="mx-auto"
        src={`http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}.png`}
        alt={currentWeather.current.weather[0].description}
        width={50}
        height={50}
      />
      <h1 className="text-xl font-bold uppercase">{currentWeather.timezone}</h1>
      <h2 className="text-3xl">{Math.round(currentWeather.current.temp)}°C</h2>
      <h3 className="text-l space-x-3 my-3">
        <span>&or;{Math.floor(currentWeather.daily[0].temp.min)}°C</span>
        <span>&and;{Math.ceil(currentWeather.daily[0].temp.max)}°C</span>
      </h3>
      <h4 className="text-sm">
        {currentWeather.current.weather[0].description}
      </h4>
    </div>
  );
};

export default TitleSection;
