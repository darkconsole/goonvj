import GoonVJ from '../../../Client/Main';
import Message from '../../../Common/Message';
import ScreenBase from './Base';
import VideoLayer from '../Layers/Video';


class Test
extends ScreenBase {

	vid: VideoLayer;

	constructor(main: GoonVJ) {
		super(main);

		this.vid = new VideoLayer(this);

		return;
	};

};

export default Test;
