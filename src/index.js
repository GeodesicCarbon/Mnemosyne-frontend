import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { setContext } from 'apollo-link-context'
import App from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})



const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
