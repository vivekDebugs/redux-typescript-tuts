import Actions from './actions/actionTypes'

export type { RootStateType } from './reducers'

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
