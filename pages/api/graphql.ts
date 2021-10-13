import { gql, ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = gql`
	type Item {
		id: Int
		title: String
		description: String
	}

	type Query {
		items: [Item]
	}

	type Mutation {
		addItem(title: String!, description: String!): Item
		editItem(id: Int!, title: String!, description: String!): Item
		deleteItem(id: Int!): Item
	}
`;

const resolvers = {
	Query: {
		items: () => {
			return prisma.item.findMany();
		},
	},

	Mutation: {
		addItem: (
			_parent: void,
			{ title, description }: { title: string; description: string }
		) => {
			return prisma.item.create({ data: { title, description } });
		},

		editItem: (
			_parent: void,
			{
				id,
				title,
				description,
			}: { id: number; title: string; description: string }
		) => {
			return prisma.item.update({
				where: { id },
				data: { title, description },
			});
		},

		deleteItem: (_parent: void, { id }: { id: number }) => {
			return prisma.item.delete({
				where: { id },
			});
		},
	},
};

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
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
