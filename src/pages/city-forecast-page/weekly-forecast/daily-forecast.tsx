// src/components/DailyForecast.tsx
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import cn from 'classnames';

import './daily-forecast.styles.scss';
import Cloudy from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/cloudy.svg'
import NightStorm from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/night_storm.svg';
import PartlyCloudy from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/partly_cloudy.svg';
import PartlyDayStorm from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/partly_day_storm.svg';
import RainStorm from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/rain_storm.svg';
import Rainy from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/rainy.svg';
import SlightTouchHappyday from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/slight_touch_happyday.svg';
import Snowy from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/snowy.svg';
import Thunderstorm from '/Users/mariapokryshkina/Documents/REACT projects/weather-forecast-test/public/assets/thnderstorm.svg';

import './daily-forecast.styles.scss';

interface DailyForecastProps {
  className?: string;
}

const API_URL = 'https://api.open-meteo.com/v1/forecast';
const LATITUDE = '59.9375'; 
const LONGITUDE = '30.3086'; 
const PARAMETERS = 'current_weather=true&daily=temperature_2m_min,apparent_temperature_max';

export const DailyForecast: FC<DailyForecastProps> = ({ className }) => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [minTemperature, setMinTemperature] = useState<number | null>(null);
  const [feelsLikeTemperature, setFeelsLikeTemperature] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [weatherCode, setWeatherCode] = useState<number | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`${API_URL}?latitude=${LATITUDE}&longitude=${LONGITUDE}&${PARAMETERS}`);
        const currentWeather = response.data.current_weather;
        const dailyWeather = response.data.daily;

        setTemperature(currentWeather.temperature);
        setMinTemperature(dailyWeather.temperature_2m_min[0]); 
        setFeelsLikeTemperature(dailyWeather.apparent_temperature_max[0]); 
        setWeatherCode(currentWeather.weathercode);
      } catch (error) {
        console.error('Error fetching the weather data:', error);
      }
    };

    fetchWeather();

    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'long' };
    setCurrentDate(now.toLocaleDateString('ru-RU', options));
    const formattedDate = now.toLocaleDateString('ru-RU', options);
    setCurrentDate(capitalizeFirstLetter(formattedDate));


  }, []);

    const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


      const getWeatherIcon = (code: number | null) => {
    if (code === null) return null;

    const style = {
      width: '39.7px',
      height: '38px',
    };

    switch (code) {
      case 0:
        return <img src={SlightTouchHappyday} alt="Sunny" style={style} />;
      case 1:
      case 2:
        return <img src={PartlyCloudy} alt="Partly Cloudy" style={style} />;
      case 3:
        return <img src={Cloudy} alt="Cloudy" style={style} />;
      case 45:
      case 48:
        return <img src={NightStorm} alt="Foggy" style={style} />;
      case 51:
      case 53:
      case 55:
        return <img src={Rainy} alt="Drizzle" style={style} />;
      case 56:
      case 57:
        return <img src={Snowy} alt="Freezing Drizzle" style={style} />;
      case 61:
      case 63:
      case 65:
        return <img src={RainStorm} alt="Rainy" style={style} />;
      case 66:
      case 67:
        return <img src={Snowy} alt="Freezing Rain" style={style} />;
      case 71:
      case 73:
      case 75:
        return <img src={Snowy} alt="Snowfall" style={style} />;
      case 80:
      case 81:
      case 82:
        return <img src={RainStorm} alt="Showers" style={style} />;
      case 85:
      case 86:
        return <img src={Snowy} alt="Snow Showers" style={style} />;
      case 95:
        return <img src={Thunderstorm} alt="Thunderstorm" style={style} />;
      default:
        return <img src={PartlyDayStorm} alt="Weather" style={style} />;
    }
  };



  return (
    <section className={cn('daily-forecast', className)}>
      <div className="date">
        <h1>{currentDate}</h1>
        </div>
        <div className="current-temp">
           {temperature !== null ? (
              <>
                 {`${temperature} °`} {getWeatherIcon(weatherCode)}
              </>
            ) : (
              'Loading...'
            )}
        </div>
        <div className="min-feel">
          <div className="min-temp-text">
            мин.
            ощущ
          </div>
          <div className="min-feel-degrees">
            {minTemperature !== null ? `
             ${minTemperature}°`: 'Loading...' }
            
            {feelsLikeTemperature !== null ? `
            ${feelsLikeTemperature}°` : 'Loading...'}
          </div>
        </div>
    </section>
  );
};
