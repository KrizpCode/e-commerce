import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Item {
    id: Int!
    title: String!
    description: String!
    price: Float!
    posted: String!
    category: String!
    image: String
    seller: User!
    sellerId: String!
  }

  type Account {
    id: String!
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    oauth_token_secret: String
    oauth_token: String
    user: User!
  }

  type Session {
    id: String!
    sessionToken: String!
    userId: String!
    expires: String!
    user: User!
  }

  type User {
    id: String!
    name: String
    email: String
    emailVerified: String
    image: String
    accounts: [Account]
    sessions: [Session]
    itemsForSale: [Item]
  }

  type Query {
    items: [Item]!
  }

  type Mutation {
    addItem(
      title: String!
      description: String!
      price: Float!
      category: String!
      image: String
      email: String!
    ): Item
    editItem(
      id: Int!
      title: String!
      description: String!
      price: Float!
      category: String!
      image: String
    ): Item
    deleteItem(id: Int!): Item
  }
`;
