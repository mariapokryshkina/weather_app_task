import type { FC } from 'react';

import cn from 'classnames';

import './daily-forecast.styles.scss';

interface DailyForecastProps {
	className?: string;
};

export const DailyForecast: FC<DailyForecastProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'daily-forecast', className )}>
			<h1>Вт, 22 мая</h1>
                <div>
				    <h1>14 градусов</h1>
                </div>
                <div className="min-feel">
				<div className="min-temp">
                    <h1>мин 14</h1>
                </div>
                <div className="feels-like">
                <h1>ощущ 14</h1>
                </div>
                </div>
		</section>
	);
};
