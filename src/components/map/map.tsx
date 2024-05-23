import type { FC } from 'react';
import cn from 'classnames';

import './map.styles.scss';

interface MapProps {
	className?: string;
};

export const Map: FC<MapProps> = ( {
	className,
} ) => {
	return (
		<div className={cn( 'map', className )} />
	);
};
