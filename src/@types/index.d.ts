import Electron from 'electron';
import Message from '../GoonVJ/Common/Message';

declare global {

	type IpcRendererCallable = (
		(ev: Electron.IpcRendererEvent, msg: Message)
		=> void
	);

	interface Window {
		goon: {

			screenHeight: number,
			screenWidth: number,
			screenRatio: number,
			screenRatioInverted: number,

			ipcRendererSend:
			((msg: Message)=> void),

			ipcRendererSendTo:
			((name: string, msg: Message)=> void),

			ipcRendererOn:
			((name: string, handler: IpcRendererCallable)=> void),

			ipcRendererOnMsg:
			((handler: IpcRendererCallable)=> void),

			ipcRendererOnce:
			((name: string, handler: IpcRendererCallable)=> void),

			ipcRendererCancelListen:
			((name: string)=> void)

		}
	}
}
