import Electron from 'electron';
import Message from './GoonVJ/Common/Message';

type IpcRendererCallable = (
	(ev: Electron.IpcRendererEvent, msg: Message)
	=> void
);

(Electron.contextBridge)
.exposeInMainWorld('goon', {
	'ipcRendererSend': function(msg: Message) {

		(Electron.ipcRenderer)
		.send('asynchronous-message', msg);

		return;
	},
	'ipcRendererOn': function(handler: IpcRendererCallable) {

		(Electron.ipcRenderer)
		.on('asynchronous-message', handler);

		return;
	}
});

console.log('Preloader Done');
