import React from 'react'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootStateType, IPost } from '../../types'
import AddPost from '../addPost'
import { deletePost } from '../../actions'

interface IProps {}

const Posts: React.FC<IProps> = (): React.ReactElement => {
  const posts: IPost[] = useSelector((state: RootStateType) => state.posts)
  const dispatch = useDispatch()

  const onDeletePost = (postId: number) => {
    dispatch(deletePost(postId))
  }

  return (
    <div className={styles.postsWrapper}>
      <AddPost />
      {posts.map((p: IPost) => (
        <React.Fragment key={p.id}>
          <div className={styles.post} onDoubleClick={() => onDeletePost(p.id)}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Posts
