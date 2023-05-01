import { useDispatch, useSelector } from 'react-redux';

import { Language, changeLang } from '@redux/reducers/appSettingsSlice';
import IStore from '@redux/types/redux-types';

interface SettingController<T> {
	get: () => T;
	set: (newValue: T) => void;
}

interface IUseAppSettings {
	appVersion: Omit<SettingController<string>, 'set'>;
	language: SettingController<Language>;
}

const useAppSettings = (): IUseAppSettings => {
	const dispatch = useDispatch();

	return {
		appVersion: {
			get: () => useSelector((state: IStore) => state.appSettings.appVersion),
		},

		language: {
			get: () => useSelector((state: IStore) => state.appSettings.language),
			set: newValue => dispatch(changeLang(newValue)),
		},
	};
};

export default useAppSettings;
