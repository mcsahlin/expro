import React, {createContext, useState, PropsWithChildren, useEffect} from 'react';

interface IAuthContext {
	bearer: string;
	setBearer: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children}: PropsWithChildren) => {
	const [state, setState] = useState<string>('');

	useEffect(() => {
		const token = localStorage.getItem('token');
		if(token) {
			setState(token);
		} else {
			setState('');
		}
	}, []);

	return(
		<AuthContext.Provider value={{ bearer: state, setBearer: setState}}>
			{children}
		</AuthContext.Provider>
	);

};

