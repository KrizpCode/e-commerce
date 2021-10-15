import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  posted: Scalars['String'];
  price: Scalars['Float'];
  seller: User;
  sellerId: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addItem?: Maybe<Item>;
  deleteItem?: Maybe<Item>;
  editItem?: Maybe<Item>;
};


export type MutationAddItemArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['Int'];
};


export type MutationEditItemArgs = {
  category: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  items: Array<Maybe<Item>>;
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['String'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<Account>>>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  itemsForSale?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<Maybe<Session>>>;
};

export type AddItemMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  category: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  email: Scalars['String'];
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem?: { __typename?: 'Item', id: number, title: string, description: string, price: number, posted: string, category: string, image?: string | null | undefined, sellerId: string, seller: { __typename?: 'User', id: string, name?: string | null | undefined, image?: string | null | undefined } } | null | undefined };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem?: { __typename?: 'Item', id: number, title: string, description: string, price: number, posted: string, category: string, image?: string | null | undefined, sellerId: string, seller: { __typename?: 'User', id: string, name?: string | null | undefined, image?: string | null | undefined } } | null | undefined };

export type EditItemMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  category: Scalars['String'];
  image?: Maybe<Scalars['String']>;
}>;


export type EditItemMutation = { __typename?: 'Mutation', editItem?: { __typename?: 'Item', id: number, title: string, description: string, price: number, posted: string, category: string, image?: string | null | undefined, sellerId: string, seller: { __typename?: 'User', id: string, name?: string | null | undefined, image?: string | null | undefined } } | null | undefined };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: number, title: string, description: string, price: number, category: string, image?: string | null | undefined, seller: { __typename?: 'User', id: string, email?: string | null | undefined } } | null | undefined> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Account>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<Session>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Account;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Item: Item;
  Mutation: {};
  Query: {};
  Session: Session;
  String: Scalars['String'];
  User: User;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauth_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oauth_token_secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  providerAccountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  session_state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  seller?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  sellerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationAddItemArgs, 'category' | 'description' | 'email' | 'price' | 'title'>>;
  deleteItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'id'>>;
  editItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationEditItemArgs, 'category' | 'description' | 'id' | 'price' | 'title'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
};

export type SessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Session'] = ResolversParentTypes['Session']> = {
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  accounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Account']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemsForSale?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Session']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};



export const AddItemDocument = gql`
    mutation AddItem($title: String!, $description: String!, $price: Float!, $category: String!, $image: String, $email: String!) {
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
export type AddItemMutationFn = Apollo.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      category: // value for 'category'
 *      image: // value for 'image'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: Apollo.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, options);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
export const DeleteItemDocument = gql`
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
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const EditItemDocument = gql`
    mutation EditItem($id: Int!, $title: String!, $description: String!, $price: Float!, $category: String!, $image: String) {
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
export type EditItemMutationFn = Apollo.MutationFunction<EditItemMutation, EditItemMutationVariables>;

/**
 * __useEditItemMutation__
 *
 * To run a mutation, you first call `useEditItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editItemMutation, { data, loading, error }] = useEditItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      category: // value for 'category'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useEditItemMutation(baseOptions?: Apollo.MutationHookOptions<EditItemMutation, EditItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditItemMutation, EditItemMutationVariables>(EditItemDocument, options);
      }
export type EditItemMutationHookResult = ReturnType<typeof useEditItemMutation>;
export type EditItemMutationResult = Apollo.MutationResult<EditItemMutation>;
export type EditItemMutationOptions = Apollo.BaseMutationOptions<EditItemMutation, EditItemMutationVariables>;
export const GetItemsDocument = gql`
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
    `;

/**
 * __useGetItemsQuery__
 *
 * To run a query within a React component, call `useGetItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
      }
export function useGetItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetItemsQuery, GetItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetItemsQuery, GetItemsQueryVariables>(GetItemsDocument, options);
        }
export type GetItemsQueryHookResult = ReturnType<typeof useGetItemsQuery>;
export type GetItemsLazyQueryHookResult = ReturnType<typeof useGetItemsLazyQuery>;
export type GetItemsQueryResult = Apollo.QueryResult<GetItemsQuery, GetItemsQueryVariables>;