import { IResolvers } from '@graphql-tools/utils';
import { PrismaPromise, Prisma } from '@prisma/client';

import { prisma } from '../lib/prisma';

import {
    MutationAddItemArgs,
    MutationEditItemArgs,
    MutationDeleteItemArgs,
} from './generated';

export const resolvers: IResolvers = {
    Query: {
        items: () => {
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
            {
                title,
                description,
                price,
                sellerId,
                category,
                image = '',
            }: MutationAddItemArgs
        ) => {
            return prisma.item.create({
                data: { title, description, price, sellerId, category, image },
            });
        },

        editItem: (
            _parent: void,
            { id, title, description }: MutationEditItemArgs
        ) => {
            return prisma.item.update({
                where: { id },
                data: { title, description },
            });
        },

        deleteItem: (_parent: void, { id }: MutationDeleteItemArgs) => {
            return prisma.item.delete({
                where: { id },
            });
        },
    },
};
