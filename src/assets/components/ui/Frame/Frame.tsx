import cn from 'classnames';
import { FC } from 'react';

import ControlButton from '@ui/Frame/ControlButton/ControlButton';

import styles from './Frame.module.scss';
import type { FrameProps } from './Frame.props';

const Frame: FC<FrameProps> = ({}) => {
	return (
		<header className={cn(styles.appFrame)}>
			<div>App title</div>

			<div className={cn(styles.trafficLights)}>
				<ControlButton action={'minimize'} />

				<ControlButton action={'maximize'} />

				<ControlButton action={'close'} />
			</div>
		</header>
	);
};

export default Frame;
