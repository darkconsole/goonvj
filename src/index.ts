import Electron from 'electron';
import GoonVJ from './GoonVJ/Server/Main';

Electron.app.on('ready', function(){
	const server = new GoonVJ(__dirname);
	return;
});

