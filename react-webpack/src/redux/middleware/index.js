import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const roterHistory = routerMiddleware(history)

export default {
  thunk,
  roterHistory
}
