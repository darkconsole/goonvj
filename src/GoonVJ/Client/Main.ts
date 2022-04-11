import Messenger from './Messenger';
import Message from '../Common/Message';
import ScreenHome from './UI/Home';

class Main {

	msg: Messenger;
	home: ScreenHome;
	root: JQuery;

	constructor() {
		this.msg = new Messenger;

		this.root = jQuery('#UIRoot');
		this.home = new ScreenHome(this.root);

		this.msg.send(new Message('hey'));
		return;
	};

};

export default Main;
