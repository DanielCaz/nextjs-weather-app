import { Location } from "@/interfaces/location";
import { Weather } from "@/interfaces/weather";

export const getWeatherInfo = async (location: Location) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=metric`
  );

  const data: Weather = await res.json();
  return data;
};
