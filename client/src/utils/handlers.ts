type FormType = {
  login: 'login';
  signup: 'signup';
};
interface Props {
	setUsername: (value: string) => void;
	setPassword: (value: string) => void;
	setEmail: (value: string) => void;
	setConfirmPassword: (value: string) => void;
};
const handleChange<FormType> = (
  {{ formType: FormType },
	props: Props,
	e: React.ChangeEvent<HTMLInputElement>}}
) => {
	const { name, value } = e.target;
	const { setUsername, setPassword, setEmail, setConfirmPassword } = props;

	switch (formType) {
		case 'login':
			switch (name) {
				case 'username':
					setUsername(value);
					break;
				case 'password':
					setPassword(value);
					break;
				default:
					break;
			}
			break;

		case 'signup':
			switch (name) {
				case 'confirmPassword':
					setConfirmPassword(value);
					break;
				case 'email':
					setEmail(value);
					break;
				default:
					break;
			}
			break;
		default:
			break;
	}
}

export default handleChange;
