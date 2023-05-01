import { Localization } from '@localization/Localization';

import en from '@locales/en';
import ru from '@locales/ru';

import useAppSettings from '@hooks/useAppSettings';

const useLocalization = (): Localization => {
	const { language } = useAppSettings();

	switch (language.get()) {
		case 'en':
			return en;
		case 'ru':
			return ru;
	}
};

export default useLocalization;
