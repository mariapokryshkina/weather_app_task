import type { FC } from 'react';
import cn from 'classnames';

import { Map } from '@/components/map';
import { DailyForecast } from './daily-forecast';


import './weekly-forecast.styles.scss';
import { SearchInput } from '@/components/search-input';
import { Search } from '@/common/icons';

interface WeeklyForecastProps {
	className?: string;
};


export const WeeklyForecast: FC<WeeklyForecastProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'weekly-forecast', className )}>
			<h2 className="visually-hidden">Прогноз погоды</h2>
			<section>
				<div className= "search-input">
					<SearchInput />
				</div>
				<h3>Погода на неделю в Санкт-Петербурге</h3>
				{/* <div className="weekly-forecast__days"> */}
				<DailyForecast />
				{/* </div> */}
			</section>
			<section>
				<h3>Карта погоды</h3>
				<Map className="weekly-forecast__map"/>
			</section>
		</section>
	);
};