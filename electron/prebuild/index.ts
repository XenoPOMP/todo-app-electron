const path = require('path');

const editFile = require('edit-file');

const srcPath = path.join(__dirname, '../../');

const packageJsonPath = path.join(srcPath, 'package.json');
const slicePath = path.join(
	srcPath,
	'src/assets/redux/reducers/appSettingsSlice.ts'
);

// @ts-ignore
const packageVersion = require(packageJsonPath).version;

// Edit app settings slice.
// Update app version.
editFile(slicePath, (text: string) => {
	return text.replace(/appVersion: '.*'/gi, `appVersion: '${packageVersion}'`);
});
