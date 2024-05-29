import { FC } from 'react';
import cn from 'classnames';

import './date.styles.scss';

interface DateProps {
	className?: string;
};


export const Date: FC<DateProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'date', className )}>
			<div className='location'>
				Санкт-Петербург
			</div>
            <div className="today">
                Сегодня, day, date
            </div>
            <div className="time">
                Время 
            </div>
		</section>
	);
};



