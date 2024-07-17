import {createContext, useContext, useState} from 'react';

type UserContextType = {
	authenticated: boolean;
	token: string;
};

const UserContext = createContext<UserContextType | null>(null);

interface IUserProvider {
	authenticated: boolean;
	token: string;
	login: (token: string) => void;
	logout: () => void;
	children: React.ReactNode;
}
export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [token, setToken] = useState('');

	const login = (token: string) => {
		setAuthenticated(true);
		setToken(token);
	};

	const logout = () => {
		setAuthenticated(false);
		setToken('');
	};

	const value = { authenticated, token, login, logout };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
const useAuthContext = () => {
	const authContext = useContext(UserContext);
	if (!authContext) {
		throw new Error("useAuthContext must be used within the provider");
	}
	return useAuthContext;
};

