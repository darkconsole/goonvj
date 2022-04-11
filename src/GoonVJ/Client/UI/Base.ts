
class Base {

	root: JQuery;
	element: JQuery;

	constructor(root: JQuery) {

		this.root = root;

		this.element = (
			jQuery('<div />')
			.addClass('UIScreen')
			.append('yolo swag')
		);

		this.root.append(this.element);
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
