export class User {
	_id: string | undefined;
	password: string | undefined;
	username: string | undefined;
	auth: boolean | undefined;

	constructor() {
		this.setDefault();
	}

	setAuth(auth: boolean) {
		this.auth = auth;
	}

	getAuth() {
		return this.auth;
	}

	setUsername(username: string) {
		this.username = username;
	}

	getUsername() {
		return this.username;
	}

	setPassword(password: string) {
		this.password = password;
	}

	getPassword() {
		return this.password;
	}

	setId(_id: string) {
		this._id = _id;
	}

	getId() {
		return this._id;
	}

	setDefault() {
		this._id = '';
		this.password = '';
		this.username = '';
		this.auth = false;
	}

	setAll(_id: string, password: string, username: string, auth: boolean) {
		this._id = _id;
		this.password = password;
		this.username = username;
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
