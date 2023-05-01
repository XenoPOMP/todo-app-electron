import { FC, PropsWithChildren } from 'react';

import Layout from '@components/Layout/Layout';
import MetaTitle from '@components/MetaTitle/MetaTitle';

import { PageProps } from './Page.props';

const Page: FC<PropsWithChildren<PageProps>> = ({ meta, children }) => {
	return (
		<Layout>
			<MetaTitle
				pageTitle={meta.pageTitle}
				pageDescription={meta.pageDescription}
				keywords={meta.keywords}
			/>
			{children}
		</Layout>
	);
};

export default Page;
