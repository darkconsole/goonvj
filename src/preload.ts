import Electron from 'electron';
import Message from './GoonVJ/Common/Message';
import ScreenInfo from './GoonVJ/Common/ScreenInfo';

let screenInfo = new ScreenInfo;

(Electron.contextBridge)
.exposeInMainWorld('goon', {
	screenWidth: screenInfo.w,
	screenHeight: screenInfo.h,
	screenRatio: screenInfo.r,
	screenRatioInverted: screenInfo.ri,

	ipcRendererSend: function(msg: Message) {

		(Electron.ipcRenderer)
		.send('asynchronous-message', msg);

		return;
	},
	ipcRendererSendTo: function(name: string, msg: Message) {

		(Electron.ipcRenderer)
		.send(name, msg);

		return;
	},
	ipcRendererOn: function(name: string, handler: IpcRendererCallable) {

		(Electron.ipcRenderer)
		.on(name, handler);

		return;
	},
	ipcRendererOnMsg: function(handler: IpcRendererCallable) {

		(Electron.ipcRenderer)
		.on('asynchronous-message', handler);

		return;
	},
	ipcRendererOnce: function(name: string, handler: IpcRendererCallable) {

		(Electron.ipcRenderer)
		.once(name, handler);

		return;
	},
	ipcRendererCancelListen: function(name: string) {

		(Electron.ipcRenderer)
		.removeAllListeners(name);

		return;
	}

});

console.log('Preloader Done');
