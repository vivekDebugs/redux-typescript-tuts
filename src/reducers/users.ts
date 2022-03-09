import { Reducer } from 'redux'
import { IUser, Actions, ActionType } from '../types'

export const usersReducer: Reducer<IUser[], ActionType> = (
  state = [],
  action
) => {
  switch (action.type) {
    case Actions.ADD_USER:
      return [...state, action.payload]

    case Actions.DELETE_USER:
      const newUsers = [...state].filter((u: IUser) => u.id !== action.payload)
      return newUsers

    default:
      return [...state]
  }
}
