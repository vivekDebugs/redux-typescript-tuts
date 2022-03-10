import { IUser, ActionType } from '../types'
import Actions from './actionTypes'

export const addUser = (user: IUser): ActionType => ({
  type: Actions.ADD_USER,
  payload: user,
})

export const deleteUser = (userId: number): ActionType => ({
  type: Actions.DELETE_USER,
  payload: userId,
})
