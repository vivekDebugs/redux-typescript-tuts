import { RootStateType } from './reducers'

export type { RootStateType }

export enum Actions {
  ADD_POST = 'posts/addPost',
  DELETE_POST = 'posts/deletePost',
  ADD_USER = 'users/addUser',
  DELETE_USER = 'users/deleteUser',
}

export interface IPost {
  id: number
  title: string
  content: string
}

export interface IUser {
  id: number
  name: string
  imgUrl: string
}

export type ActionType =
  | { type: typeof Actions.ADD_POST; payload: IPost }
  | { type: typeof Actions.DELETE_POST; payload: number }
  | { type: typeof Actions.ADD_USER; payload: IUser }
  | { type: typeof Actions.DELETE_USER; payload: number }
