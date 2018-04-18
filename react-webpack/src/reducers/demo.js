import {
  SET_DEMO_DATA
} from '../actions/demo'

const initState = {
  demoData: 'This is default DemoData'
}

export default (state = initState, action) => {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case SET_DEMO_DATA:
      return {
        ...state,
        demoData: action.payload
      }
    default:
      return state
  }
}