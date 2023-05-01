import { FC } from 'react';
// @ts-ignore
import DocumentMeta from 'react-document-meta';

import { MetaInfo } from './MetaInfo';

const MetaTitle: FC<MetaInfo> = ({ pageTitle, pageDescription, keywords }) => {
	const meta = {
		title: pageTitle,
		description: pageDescription,
		meta: {
			charset: 'utf-8',
			name: {
				keywords: keywords,
			},
		},
	};

	return <DocumentMeta {...meta}></DocumentMeta>;
};

export default MetaTitle;
