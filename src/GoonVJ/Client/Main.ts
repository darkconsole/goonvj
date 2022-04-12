import Messenger from './Messenger';
import Message from '../Common/Message';
import ScreenHome from './UI/Screens/Home';
import ScreenTest from './UI/Screens/Test';

class Main {

	msg: Messenger;
	home: ScreenHome;
	root: JQuery;

	constructor() {
		this.msg = new Messenger;
		this.root = jQuery('#UIRoot');

		this.home = new ScreenTest(this);

		this.msg.send(new Message('hey'));
		return;
	};

};

export default Main;
