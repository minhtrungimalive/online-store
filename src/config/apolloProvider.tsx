import React, { FunctionComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

/* https://www.apollographql.com/docs/react/get-started/ */

const serverUrl = 'https://48p1r2roz4.sse.codesandbox.io';

const clientApollo = new ApolloClient({
  uri: serverUrl,
});

const RootApolloProvider: FunctionComponent<{}> = props => {
  const { children } = props;
  return <ApolloProvider client={clientApollo}>{children}</ApolloProvider>;
};

export default RootApolloProvider;
