import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

const configLink = {
  uri: `https://rickandmortyapi.com/graphql`
};

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <App graphqlClient={graphqlClient} />
  , document.getElementById('root'));

