
class Message {

	type: string;
	payload: any;

	constructor(type: string, payload: any = null) {
		this.type = type;
		this.payload = payload;
		return;
	}

	toString():
	string {
		return JSON.stringify(this);
	}

};

export default Message;
