import Electron from 'electron';
import Messenger from '../Server/Messenger';

class Main {

	window: Electron.BrowserWindow;
	path: string;
	msg: Messenger;

	constructor(basepath: string){
		console.log('[Server:Main] Starting');

		const display = Electron.screen.getPrimaryDisplay();

		this.path = basepath;

		this.window = new Electron.BrowserWindow({
			show: false,
			width: 1280,
			backgroundColor: '#000000',
			webPreferences: {
				images: true,
				javascript: true,
				webgl: true,
				preload: this.path + '/preload.js'
			}
		});

		this.window.webContents.closeDevTools();
		this.window.setMenuBarVisibility(false);
		this.window.setAspectRatio(display.workAreaSize.width / display.workAreaSize.height);

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
