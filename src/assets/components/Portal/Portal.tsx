import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Portal.module.scss';
import type { PortalProps } from './Portal.props';

const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, enabled }) => {
	return <>{enabled && <>{children}</>}</>;
};

export default Portal;
