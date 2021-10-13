import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
	mutation AddItem($title: String!, $description: String!) {
		addItem(title: $title, description: $description) {
			id
			title
			description
		}
	}
`;

export const REMOVE_ITEM = gql`
	mutation DeleteItem($id: Int!) {
		deleteItem(id: $id) {
			id
			title
			description
		}
	}
`;

export const EDIT_ITEM = gql`
	mutation EditItem($id: Int!, $title: String!, $description: String!) {
		editItem(id: $id, title: $title, description: $description) {
			id
			title
			description
		}
	}
`;
