import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
    mutation AddItem(
        $title: String!
        $description: String!
        $price: Float!
        $category: String!
        $image: String
        $email: String!
    ) {
        addItem(
            title: $title
            description: $description
            price: $price
            category: $category
            image: $image
            email: $email
        ) {
            id
            title
            description
            price
            posted
            category
            image
            seller {
                id
                name
                image
            }
            sellerId
        }
    }
`;

export const REMOVE_ITEM = gql`
    mutation DeleteItem($id: Int!) {
        deleteItem(id: $id) {
            id
            title
            description
            price
            posted
            category
            image
            seller {
                id
                name
                image
            }
            sellerId
        }
    }
`;

export const EDIT_ITEM = gql`
    mutation EditItem(
        $id: Int!
        $title: String!
        $description: String!
        $price: Float!
        $category: String!
        $image: String
    ) {
        editItem(
            id: $id
            title: $title
            description: $description
            price: $price
            category: $category
            image: $image
        ) {
            id
            title
            description
            price
            posted
            category
            image
            seller {
                id
                name
                image
            }
            sellerId
        }
    }
`;
