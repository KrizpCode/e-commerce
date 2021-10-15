import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const apolloServer = new ApolloServer({
  schema: executableSchema,
});

const cors = Cors();

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
