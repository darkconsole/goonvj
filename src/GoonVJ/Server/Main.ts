import Electron from 'electron';
import Messenger from '../Server/Messenger';

class Main {

	window: Electron.BrowserWindow;
	path: string;
	msg: Messenger;

	constructor(basepath: string){
		console.log('[Server:Main] Starting');

		this.path = basepath;

		this.window = new Electron.BrowserWindow({
			show: false,
			width: 1280,
			height: 720,
			backgroundColor: '#000000',
			webPreferences: {
				images: true,
				javascript: true,
				preload: this.path + '/preload.js'
			}
		});

		this.window
		.setMenuBarVisibility(false);

		this.msg = new Messenger(
			Electron.ipcMain,
			this.window.webContents
		);

		////////

		(this.window)
		.loadFile('../index.html')
		.then(() => {
			console.log('[Server:Main] Ready');
			this.window.show();
			return;
		});

		return;
	};

};

export default Main;
