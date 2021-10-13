import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
	type Item {
		id: Int!
		title: String!
		description: String!
	}

	type Query {
		items: [Item]!
	}

	type Mutation {
		addItem(title: String!, description: String!): Item
		editItem(id: Int!, title: String!, description: String!): Item
		deleteItem(id: Int!): Item
	}
`;
