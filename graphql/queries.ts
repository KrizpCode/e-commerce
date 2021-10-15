import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query getItems {
    items {
      id
      title
      description
      price
      category
      image
      seller {
        id
        email
      }
    }
  }

  query getUserById($id: String!) {
    user(id: $id) {
      id
      email
      name
      emailVerified
      image
      itemsForSale {
        title
      }
    }
  }
`;
