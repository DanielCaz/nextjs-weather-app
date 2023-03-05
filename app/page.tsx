"use client";

import { Location } from "@/interfaces/location";
import { Weather } from "@/interfaces/weather";
import { getCity } from "@/lib/geocoding";
import { getWeatherInfo } from "@/lib/weather";
import { useEffect, useState } from "react";
import DayForecastCard from "./DayForecastCard";
import HourForecastCard from "./HourForecastCard";
import TitleSection from "./TitleSection";
import styles from "./Home.module.css";

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
    const fetchData = async (location: Location) => {
      const weather = await getWeatherInfo(location);
      setWeatherInfo(weather);
      const city = await getCity(location);
      setCity(city);
    };

    if (location?.lat && location?.lon) {
      fetchData(location);
    }
  }, [location]);

  return (
    <main className="shadow-lg max-w-sm mx-auto rounded-lg px-3 bg-blue-300">
      {weatherInfo ? (
        <>
          <TitleSection currentWeather={weatherInfo} city={city} />
          <hr className="border-blue-200" />
          <div
            className={`flex overflow-x-scroll ${styles.hourlyForecastWrapper}`}
          >
            {weatherInfo.hourly.map((hour) => (
              <HourForecastCard key={hour.dt} hour={hour} />
            ))}
          </div>
          <hr className="border-blue-200" />
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
