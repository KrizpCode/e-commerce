import { IResolvers } from '@graphql-tools/utils';
import { PrismaPromise } from '@prisma/client';

import { prisma } from '../lib/prisma';

import {
	Item,
	MutationAddItemArgs,
	MutationEditItemArgs,
	MutationDeleteItemArgs,
} from './generated';

export const resolvers: IResolvers = {
	Query: {
		items: (): PrismaPromise<Item[]> => {
			return prisma.item.findMany({
				orderBy: {
					id: 'asc',
				},
			});
		},
	},

	Mutation: {
		addItem: (
			_parent: void,
			{ title, description }: MutationAddItemArgs
		): PrismaPromise<Item> => {
			return prisma.item.create({ data: { title, description } });
		},

		editItem: (
			_parent: void,
			{ id, title, description }: MutationEditItemArgs
		): PrismaPromise<Item> => {
			return prisma.item.update({
				where: { id },
				data: { title, description },
			});
		},

		deleteItem: (
			_parent: void,
			{ id }: MutationDeleteItemArgs
		): PrismaPromise<Item> => {
			return prisma.item.delete({
				where: { id },
			});
		},
	},
};
