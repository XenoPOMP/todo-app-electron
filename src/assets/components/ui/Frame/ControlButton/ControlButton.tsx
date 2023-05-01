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
				return (
					<>
						<svg
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect y='12' width='15' height='3' rx='1.5' />
						</svg>
					</>
				);
			case 'maximize':
				return isFullscreen ? (
					<>
						<svg
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M18 7.5C18 8.32843 17.3284 9 16.5 9H10.5C9.67157 9 9 8.32843 9 7.5V1.5C9 0.671573 9.67157 0 10.5 0C11.3284 0 12 0.671573 12 1.5V6H16.5C17.3284 6 18 6.67157 18 7.5ZM0 10.5C0 9.67157 0.671573 9 1.5 9L7.5 9C8.32843 9 9 9.67157 9 10.5L9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5L6 12L1.5 12C0.671573 12 0 11.3284 0 10.5Z'
							/>
						</svg>
					</>
				) : (
					<>
						<svg
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M6 1.5C6 0.671573 6.67157 0 7.5 0H13.5C14.3284 0 15 0.671573 15 1.5V7.5C15 8.32843 14.3284 9 13.5 9C12.6716 9 12 8.32843 12 7.5V3H7.5C6.67157 3 6 2.32843 6 1.5ZM9 13.5C9 14.3284 8.32843 15 7.5 15L1.5 15C0.671573 15 0 14.3284 0 13.5V7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5V12L7.5 12C8.32843 12 9 12.6716 9 13.5Z'
								fill='white'
							/>
						</svg>
					</>
				);
			case 'close':
				return (
					<>
						<svg
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M15.2809 0.439119C15.8664 1.02461 15.8664 1.97388 15.2809 2.55937L2.55937 15.2809C1.97388 15.8664 1.02461 15.8664 0.439118 15.2809C-0.146373 14.6954 -0.146373 13.7461 0.439119 13.1606L13.1606 0.439119C13.7461 -0.146372 14.6954 -0.146373 15.2809 0.439119Z' />
							<path d='M15.2809 15.2809C14.6954 15.8664 13.7461 15.8664 13.1606 15.2809L0.439121 2.55937C-0.14637 1.97388 -0.146371 1.02461 0.43912 0.439118C1.02461 -0.146373 1.97388 -0.146373 2.55937 0.439119L15.2809 13.1606C15.8664 13.7461 15.8664 14.6954 15.2809 15.2809Z' />
						</svg>
					</>
				);
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
			className={cn(styles.button, action === 'close' && styles.close)}
			onClick={() => ipcRenderer.send(ipcActions[action])}
		>
			<Content />
		</div>
	);
};

export default ControlButton;
