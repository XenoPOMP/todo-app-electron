import { FC } from 'react';

import AppSettingsSaver from '@providers/AppSettingsSaver/AppSettingsSaver';
import BodyClassnameProvider from '@providers/BodyClassnameProvider/BodyClassnameProvider';
import { ProviderProps } from '@providers/Provider.props';
import SizesProvider from '@providers/SizesProvider/SizesProvider';
import ThemeProvider from '@providers/ThemeProvider/ThemeProvider';

const GlobalProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<BodyClassnameProvider>
				<AppSettingsSaver>
					<SizesProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</SizesProvider>
				</AppSettingsSaver>
			</BodyClassnameProvider>
		</>
	);
};

export default GlobalProvider;
