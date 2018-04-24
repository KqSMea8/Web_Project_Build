import {store} from '../../main'

export const SET_DEMO_DATA = 'SET_DEMO_DATA'

export const setDemoData = demoData => {
  store.dispatch({type: SET_DEMO_DATA, payload: demoData})
}
