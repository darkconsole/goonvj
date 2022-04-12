import Message from '../Common/Message';

import Electron from 'electron'; // types-only

class Messenger {

	constructor() {

		(window.goon)
		.ipcRendererOnMsg(this.onRecvAsync.bind(this));

		return;
	};

	onRecvAsync(ev: Electron.IpcRendererEvent, msg: Message) {
		msg = new Message(msg.type, msg.payload);

		console.log(`[Msg:onAsync] << ${msg}`);

		return;
	};

	send(msg: Message):
	this {

		console.log(`[Msg:send] >> ${msg}`);

		(window.goon)
		.ipcRendererSend(msg);

		return this;
	};

	sendTo(name: string, msg: Message):
	this {

		console.log(`[Msg:send] >> ${name} ${msg}`);

		(window.goon)
		.ipcRendererSendTo(name, msg);

		return this;
	}

};

export default Messenger;
