import { createStore, combineReducers, applyMiddleware } from 'redux'
import appReducer from '../reducers/app'
import memberReducer from '../reducers/member'
import eventReducer from '../reducers/event'
import logger from 'redux-logger'
import thunk from 'redux-thunk'



const reducers = combineReducers({
  app: appReducer,
  members: memberReducer,
  events: eventReducer,
})

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducers, middleware)