import { IPost, ActionType } from '../types'
import Actions from './actionTypes'

export const addPost = (post: IPost): ActionType => ({
  type: Actions.ADD_POST,
  payload: post,
})

export const deletePost = (postId: number): ActionType => ({
  type: Actions.DELETE_POST,
  payload: postId,
})
