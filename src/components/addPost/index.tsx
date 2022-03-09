import React, { useState } from 'react'
import styles from './style.module.css'
import global from '../../global.module.css'
import { useDispatch } from 'react-redux'
import { addPost } from '../../actions'
import { IPost } from '../../types'

interface IProps {}

const AddPost: React.FC<IProps> = (): React.ReactElement => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const dispatch = useDispatch()

  const onAddPostClick = (): void => {
    if (!title || !content) return

    const newPost: IPost = {
      id: Date.now(),
      title: title,
      content: content,
    }

    dispatch(addPost(newPost))
    setTitle('')
    setContent('')
  }

  return (
    <div className={styles.addPostFormWrapper}>
      <input
        className={styles.formInput}
        type='text'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoComplete='off'
      />
      <input
        className={styles.formInput}
        type='text'
        name='content'
        value={content}
        onChange={e => setContent(e.target.value)}
        autoComplete='off'
      />
      <button className={global.primaryButton} onClick={onAddPostClick}>
        Add Post
      </button>
    </div>
  )
}

export default AddPost
