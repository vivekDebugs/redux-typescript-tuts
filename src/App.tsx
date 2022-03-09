import React from 'react'
import styles from './App.module.css'
import Posts from './components/posts'
import Users from './components/users'

const App: React.FC = (): React.ReactElement => {
  return (
    <div className={styles.App}>
      <Posts />
      <Users />
    </div>
  )
}

export default App
