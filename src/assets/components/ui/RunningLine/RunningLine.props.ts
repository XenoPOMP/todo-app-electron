import { CSSProperties } from 'react';

export interface RunningLineProps {
	behavior?: 'scroll' | 'slide' | 'alternate';
	direction?: 'left' | 'right' | 'up' | 'down';
	loop?: boolean;
	scrollSpeed?: number;
	scrollDelay?: number;
	verticalAlign?: boolean;
	style?: CSSProperties;
	className?: string;
}
