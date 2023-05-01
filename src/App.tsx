import { MemoryRouter, Route, Routes } from 'react-router-dom';

import MainPage from '@pages/MainPage/MainPage';
import SettingsPage from '@pages/SettingsPage/SettingsPage';

import './App.scss';

console.log(
	'[App.tsx]',
	`Hello world from Electron ${process.versions.electron}!`
);

function App() {
	return (
		<MemoryRouter>
			<Routes>
				<Route path={'/'} element={<MainPage />} />

				<Route path={'/settings'} element={<SettingsPage />} />
			</Routes>
		</MemoryRouter>
	);
}

export default App;
