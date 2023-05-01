import { MainPageLocales } from '@localization/types/main-page-locales';
import { MetaLocales } from '@localization/types/meta-locales';

export interface Localization extends MetaLocales {
	pages: {
		main: MainPageLocales;
	};
}
