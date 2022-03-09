import { createStore } from 'redux'
import { rootReducer, RootStateType } from '../reducers'

const initialState: RootStateType = {
  users: [],
  posts: [],
}

export const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
