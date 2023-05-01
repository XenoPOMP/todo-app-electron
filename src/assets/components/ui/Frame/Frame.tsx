import cn from 'classnames';
import { FC } from 'react';

import ControlButton from '@ui/Frame/ControlButton/ControlButton';

import styles from './Frame.module.scss';
import type { FrameProps } from './Frame.props';

const Frame: FC<FrameProps> = ({}) => {
	return (
		<header className={cn(styles.appFrame)}>
			<div className={cn(styles.toHomeButton)}>
				<svg viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z' />
				</svg>
			</div>

			<div className={cn(styles.trafficLights)}>
				<ControlButton action={'minimize'} />

				<ControlButton action={'maximize'} />

				<ControlButton action={'close'} />
			</div>
		</header>
	);
};

export default Frame;
