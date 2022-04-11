import Messenger from './Messenger';
import Message from '../Common/Message';
import ScreenHome from './UI/Home';

class Main {

	msg: Messenger;
	home: ScreenHome;

	constructor() {
		this.msg = new Messenger;
		this.home = new ScreenHome;

		this.msg.send(new Message('hey'));
		return;
	};

};

export default Main;
