import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface IUiContainerNestedProps extends PropsWithChildren<UiContainerProps> {}

const UiContainer: FC<IUiContainerNestedProps> & {
	Section: FC<IUiContainerNestedProps>;
	Article: FC<IUiContainerNestedProps>;
	Header: FC<IUiContainerNestedProps>;
} = ({ children, className, style }) => {
	return (
		<div style={style} className={cn(styles.container, className)}>
			{children}
		</div>
	);
};

UiContainer.Section = ({ children, className, style }) => (
	<section style={style} className={cn(styles.container, className)}>
		{children}
	</section>
);
UiContainer.Article = ({ children, className, style }) => (
	<article style={style} className={cn(styles.container, className)}>
		{children}
	</article>
);
UiContainer.Header = ({ children, className, style }) => (
	<header style={style} className={cn(styles.container, className)}>
		{children}
	</header>
);

export default UiContainer;
