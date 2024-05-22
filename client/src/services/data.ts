import { IUser } from '../models/IUser';

const user: IUser = {
	_id: 'admin1337',
	username: 'admin',
	email: 'admin@email.com',
	password: 'admin',
	role: 'admin',
	createdAt: new Date('2000_01_01'),
	updatedAt: new Date('2000_01_01'),
};

// Get the user from local storage
export const getUser = () => {
	return getLs('user');
};

// Set the user in local storage
export const setUser = (user: IUser) => {
	setLs('user', user);
};

const setLs = (key: string, value: any) => {
	localStorage.setItem(key, JSON.stringify(value));
};

// Remove the user from local storage
export const removeUser = () => {
	localStorage.removeItem('user');
};

setUser(user);

// Set the user in local storage
const getLs = (key: string): [] => {
	return JSON.parse(localStorage.getItem(key) ?? '[]');
};
