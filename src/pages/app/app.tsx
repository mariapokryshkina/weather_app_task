import { CityForecastPage } from '../city-forecast-page';

import { useViewportHeight } from './hooks/use-viewport-height';

import '@/app/global-styles/index.scss';


export const App = () => {
	useViewportHeight();

	return (
		<CityForecastPage/>
	);
};
