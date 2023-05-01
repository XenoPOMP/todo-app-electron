import cn from 'classnames';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	AppSettings,
	initialAppSettings,
	loadAppSettings,
} from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

import { ProviderProps } from '@providers/Provider.props';

import useAppSettings from '@hooks/useAppSettings';
import { useLocalStorage } from '@hooks/useLocalStorage';

import styles from './AppSettingsSaver.module.scss';
import type { AppSettingsSaverProps } from './AppSettingsSaver.props';

const AppSettingsSaver: FC<ProviderProps> = ({ children }) => {
	const appSettings: AppSettings = useSelector(
		(state: IStore) => state.appSettings
	);
	const dispatch = useDispatch();

	const [getCookieSettings, setCookieSettings] = useLocalStorage<AppSettings>(
		`${appSettings.cookiePrefix}-app-settings`,
		initialAppSettings
	);

	// Load app settings from cookie
	useEffect(() => {
		dispatch(loadAppSettings(getCookieSettings));
	}, []);

	// Save data to local storage
	useEffect(() => {
		setCookieSettings(appSettings);
	}, [appSettings.language]);

	return <>{children}</>;
};

export default AppSettingsSaver;
