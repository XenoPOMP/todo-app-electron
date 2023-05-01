import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';

import getUiSx from '@utils/getUiSx';

import styles from './UiGrid.module.scss';
import type { UiGridProps } from './UiGrid.props';

const UiGrid: FC<PropsWithChildren<UiGridProps>> & {
	Section: FC<PropsWithChildren<UiGridProps>>;
	Article: FC<PropsWithChildren<UiGridProps>>;
} = ({ children, className, cols, rows, gap, maxWidth, style }) => {
	return (
		<div
			style={{
				...getUiSx({
					cols,
					rows,
					gap,
					maxWidth,
				}),
				...style,
			}}
			className={cn(styles.grid, className)}
		>
			{children}
		</div>
	);
};

UiGrid.Section = ({
	children,
	className,
	cols,
	rows,
	gap,
	maxWidth,
	style,
}) => (
	<section
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
			...style,
		}}
		className={cn(styles.grid, className)}
	>
		{children}
	</section>
);

UiGrid.Article = ({
	children,
	className,
	cols,
	rows,
	gap,
	maxWidth,
	style,
}) => (
	<article
		style={{
			...getUiSx({
				cols,
				rows,
				gap,
				maxWidth,
			}),
			...style,
		}}
		className={cn(styles.grid, className)}
	>
		{children}
	</article>
);

export default UiGrid;
