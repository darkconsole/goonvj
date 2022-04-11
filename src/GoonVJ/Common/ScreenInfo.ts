
class ScreenInfo {

	// screen size

	w: number;
	h: number;

	// screen ratios
	// css ready percentage strings

	r: string;
	ri: string;

	////////

	constructor() {

		// @todo 2022-04-11
		// fill from config with fallback to electron's values.

		this.w = 1920;
		this.h = 1080;

		this.r = (((this.w / this.h) * 100) + '%');
		this.ri = (((this.h / this.w) * 100) + '%');

		return;
	}

};

export default ScreenInfo;
