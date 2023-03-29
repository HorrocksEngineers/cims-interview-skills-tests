import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './reset.css';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);
const client = new ApolloClient({
  uri: 'https://cims.horrocks.com/reports-dev/graphql',
  cache: new InMemoryCache(),
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
