"use client";

import { Location } from "@/interfaces/location";
import { Weather } from "@/interfaces/weather";
import { getCity } from "@/lib/geocoding";
import { getWeatherInfo } from "@/lib/weather";
import { useEffect, useState } from "react";
import DayForecastCard from "./DayForecastCard";
import HourForecastCard from "./HourForecastCard";
import TitleSection from "./TitleSection";

const Home = () => {
  const [location, setLocation] = useState<Location>();
  const [weatherInfo, setWeatherInfo] = useState<Weather>();
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (location?.lat && location?.lon) {
      getWeatherInfo(location).then((weather) => {
        setWeatherInfo(weather);
        getCity(location).then((city) => setCity(city));
      });
    }
  }, [location]);

  return (
    <main className="shadow-lg border max-w-sm mx-auto bg-white rounded-lg px-3">
      {weatherInfo ? (
        <>
          <TitleSection currentWeather={weatherInfo} city={city} />
          <hr className="border-gray-200" />
          <div className="flex overflow-x-scroll">
            {weatherInfo.hourly.map((hour) => (
              <HourForecastCard key={hour.dt} hour={hour} />
            ))}
          </div>
          <hr className="border-gray-200" />
          <div className="grid grid-cols-2">
            {weatherInfo.daily.map((day) => (
              <DayForecastCard key={day.dt} day={day} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      )}
    </main>
  );
};
export default Home;
