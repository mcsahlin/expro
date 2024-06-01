import { User } from './User';

export class Auth extends User {
	constructor() {
		super();
	}

	setDefault() {
		super.setDefault();
		this.auth = false;
	}

	setAll(_id: string, password: string, username: string, auth: boolean) {
		super.setAll(_id, password, username, auth);
		this.auth = auth;
	}

	getAll() {
		return {
			_id: this._id,
			password: this.password,
			username: this.username,
			auth: this.auth,
		};
	}
}
