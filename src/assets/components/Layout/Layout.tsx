import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import Frame from '@ui/Frame/Frame';

import styles from './Layout.module.scss';
import type { LayoutProps } from './Layout.props';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<>
			<Frame />
			{children}
		</>
	);
};

export default Layout;
