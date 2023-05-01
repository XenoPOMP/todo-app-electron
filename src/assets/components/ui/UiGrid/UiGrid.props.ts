import { CSSProperties } from 'react';

import { GridSettings } from '@utils/getUiSx';

export interface UiGridProps extends GridSettings {
	className?: string;
	style?: CSSProperties;
}
