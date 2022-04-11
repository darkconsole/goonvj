import ElectronReloader from 'electron-reloader';
import Electron from 'electron';
import GoonVJ from './GoonVJ/Server/Main';

ElectronReloader(module);

Electron.app.on('ready', function(){
	const server = new GoonVJ(__dirname);
	return;
});
