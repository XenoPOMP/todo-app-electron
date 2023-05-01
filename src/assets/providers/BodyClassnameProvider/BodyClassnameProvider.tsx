import cn from 'classnames';
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState,
} from 'react';

import { IBodyClassname } from '@providers/BodyClassnameProvider/body-classname.interface';

import styles from './BodyClassnameProvider.module.scss';
import type { BodyClassnameProviderProps } from './BodyClassnameProvider.props';

export const BodyClassnameContext = createContext<IBodyClassname>({
	classes: [],
	addClassName: () => {},
});

const BodyClassnameProvider: FC<
	PropsWithChildren<BodyClassnameProviderProps>
> = ({ children }) => {
	const [classList, setClassList] = useState<string[]>([]);

	useEffect(() => {
		document.body.className = cn(...classList);
	}, [classList]);

	return (
		<BodyClassnameContext.Provider
			value={{
				classes: classList,
				addClassName: className =>
					setClassList(prev => Array.from(new Set([...prev, ...className]))),
			}}
		>
			{children}
		</BodyClassnameContext.Provider>
	);
};

export default BodyClassnameProvider;
