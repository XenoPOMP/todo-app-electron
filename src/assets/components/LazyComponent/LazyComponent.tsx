import { FC, Suspense, lazy } from 'react';

import type { LazyComponentProps } from './LazyComponent.props';

const LazyComponent: FC<LazyComponentProps> = ({ element, fallback }) => {
	const LazyElement = lazy(element);

	return (
		<Suspense fallback={fallback}>
			<LazyElement />
		</Suspense>
	);
};

export default LazyComponent;
