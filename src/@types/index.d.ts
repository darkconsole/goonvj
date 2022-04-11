import Electron from 'electron';

declare global {
	interface Window {
		goon: {

			screenHeight: number,
			screenWidth: number,
			screenRatio: number,
			screenRatioInverted: number,

			ipcRendererSend: Function,
			ipcRendererOn: Function

		}
	}
}
