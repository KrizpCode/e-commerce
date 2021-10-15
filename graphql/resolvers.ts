import { IResolvers } from '@graphql-tools/utils';

import { prisma } from '../lib/prisma';

import {
    MutationAddItemArgs,
    MutationEditItemArgs,
    MutationDeleteItemArgs,
} from './generated';

export const resolvers: IResolvers = {
    Query: {
        items: async () => {
            const allItems = await prisma.item.findMany({
                orderBy: {
                    id: 'asc',
                },
                include: {
                    seller: {
                        include: {
                            itemsForSale: true,
                        },
                    },
                },
            });

            console.log(allItems);

            return allItems;
        },
    },

    Mutation: {
        addItem: async (
            _parent: void,
            {
                title,
                description,
                price,
                category,
                image = '',
                email,
            }: MutationAddItemArgs
        ) => {
            const seller = await prisma.user.findUnique({
                where: {
                    email,
                },
            });

            if (seller) {
                return await prisma.item.create({
                    data: {
                        title,
                        description,
                        price,
                        category,
                        image,
                        sellerId: seller.id,
                    },
                    include: {
                        seller: true,
                    },
                });
            }
        },

        editItem: (
            _parent: void,
            {
                id,
                title,
                description,
                price,
                category,
                image = '',
            }: MutationEditItemArgs
        ) => {
            return prisma.item.update({
                where: {
                    id,
                },
                data: {
                    title,
                    description,
                    price,
                    category,
                    image,
                },
                include: {
                    seller: true,
                },
            });
        },

        deleteItem: (_parent: void, { id }: MutationDeleteItemArgs) => {
            return prisma.item.delete({
                where: { id },
            });
        },
    },
};
