import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './SizesProvider.module.scss';
import type { SizesProviderProps } from './SizesProvider.props';

const SizesProvider: FC<PropsWithChildren<SizesProviderProps>> = ({
	children,
}) => {
	return <div className={cn(styles.sizes)}>{children}</div>;
};

export default SizesProvider;
