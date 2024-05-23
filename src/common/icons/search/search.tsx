import type { SVGProps } from 'react';

export const Search = ( props: SVGProps<SVGSVGElement> ) => {
	return (
		<svg
			width="27"
			height="28"
			viewBox="0 0 27 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13.2 2.75a10.97 10.97 0 0 1 8.08 18.36l3.52 3.51a.84.84 0 1 1-1.2 1.2l-3.56-3.56a10.97 10.97 0 0 1-17.8-8.56A10.99 10.99 0 0 1 13.22 2.76Zm0 1.69a9.28 9.28 0 0 0 0 18.53 9.28 9.28 0 0 0 0-18.53Z"
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
			/>
		</svg>
	);
};
