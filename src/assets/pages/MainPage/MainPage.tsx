import cn from 'classnames';
import { FC, useEffect } from 'react';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	const loc = useLocalization();

	return <Page meta={loc.meta.mainPage}></Page>;
};

export default MainPage;
