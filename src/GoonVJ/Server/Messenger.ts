import Electron from 'electron';
import Message from '../Common/Message';

class Messenger {

	api: Electron.IpcMain;
	web: Electron.WebContents;

	constructor(api: Electron.IpcMain, web: Electron.WebContents) {
		this.api = api;
		this.web = web;

		this.api.on(
			'asynchronous-message',
			this.onAsync.bind(this)
		);

		this.api.on(
			'synchronous-message',
			this.onSync.bind(this)
		);

		return;
	}

	onAsync(ev: Electron.IpcMainEvent, msg: Message) {
		msg = new Message(msg.type, msg.payload);

		console.log(`[Server:Msg:onRecvAsync] << ${msg.toString()}`);
		this.send(new Message('sup'));
		return;
	};

	onSync(ev: Electron.IpcMainEvent, msg: Message) {
		msg = new Message(msg.type, msg.payload);

		console.log(`[Server:Msg:onRecvSync] << ${msg.toString()}`);
		console.log(msg);
		return;
	}

	send(msg: Message) {

		console.log(`[Server:Msg:send] >> ${msg}`);
		this.web.send('asynchronous-message', msg);

		return;
	}

};

export default Messenger;
