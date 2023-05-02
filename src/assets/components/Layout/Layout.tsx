import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import Footer from '@ui/Footer/Footer';
import Frame from '@ui/Frame/Frame';

import styles from './Layout.module.scss';
import type { LayoutProps } from './Layout.props';

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
	return (
		<div className={cn(styles.layout)}>
			<Frame />

			<main>{children}</main>

			<Footer />
		</div>
	);
};

export default Layout;
