import { gql } from 'apollo-server';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from '../utility/hooks';
import { useMutation } from '@apollo/client';
import { Container } from '@mui/material';
import { Stack } from '@mui/material';
import { TextField } from '@mui/material';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
	mutation Mutation($registerInput: RegisterInput) {
		registerUser(registerInput: $registerInput) {
			email
			username
			token
		}
	}
`;

function Register(props) {
	const context = useContext(AuthContext);
	let navigate = useNavigate();
	const [errors, setErrors] = useState([]);

	function registerUserCallback() {
		console.log('callback hit');
	}
	const { onChange, onSubmit, values } = useForm(registerUserCallback, {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		update(proxy, { data: { registerUser: userData } }) {
			context.login(userData);
			navigate('/');
		},
		onError({ graphQLErrors }) {
			setErrors(graphQLErrors);
		},
		variables: { registerInput: values },
	});

	return (
		<Container spacing={2} maxWidth='sm'>
			<h3>Register</h3>
			<p>Register page</p>
			<Stack spacing={2} paddingBottom={2}>
				<TextField label='Username' name='username' onChange={onChange} />
				<TextField label='Email' name='email' onChange={onChange} />
				<TextField label='Password' name='password' onChange={onChange} />
				<TextField label='Confirm password' name='confirm password' onChange={onChange} />
			</Stack>
		</Container>
	);
}

export default Register;
