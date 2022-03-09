import { IPost, ActionType, Actions } from '../types'

export const addPost = (post: IPost): ActionType => ({
  type: Actions.ADD_POST,
  payload: post,
})

export const deletePost = (postId: number): ActionType => ({
  type: Actions.DELETE_POST,
  payload: postId,
})
