import Electron from 'electron';
import Message from './GoonVJ/Common/Message';
import ScreenInfo from './GoonVJ/Common/ScreenInfo';

type IpcRendererCallable = (
	(ev: Electron.IpcRendererEvent, msg: Message)
	=> void
);

let screenInfo = new ScreenInfo;

(Electron.contextBridge)
.exposeInMainWorld('goon', {
	'screenWidth': screenInfo.w,
	'screenHeight': screenInfo.h,
	'screenRatio': screenInfo.r,
	'screenRatioInverted': screenInfo.ri,

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
