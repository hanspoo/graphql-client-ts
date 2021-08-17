import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createToDo?: Maybe<ToDo>;
  updateToDo?: Maybe<ToDo>;
  deleteToDo?: Maybe<ToDo>;
  deleteToDos: Array<ToDo>;
};


export type MutationCreateToDoArgs = {
  toDoInput?: Maybe<ToDoInput>;
};


export type MutationUpdateToDoArgs = {
  toDoId: Scalars['ID'];
  toDoInput?: Maybe<ToDoInput>;
};


export type MutationDeleteToDoArgs = {
  toDoId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getToDo: ToDo;
  getToDos: Array<ToDo>;
};


export type QueryGetToDoArgs = {
  toDoId: Scalars['ID'];
};

export type ToDo = {
  __typename?: 'ToDo';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type ToDoInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

