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
                email
            }
        }
    }
`;
