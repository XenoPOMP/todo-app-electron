import cn from 'classnames';
import { CSSProperties, FC, ReactElement, useEffect, useState } from 'react';

import Loader from '@ui/Loader/Loader';

import styles from './ProgressiveImage.module.scss';
import { ProgressiveImageProps } from './ProgressiveImage.props';

const ProgressiveImage: FC<ProgressiveImageProps> = ({
	src,
	alt,
	className,
	style,
	loaderColorScheme,
}) => {
	const getInlineVariables = (): CSSProperties => {
		const { backgroundColor } = loaderColorScheme;

		return {
			'--loader-background': backgroundColor,
		} as CSSProperties;
	};

	// prettier-ignore
	const [element, setElement] = useState<ReactElement>(
    <div style={getInlineVariables()} className={cn(styles.loader)}>
			<Loader type={'circle'} mainColor={loaderColorScheme.loaderColor} />
    </div>
  );

	useEffect(() => {
		const img = new Image();
		img.src = src ? src : '';
		img.onload = () => {
			setElement(
				<img className={cn(className)} src={src} alt={alt} style={style} />
			);
		};
	}, [src]);

	return element;
};

export default ProgressiveImage;
