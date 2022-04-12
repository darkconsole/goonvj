import Electron from 'electron';
import Messenger from '../Server/Messenger';
import Message from '../Common/Message';

class Main {

	window: Electron.BrowserWindow;
	path: string;
	msg: Messenger;

	constructor(basepath: string){

		console.log('[ServerMain] Starting');

		this.path = basepath;

		const display = Electron.screen.getPrimaryDisplay();

		////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////

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

		////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////

		this.msg = new Messenger(
			Electron.ipcMain,
			this.window.webContents
		);

		this.msg.api.on(
			'asynchronous-message',
			this.onRecvAsync.bind(this)
		);

		this.msg.api.on(
			'synchronous-message',
			this.onRecvSync.bind(this)
		);

		////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////

		(this.window)
		.loadFile('../index.html')
		.then(() => {
			console.log('[ServerMain] Ready');
			this.window.show();
			return;
		});

		return;
	};

	onRecvAsync(ev: Electron.IpcMainEvent, msg: Message) {
		msg = new Message(msg.type, msg.payload);

		console.log(`[ServerMain:onRecvAsync] << ${msg.toString()}`);

		switch(msg.type) {
			case 'video-file-choose':
				this.onChooseVideoFile(ev, msg);
			break;
		}

		return;
	};

	onRecvSync(ev: Electron.IpcMainEvent, msg: Message) {
		msg = new Message(msg.type, msg.payload);

		console.log(`[ServerMain:onRecvSync] << ${msg.toString()}`);
		console.log(msg);
		return;
	};

	onChooseVideoFile(ev: Electron.IpcMainEvent, msg: Message) {

		let self = this;

		(Electron.dialog)
		.showOpenDialog(this.window, {
			properties: [ 'openFile' ]
		})
		.then(function(result: Electron.OpenDialogReturnValue) {

			self.msg.sendTo(
				'video-file-choose-reply',
				new Message(
					'video-file-list',
					result.filePaths.length === 0 ? null : result.filePaths
				)
			);

			return;
		});

		return;
	}

};

export default Main;
