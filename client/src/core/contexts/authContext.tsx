import React, {
	createContext,
	ReactNode,
	useReducer,
	PropsWithChildren,
} from 'react';
import axios from 'axios';

// Define the AuthState interface
interface AuthState {
	// Define properties for the AuthState interface
	token: string | null;
	isAuthenticated: boolean;
	loading: boolean;
	user: any | null;
	error?: string | null;
}

// Define the AuthContextProps interface
interface AuthContextProps extends AuthState {
	// Define methods for the AuthContextProps interface
	login: (data: any) => void;
	register: (data: any) => void;
	loadUser: () => void;
	logout: () => void;
	clearErrors: () => void;
}

// Define interface for register form
interface RegisterFormData {
	email: string;
	password: string;
}

// Define interface for login form
interface LoginFormData {
	email: string;
	password: string;
}

// Create a context for the AuthContextProps interface
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Define the API_URL constant
const { API_URL } = process.env as { API_URL: string };

// Define the initialState of the AuthState interface
const initialState: AuthState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: true,
	user: null,
	error: null,
};

// Define action types
type AuthAction =
	| { type: 'USER_LOADED'; payload: any }
	| { type: 'REGISTER_SUCCESS'; payload: { token: string } }
	| { type: 'LOGIN_SUCCESS'; payload: { token: string } }
	| { type: 'AUTH_ERROR'; payload: string }
	| { type: 'CLEAR_ERRORS'; payload: null }
	| { type: 'LOGIN_FAIL'; payload: string }
	| { type: 'LOGOUT'; payload?: string }
	| { type: 'REGISTER_FAIL'; payload: string };

// Define the authReducer function
const authReducer: React.Reducer<AuthState, AuthAction> = (state, action) => {
	switch (action.type) {
		case 'USER_LOADED':
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload,
				error: null,
			};
		case 'REGISTER_SUCCESS':
		case 'LOGIN_SUCCESS':
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false,
				error: null,
			};
		case 'AUTH_ERROR':
		case 'LOGIN_FAIL':
		case 'LOGOUT':
		case 'REGISTER_FAIL':
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

// Define the AuthProvider component
export const AuthProvider = ({ children }: PropsWithChildren<ReactNode>) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	// Define user-loading function
	const loadUser = async () => {
		if (localStorage.token) {
			axios.defaults.headers.common['x-auth-token'] = localStorage.token;
		}

		try {
			// Try to load the user
			const res = await axios.get(`${API_URL}/auth`);
			dispatch({ type: 'USER_LOADED', payload: res.data });
		} catch (error: any) {
			// Handle errors
			dispatch({ type: 'AUTH_ERROR', payload: error.response.data.error });
		}
	};

	// Define the register function
	const register = async (formData: RegisterFormData) => {
		try {
			// Try to register the user
			const res = await axios.post('/api/users/register', formData);
			dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
			loadUser();
		} catch (err: any) {
			// Handle any errors
			dispatch({ type: 'REGISTER_FAIL', payload: err.response.data.msg });
		}
	};

	const login = async (formData: LoginFormData) => {
		try {
			// Try to login the user
			const res = await axios.post('/api/users/login', formData);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
			loadUser();
		} catch (err: any) {
			// Handle any errors
			dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.msg });
		}
	};

	const logout = () => dispatch({ type: 'LOGOUT' });

	const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS', payload: null });

	return (
		<AuthContext.Provider
			value={{ ...state, register, login, loadUser, logout, clearErrors }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
