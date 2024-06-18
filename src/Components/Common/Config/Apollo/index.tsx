// !! Packages
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient as createWsClient } from "graphql-ws";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";

// HTTP Link for queries and mutations
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const getUser_id = () => {
  const user_id = localStorage.getItem("user_id");
  return user_id ? `${JSON.parse(user_id)}` : "";
};

// Authentication link to add user ID to headers
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: getUser_id(),
    },
  };
});

// WebSocket Link for subscriptions
const wsLink = new GraphQLWsLink(
  createWsClient({
    url: import.meta.env.VITE_WEBSOCKET_URL,
    connectionParams: { Authorization: getUser_id() },
  })
);

// Function to check if the operation is a subscription
const isSubscription = ({ query }: any) => {
  const definition = getMainDefinition(query);
  console.log(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
};

// Apollo Client setup
const client = new ApolloClient({
  link: split(isSubscription, wsLink, authLink.concat(httpLink)),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-only",
    },
  },
});

interface ApolloProps {
  children: React.ReactNode;
}

const Apollo: React.FC<ApolloProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
