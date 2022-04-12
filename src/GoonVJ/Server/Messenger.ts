import Electron from 'electron';
import Message from '../Common/Message';

class Messenger {

	api: Electron.IpcMain;
	web: Electron.WebContents;

	constructor(api: Electron.IpcMain, web: Electron.WebContents) {
		this.api = api;
		this.web = web;
		return;
	}

	onRecvAsync(ev: Electron.IpcMainEvent, msg: Message):
	void {
		msg = Message.fromObject(msg);

		console.log(`[Server:Msg:onRecvAsync] << ${msg.toString()}`);

		return;
	};

	onRecvSync(ev: Electron.IpcMainEvent, msg: Message):
	void {
		msg = Message.fromObject(msg);

		console.log(`[Server:Msg:onRecvSync] << ${msg.toString()}`);

		return;
	};

	send(msg: Message):
	void {

		this.sendTo(
			'asynchronous-message',
			msg
		);

		return;
	};

	sendTo(name: string, msg: Message):
	void {

		console.log(`[Server:Msg:send] >> ${name} ${msg}`);
		this.web.send(name, msg);

		return;
	};

};

export default Messenger;
