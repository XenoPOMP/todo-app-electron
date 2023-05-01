import cn from 'classnames';
import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { ProviderProps } from '@providers/Provider.props';

import useBodyClassnames from '@hooks/BodyClassnames';

import styles from './ThemeProvider.module.scss';

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
	useBodyClassnames([styles.themes, styles.dark]);

	return <>{children}</>;
};

export default ThemeProvider;
