import { AppSettings } from '@redux/reducers/appSettingsSlice';

interface IStore {
  appSettings: AppSettings;
}

export type ReduxAction<A> = {
  payload: A,
  type: string,
};

export default IStore;
