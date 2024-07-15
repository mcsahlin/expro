import React, { createContext } from 'react';
import { IUser } from '../ts/models/IUser.ts';

/* Interface */
export interface IUserContext {
	user: IUser | null;
	setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

/* Context */
export const UserContext = createContext<IUserContext>({
	user: null,
	setUser: () => {},
});

/* Provider */
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	/* Default User Object */
	const defaultUser: IUser = {
		_id: '',
		email: '',
		password: '',
		uid: '',
		role: '',
		createdAt: new Date,
		updatedAt: new Date,
	};
	const [user, setUser] = React.useState<IUser | null>(defaultUser);

	/* Memoized Value to avoid re-rendering */
	const value = React.useMemo(
		() => ({
			user,
			setUser,
		}),
		[user]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
