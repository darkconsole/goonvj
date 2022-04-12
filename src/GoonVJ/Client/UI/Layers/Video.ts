import ScreenBase from '../Screens/Base';
import Message from '../../../Common/Message';

class Video {

	screen: ScreenBase;
	element: JQuery;
	video: JQuery;
	overlay: JQuery;

	constructor(screen: ScreenBase) {

		this.screen = screen;

		this.overlay = (
			jQuery('<div />')
			.addClass('UILayerOverlay')
			.append(
				jQuery('<div />')
				.addClass('row m-2')
				.append(
					jQuery('<div />')
					.addClass('col-auto')
					.append(
						jQuery('<button />')
						.addClass('btn btn-dark')
						.text('File...')
						.on('click', this.onFileChoose.bind(this))
					)
				)
			)
		);

		this.video = (
			jQuery('<video />')
			.addClass('position-absolutely object-fit-cover')
		);

		this.element = (
			jQuery('<div />')
			.addClass('UILayer')
			.append(this.video)
			.append(this.overlay)
		);

		this.screen.element.append(this.element);
		return;
	};

	onFileChoose(ev):
	this {

		window.goon.ipcRendererOnce(
			'video-file-choose-reply',
			this.onFileChooseReply.bind(this)
		);

		this.screen.main.msg
		.send(new Message('video-file-choose'));

		return this;
	};

	onFileChooseReply(ev, msg: Message):
	this {
		msg = Message.fromObject(msg);

		console.log(`[Client:ScreenTest:onFileChosen] ${msg}`);

		if(!Array.isArray(msg.payload))
		return;

		if(msg.payload.length === 0)
		return;

		this.video.find('source').remove();
		this.video.append(
			jQuery('<source />')
			.attr('src', msg.payload[0])
		);

		return this;
	};

};

export default Video;
