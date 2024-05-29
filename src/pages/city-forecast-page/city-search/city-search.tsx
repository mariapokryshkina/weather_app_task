import type { FC } from 'react';
import cn from 'classnames';

// import './city-search.styles.scss';

import { SearchInput } from '@/components/search-input';

interface CitySearchProps {
	className?: string;
};

export const CitySearch: FC<CitySearchProps> = ( {
	className,
} ) => {
	return (
		<section className={cn( 'city-search', className )}>
			<SearchInput
				defaultValue="Санкт-Петербург"
			/>
		</section>
	);
};
