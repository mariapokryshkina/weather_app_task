import { Layout } from '@/components/layout';

import { CitySearch } from './city-search/city-search';
import { CurrentWeather } from './current-weather/current-weather';
import { WeeklyForecast } from './weekly-forecast/weekly-forecast';

import './city-forecast-page.styles.scss';


export const CityForecastPage = () => {
	return (
		<Layout className="city-forecast-page">
			{/* TODO: Поиск должен быть на странице. Доделай стили ;) */}
			<CitySearch className="hidden city-forecast-page__search" />
			<CurrentWeather className="city-forecast-page__weather" />
			<WeeklyForecast className="city-forecast-page__forecast" />
		</Layout>
	);
};
