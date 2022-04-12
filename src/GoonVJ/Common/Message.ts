
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

	static fromObject(input: { type: string, payload: any }):
	Message {

		return new Message(input.type, input.payload);
	}

};

export default Message;
