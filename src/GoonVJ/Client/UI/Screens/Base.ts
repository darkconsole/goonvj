import GoonVJ from '../../../Client/Main';

class Base {

	main: GoonVJ;
	element: JQuery;

	constructor(main: GoonVJ) {

		this.main = main;

		this.element = (
			jQuery('<div />')
			.addClass('UIScreen')
		);

		this.main.root.append(this.element);
		return;
	};

	applyScreenValues(el: JQuery):
	Base {

		el.css({
			'--screenWidth': window.goon.screenWidth,
			'--screenHeight': window.goon.screenHeight,
			'--screenRatio': window.goon.screenRatio,
			'--screenRatioInverted': window.goon.screenRatioInverted
		});

		return this;
	}

};

export default Base;
