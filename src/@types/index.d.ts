import Electron from 'electron';

declare global {
	interface Window {
		goon: {
			ipcRendererSend: Function,
			ipcRendererOn: Function
		}
	}
}
