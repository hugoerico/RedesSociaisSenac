import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://willing-killdeer-91.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'XHiRl0ymwEgbl551Bqpc5iVC0e35Zv2pIO7VRN4I4faEJV48J7bSlIS3gvKk6mbB'},
    cache: new InMemoryCache()
});

export default client;