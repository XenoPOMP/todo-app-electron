import cn from 'classnames';
import { FC } from 'react';

import Layout from '@components/Layout/Layout';
import Page from '@components/Page/Page';

import styles from './SettingsPage.module.scss';
import type { SettingsPageProps } from './SettingsPage.props';

const SettingsPage: FC<SettingsPageProps> = ({}) => {
	return (
		<Page
			meta={{
				pageTitle: 'Settings',
				pageDescription: '',
				keywords: '',
			}}
		></Page>
	);
};

export default SettingsPage;
