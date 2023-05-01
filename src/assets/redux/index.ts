import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettingsSlice from '@redux/reducers/appSettingsSlice';

const rootReducer = combineReducers({
  appSettings: appSettingsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
