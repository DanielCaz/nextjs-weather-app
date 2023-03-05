import { GeocodeData } from "@/interfaces/geocodedata";
import { Location } from "@/interfaces/location";

export const getCity = async (location: Location) => {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=${apiKey}`
  );
  const data: GeocodeData[] = await res.json();
  return data[0].name;
};
