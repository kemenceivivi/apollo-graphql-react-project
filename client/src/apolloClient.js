import { createHttpLink } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'http://localhost:5000',
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			headers: {
				...headers,
				authorization: localStorage.getItem('token') || '',
			},
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
