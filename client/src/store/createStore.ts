import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import makeRootReducer from './reducers'

const createStore = (initialState = {}) => {
  // const middleware = [thunk]
  const enhancers = []
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
  )
  return store
}

export default createStore
