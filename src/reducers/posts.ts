import { Reducer } from 'redux'
import { IPost, Actions, ActionType } from '../types'

export const postsReducer: Reducer<IPost[], ActionType> = (
  state = [],
  action
) => {
  switch (action.type) {
    case Actions.ADD_POST:
      return [...state, action.payload]

    case Actions.DELETE_POST:
      const newPosts = [...state].filter((p: IPost) => p.id !== action.payload)
      return newPosts

    default:
      return [...state]
  }
}
