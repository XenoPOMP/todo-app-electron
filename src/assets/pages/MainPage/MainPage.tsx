import cn from 'classnames';
import { FC, useEffect } from 'react';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import styles from './MainPage.module.scss';
import type { MainPageProps } from './MainPage.props';

const MainPage: FC<MainPageProps> = ({}) => {
	const loc = useLocalization();

	return (
		<Page meta={loc.meta.mainPage}>
			<div className={cn(styles.container)}>
				<div className={cn(styles.titleBlock)}>
					<h2>{loc.pages.main.title}</h2>

					<div className={cn(styles.rightButtonGroup)}>
						<div className={cn(styles.button)}>
							<svg
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M8.88889 20V13.3333H11.1111V15.5556H20V17.7778H11.1111V20H8.88889ZM0 17.7778V15.5556H6.66667V17.7778H0ZM4.44444 13.3333V11.1111H0V8.88889H4.44444V6.66667H6.66667V13.3333H4.44444ZM8.88889 11.1111V8.88889H20V11.1111H8.88889ZM13.3333 6.66667V0H15.5556V2.22222H20V4.44444H15.5556V6.66667H13.3333ZM0 4.44444V2.22222H11.1111V4.44444H0Z' />
							</svg>
						</div>

						<div className={cn(styles.button)}>
							<svg
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10 0C8.89543 0 8 0.895431 8 2V8L2 8C0.895431 8 0 8.89543 0 10C0 11.1046 0.895431 12 2 12H8V18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18V12H18C19.1046 12 20 11.1046 20 10C20 8.89543 19.1046 8 18 8L12 8V2C12 0.895431 11.1046 0 10 0Z'
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className={cn(styles.todoGroup)}></div>
			</div>
		</Page>
	);
};

export default MainPage;
