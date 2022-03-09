import React, { useEffect, useRef } from 'react'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootStateType, IUser } from '../../types'
import { addUser, deleteUser } from '../../actions'
import global from '../../global.module.css'

interface IProps {}

const Users: React.FC<IProps> = (): React.ReactElement => {
  const users: IUser[] = useSelector((state: RootStateType) => state.users)
  const dispatch = useDispatch()

  const fetchNewUser = useRef(() => {})

  interface IUserName {
    first: string
    last: string
    title: string
  }

  interface IUserPicture {
    large: string
    medium: string
    thumbnail: string
  }

  interface IUserApi {
    name: IUserName
    picture: IUserPicture
  }

  useEffect(() => {
    fetchNewUser.current()
  }, [])

  const getName = (name: IUserName) => {
    return `${name.first} ${name.last}`
  }

  fetchNewUser.current = async (): Promise<void> => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    const { name, picture }: IUserApi = data.results[0]
    const newUser: IUser = {
      id: Date.now(),
      name: getName(name),
      imgUrl: picture.thumbnail,
    }
    dispatch(addUser(newUser))
  }

  const onAddUserClick = (): void => {
    fetchNewUser.current()
  }

  const onDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId))
  }

  return (
    <div className={styles.usersWrapper}>
      <div>
        <button className={global.primaryButton} onClick={onAddUserClick}>
          Add User
        </button>
      </div>
      {users.map((u: IUser) => (
        <React.Fragment key={u.id}>
          <div className={styles.user} onDoubleClick={() => onDeleteUser(u.id)}>
            <b>{u.name}</b>
            <img src={u.imgUrl} alt={u.name} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Users
