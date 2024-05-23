import { FC } from 'react';
import cn from 'classnames';

import './current-weather.styles.scss';

interface CurrentWeatherProps {
	className?: string;
};


export const CurrentWeather: FC<CurrentWeatherProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'current-weather', className )}>

		</section>
	);
};
