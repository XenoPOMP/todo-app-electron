import { createSlice } from '@reduxjs/toolkit';

import { ReduxAction } from '@redux/types/redux-types';

export type Language = 'en' | 'ru';

export type AppSettings = {
	appVersion: string;
	language: Language;
	cookiePrefix: string;
};

const initialState: AppSettings = {
	appVersion: '0.0.3',
	language: 'en',
	cookiePrefix: 'application',
};

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		loadAppSettings(state, action: ReduxAction<AppSettings>) {
			state.language = action.payload.language;
		},

		changeLang(state, action: ReduxAction<any>) {
			state.language = action.payload;
		},
	},
});

export default appSettingsSlice.reducer;
export const { changeLang, loadAppSettings } = appSettingsSlice.actions;
export const initialAppSettings = appSettingsSlice.getInitialState();
