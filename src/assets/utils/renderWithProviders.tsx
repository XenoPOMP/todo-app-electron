import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { store } from '@redux/index';

export interface RenderOptions {
	useRedux?: boolean;
	useRouter?: boolean;
	useQuery?: boolean;
}

type Wrapper = (ui: JSX.Element) => JSX.Element;

const wrapInRedux: Wrapper = ui => {
	return <ReduxProvider store={store}>{ui}</ReduxProvider>;
};

const wrapInRouter: Wrapper = ui => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={ui} />
			</Routes>
		</Router>
	);
};

const wrapInReactQuery: Wrapper = ui => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: true,
				// refetchInterval: 5000
			},
		},
	});

	return <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>;
};

const renderWithProviders = (ui: JSX.Element, options?: RenderOptions) => {
	const renderOptions: RenderOptions = {
		useRedux: false,
		useRouter: false,
		useQuery: false,
		...options,
	};
	let renderUi: JSX.Element = ui;

	if (renderOptions.useRedux) {
		renderUi = wrapInRedux(renderUi);
	}

	if (renderOptions.useRouter) {
		renderUi = wrapInRouter(renderUi);
	}

	if (renderOptions.useQuery) {
		renderUi = wrapInReactQuery(renderUi);
	}

	return render(renderUi);
};

export default renderWithProviders;
