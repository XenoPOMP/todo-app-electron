import cn from 'classnames';
import { FC, useEffect } from 'react';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	const loc = useLocalization();

	return (
		<Page meta={loc.meta.mainPage}>
			<div className={cn(styles.container)}>
				<div></div>

				<div className={cn(styles.todoGroup)}></div>
			</div>
		</Page>
	);
};

export default MainPage;
