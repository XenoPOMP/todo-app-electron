import { ComponentType, ReactNode } from 'react';

export interface LazyComponentProps {
	element: () => Promise<{ default: ComponentType<any> }>;
	fallback: ReactNode;
}
