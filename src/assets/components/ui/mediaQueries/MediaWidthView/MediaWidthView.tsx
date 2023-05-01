import { FC, PropsWithChildren, useEffect } from 'react';
import Media from 'react-media';

import ArgumentError from '@errors/ArgumentError';

import { MediaWidthViewProps } from './MediaWidthView.props';

const MediaWidthView: FC<PropsWithChildren<MediaWidthViewProps>> = ({
	children,
	maxWidth,
	minWidth,
}) => {
	useEffect(() => {
		// Min width > Max width
		if (
			minWidth !== undefined &&
			maxWidth !== undefined &&
			minWidth > maxWidth
		) {
			throw new ArgumentError(`Min width can\`t be bigger than max width`);
		}

		// Check if min width is negative
		if (minWidth !== undefined && minWidth < 0) {
			throw new ArgumentError(`Min width can\`t be negative`);
		}
		// Check if max width is negative
		if (maxWidth !== undefined && maxWidth < 0) {
			throw new ArgumentError(`Max width can\`t be negative`);
		}
	}, []);

	const getQuery = (): string => {
		let leftPart = '';
		let connection = '';
		let rightPart = '';

		if (minWidth !== undefined) {
			leftPart = `(min-width: ${minWidth}px)`;
		}

		if (maxWidth !== undefined && minWidth !== undefined) {
			connection = ` and `;
		}

		if (maxWidth !== undefined) {
			rightPart = `(max-width: ${maxWidth}px)`;
		}

		return `screen and ${leftPart}${connection}${rightPart}`;
	};

	return <Media query={getQuery()} render={() => <>{children}</>} />;
};

export default MediaWidthView;
