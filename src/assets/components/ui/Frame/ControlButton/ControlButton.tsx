import cn from 'classnames';
import { ipcRenderer } from 'electron';
import { FC, useState } from 'react';

import styles from './ControlButton.module.scss';
import type { ControlButtonProps } from './ControlButton.props';

const ControlButton: FC<ControlButtonProps> = ({ action }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const Content: FC<unknown> = () => {
		switch (action) {
			case 'minimize':
				return <>_</>;
			case 'maximize':
				return isFullscreen ? <>\/</> : <>^</>;
			case 'close':
				return <>x</>;
		}
	};

	const ipcActions: {
		[key in typeof action]: string;
	} = {
		minimize: 'minimize_app',
		maximize: isFullscreen ? 'unmaximize_app' : 'maximize_app',
		close: 'close_app',
	};

	ipcRenderer.on('get_fullscreen_status', (_, arg) => {
		setIsFullscreen(arg);
	});

	return (
		<div
			className={cn(styles.button)}
			onClick={() => ipcRenderer.send(ipcActions[action])}
		>
			<Content />
		</div>
	);
};

export default ControlButton;
