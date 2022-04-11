
class Home {

	container: JQuery;

	constructor() {

		this.container = (
			jQuery('<div />')
			.attr('id', 'ScreenHome')
			.addClass('position-absolutely')
			.append('<i class="fa fa-fw fa-home"></i> home screen turn on')
		);

		jQuery('body')
		.append(this.container);

		return;
	};

};

export default Home;
