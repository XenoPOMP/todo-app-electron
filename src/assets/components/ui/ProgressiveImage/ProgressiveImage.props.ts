import { CSSProperties } from 'react';

export interface ProgressiveImageProps {
	src?: string;
	alt?: string;
	className?: string;
	style?: CSSProperties;
	loaderColorScheme: {
		backgroundColor: string;
		loaderColor: string;
	};
}
